
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface ContentItem {
  title: string;
  content: string;
}

interface LearningContentProps {
  content: ContentItem[];
  completedTopics: number;
  onMarkComplete: (index: number) => void;
  progress: number;
}

export function LearningContent({ content, completedTopics, onMarkComplete, progress }: LearningContentProps) {
  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Course Content</h3>
          <div className="text-sm text-muted-foreground">
            {completedTopics} of {content.length} topics completed
          </div>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {content.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center text-xs ${index < completedTopics ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}`}>
                    {index < completedTopics ? "✓" : index + 1}
                  </div>
                  <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-9">
                  <p className="text-muted-foreground mb-4">{item.content}</p>
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
