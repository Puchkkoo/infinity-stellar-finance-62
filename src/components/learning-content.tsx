
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export interface ContentItem {
  title: string;
  content: string;
  image?: string;
  slug?: string;
  duration?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

interface LearningContentProps {
  content: ContentItem[];
  completedTopics: number;
  onMarkComplete: (index: number) => void;
  progress: number;
  courseId?: string;
}

export function LearningContent({ content, completedTopics, onMarkComplete, progress, courseId }: LearningContentProps) {
  const navigate = useNavigate();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  const handleTopicClick = (slug: string | undefined, index: number) => {
    if (slug && courseId) {
      navigate(`/learning/${courseId}/${slug}`);
    } else {
      // Toggle accordion if no slug is provided
      setExpandedItem(expandedItem === `item-${index}` ? null : `item-${index}`);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Course Content</h3>
          <div className="text-sm text-muted-foreground">
            {completedTopics} of {content.length} topics completed
          </div>
        </div>
        
        <Accordion 
          type="single" 
          collapsible 
          className="w-full"
          value={expandedItem}
          onValueChange={setExpandedItem}
        >
          {content.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <div className="flex group">
                <AccordionTrigger className="flex-grow">
                  <div className="flex items-center flex-grow">
                    <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center text-xs ${index < completedTopics ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}`}>
                      {index < completedTopics ? "✓" : index + 1}
                    </div>
                    <div className="flex justify-between items-center flex-grow">
                      <span>{item.title}</span>
                      {item.duration && (
                        <span className="text-xs text-muted-foreground ml-2">{item.duration}</span>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                
                {/* View button for direct navigation */}
                {item.slug && courseId && (
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity mt-3 mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTopicClick(item.slug, index);
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <AccordionContent>
                <div className="pl-9">
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    {item.image && (
                      <div className="w-full md:w-1/4">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-auto rounded-md object-cover"
                          style={{ maxHeight: '150px' }}
                        />
                      </div>
                    )}
                    <div className={item.image ? "w-full md:w-3/4" : "w-full"}>
                      <p className="text-muted-foreground mb-4">{item.content}</p>
                      
                      <div className="flex flex-wrap gap-2 items-center">
                        <Button 
                          size="sm" 
                          variant={index < completedTopics ? "outline" : "default"}
                          onClick={() => onMarkComplete(index)}
                          className="flex items-center gap-1"
                        >
                          {index < completedTopics ? (
                            <>
                              <CheckCircle className="h-4 w-4" /> Completed
                            </>
                          ) : (
                            "Mark as Complete"
                          )}
                        </Button>
                        
                        {item.slug && courseId && (
                          <Button 
                            size="sm"
                            variant="outline"
                            onClick={() => handleTopicClick(item.slug, index)}
                            className="flex items-center gap-1"
                          >
                            View Full Lesson <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        )}
                        
                        {item.difficulty && (
                          <Badge item={item.difficulty} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {progress === 100 && (
        <Card className="mt-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/30">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700 dark:text-green-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              Course Completed!
            </CardTitle>
            <CardDescription className="text-green-700/80 dark:text-green-400/80">
              Congratulations! You've completed this course. You can now download your certificate or move on to the next course in your learning journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" onClick={() => toast.success("Certificate downloaded")}>
              Download Certificate
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Badge component for difficulty levels
const Badge = ({ item }: { item: string }) => {
  const getBadgeStyle = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <span className={`text-xs px-2 py-1 rounded ${getBadgeStyle(item)}`}>
      {item}
    </span>
  );
};
