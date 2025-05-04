import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen, Clock, Award } from "lucide-react";
import { toast } from "sonner";

// Sample course data - in a real app, this would come from an API
const courses = {
  "intro-to-stock-market": {
    title: "Introduction to Stock Market",
    lessons: [
      {
        slug: "what-is-stock-market",
        title: "What is the Stock Market?",
        content: `
          <h2>Understanding the Stock Market</h2>
          <p>A stock market is a public market where you can buy and sell shares for publicly listed companies. The stocks, also known as equities, represent ownership in the company. The stock exchange is the mediator that allows the buying and selling of shares.</p>
          
          <h3>Key Stock Market Concepts</h3>
          <p>The primary purpose of a stock market is to provide a platform for companies to raise capital and for investors to participate in the financial achievements of the companies, essentially by buying and selling shares.</p>
          
          <h3>Major Stock Exchanges</h3>
          <ul>
            <li><strong>New York Stock Exchange (NYSE):</strong> The largest stock exchange in the world by market capitalization.</li>
            <li><strong>NASDAQ:</strong> Known for its technology stocks, it's the second-largest exchange in the world.</li>
            <li><strong>Tokyo Stock Exchange:</strong> The largest stock exchange in Asia.</li>
            <li><strong>London Stock Exchange:</strong> One of the oldest stock exchanges in the world.</li>
            <li><strong>Bombay Stock Exchange:</strong> The oldest stock exchange in Asia.</li>
          </ul>
          
          <h3>How Stocks Work</h3>
          <p>When you buy a company's stock, you're purchasing a small piece of that company, called a share. Shareholders are rewarded when companies perform well and make money; the value of shares can rise, and the company may distribute some profits in the form of dividends.</p>
          
          <p>Stock prices change daily as a result of market forces. This means that stock prices change because of supply and demand. If more people want to buy a stock (demand) than sell it (supply), then the price moves up. Conversely, if more people wanted to sell a stock than buy it, there would be greater supply than demand, and the price would fall.</p>
          
          <h3>Why Companies Issue Stock</h3>
          <p>Companies issue stock to raise money for various reasons including growth, expansion, new projects, or to pay off debt. By selling shares to the public, companies can raise capital without taking on debt.</p>
        `,
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
        duration: "30 minutes",
        difficulty: "Beginner",
        relatedResources: [
          { title: "Stock Market Basics", link: "#" },
          { title: "How to Research Stocks", link: "#" },
          { title: "Understanding Market Indices", link: "#" },
        ]
      },
      {
        slug: "how-to-invest",
        title: "How to Start Investing",
        content: `
          <h2>Getting Started with Investing</h2>
          <p>Investing in stocks can be an excellent way to grow wealth over time. While it may seem intimidating at first, following a methodical approach can help you start your investment journey with confidence.</p>
          
          <h3>Step 1: Set Your Investment Goals</h3>
          <p>Before you begin investing, it's important to define what you're investing for. Are you saving for retirement, a down payment on a home, or your children's education? Your goals will influence your investment strategy, including how much risk you're willing to take and your time horizon.</p>
          
          <h3>Step 2: Understand Your Risk Tolerance</h3>
          <p>Risk tolerance is your ability and willingness to lose some or all of your original investment in exchange for greater potential returns. An aggressive investor, or one with a high-risk tolerance, is willing to risk losing money to get potentially better results. A conservative investor, or one with a low-risk tolerance, favors investments that maintain his or her original investment.</p>
          
          <h3>Step 3: Create a Diversified Portfolio</h3>
          <p>Diversification is a risk management strategy that mixes a variety of investments within a portfolio. The rationale is that a portfolio constructed of different kinds of investments will, on average, yield higher returns and pose a lower risk than any individual investment found within the portfolio.</p>
          
          <h3>Step 4: Choose Your Investment Account</h3>
          <p>To buy stocks, you'll need an investment account. For most people, this means choosing between a standard brokerage account and a retirement account like an IRA. Both account types will allow you to buy stocks, mutual funds, and ETFs. The main considerations here are why you're investing and when you want to withdraw the money.</p>
          
          <h3>Step 5: Learn the Basics of Stock Analysis</h3>
          <p>There are two main schools of stock analysis: fundamental analysis and technical analysis. Fundamental analysis involves analyzing a company's financial statements to determine the fair value of the business, while technical analysis assumes a stock's price already reflects all publicly-available information and focuses instead on statistical trends in price movement.</p>
        `,
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
        duration: "45 minutes",
        difficulty: "Beginner",
        relatedResources: [
          { title: "Creating an Investment Strategy", link: "#" },
          { title: "Understanding Risk vs Return", link: "#" },
          { title: "Types of Investment Accounts", link: "#" },
        ]
      }
    ]
  },
  "fundamental-analysis": {
    title: "Fundamental Analysis",
    lessons: [
      {
        slug: "financial-statements",
        title: "Understanding Financial Statements",
        content: `
          <h2>Financial Statements: The Building Blocks of Fundamental Analysis</h2>
          <p>Financial statements are formal records of the financial activities and position of a business, person, or other entity. They provide a snapshot of a company's financial health, allowing investors to make informed decisions about potential investments.</p>
          
          <h3>The Three Major Financial Statements</h3>
          
          <h4>1. Income Statement (Profit & Loss Statement)</h4>
          <p>The income statement shows a company's revenues, expenses, and profits over a specific period. It provides a clear picture of whether a company is profitable and how efficiently it generates that profit.</p>
          <p>Key components include:</p>
          <ul>
            <li><strong>Revenue:</strong> The total amount of money generated from sales of products or services.</li>
            <li><strong>Cost of Goods Sold (COGS):</strong> Direct costs attributable to the production of goods sold by a company.</li>
            <li><strong>Gross Profit:</strong> Revenue minus COGS.</li>
            <li><strong>Operating Expenses:</strong> Costs associated with running the business that aren't directly tied to production.</li>
            <li><strong>Net Income:</strong> The "bottom line" or total earnings after all expenses, taxes, and costs have been deducted from revenue.</li>
          </ul>
          
          <h4>2. Balance Sheet</h4>
          <p>The balance sheet provides a snapshot of a company's financial position at a specific point in time. It lists the company's assets, liabilities, and shareholders' equity.</p>
          <p>Key components include:</p>
          <ul>
            <li><strong>Assets:</strong> Resources owned by the company that have economic value.</li>
            <li><strong>Liabilities:</strong> Obligations or debts that the company owes to others.</li>
            <li><strong>Shareholders' Equity:</strong> The net worth of the company, calculated as assets minus liabilities.</li>
          </ul>
          
          <h4>3. Cash Flow Statement</h4>
          <p>The cash flow statement tracks the inflow and outflow of cash in a business over a specific period. It helps investors understand how a company manages its cash to fund operations and investments.</p>
          <p>The statement is divided into three sections:</p>
          <ul>
            <li><strong>Operating Activities:</strong> Cash flows related to the company's core business operations.</li>
            <li><strong>Investing Activities:</strong> Cash flows from the purchase or sale of long-term assets.</li>
            <li><strong>Financing Activities:</strong> Cash flows between a company and its owners and creditors.</li>
          </ul>
          
          <h3>Key Financial Ratios</h3>
          <p>Financial ratios are useful tools for analyzing a company's financial health and performance. They allow investors to compare companies within the same industry or against historical performance.</p>
          <ul>
            <li><strong>Liquidity Ratios:</strong> Measure a company's ability to pay short-term obligations (Current Ratio, Quick Ratio).</li>
            <li><strong>Profitability Ratios:</strong> Evaluate a company's ability to generate profits (Return on Equity, Profit Margin).</li>
            <li><strong>Solvency Ratios:</strong> Assess a company's ability to meet long-term obligations (Debt-to-Equity, Interest Coverage).</li>
            <li><strong>Valuation Ratios:</strong> Compare a company's stock price to various performance metrics (P/E Ratio, P/B Ratio).</li>
          </ul>
        `,
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0110?q=80&w=1000&auto=format&fit=crop",
        duration: "60 minutes",
        difficulty: "Intermediate",
        relatedResources: [
          { title: "Reading Annual Reports", link: "#" },
          { title: "Financial Ratio Analysis Guide", link: "#" },
          { title: "Red Flags in Financial Statements", link: "#" },
        ]
      }
    ]
  },
  "technical-analysis": {
    title: "Technical Analysis",
    lessons: [
      {
        slug: "chart-patterns",
        title: "Chart Patterns and Indicators",
        content: `
          <h2>Understanding Chart Patterns and Technical Indicators</h2>
          <p>Technical analysis is the study of historical price action to forecast future price movements. Chart patterns and technical indicators are essential tools used by traders to identify potential trading opportunities.</p>
          
          <h3>Common Chart Patterns</h3>
          
          <h4>Trend Continuation Patterns</h4>
          <ul>
            <li><strong>Flags and Pennants:</strong> Short-term consolidation patterns that usually form after a sharp price movement.</li>
            <li><strong>Ascending/Descending Triangles:</strong> Characterized by a horizontal line (resistance/support) and an upward/downward sloping line.</li>
            <li><strong>Cup and Handle:</strong> Resembles a teacup on a chart, followed by a smaller downward drift (the handle).</li>
            <li><strong>Rectangles:</strong> Price consolidations between parallel horizontal support and resistance lines.</li>
          </ul>
          
          <h4>Reversal Patterns</h4>
          <ul>
            <li><strong>Head and Shoulders:</strong> Consists of three peaks with the middle peak (head) being higher than the other two peaks (shoulders).</li>
            <li><strong>Double Tops and Bottoms:</strong> Characterized by two peaks/troughs at approximately the same price level.</li>
            <li><strong>Rounding Bottom/Top:</strong> Gradual, rounded reversal in price direction.</li>
          </ul>
          
          <h3>Key Technical Indicators</h3>
          
          <h4>Trend Indicators</h4>
          <ul>
            <li><strong>Moving Averages:</strong> Calculate the average price over a specific time period, smoothing out price data to identify trends.</li>
            <li><strong>Moving Average Convergence Divergence (MACD):</strong> Shows the relationship between two moving averages of a security's price.</li>
            <li><strong>Parabolic SAR:</strong> Identifies potential reversals in market trend.</li>
          </ul>
          
          <h4>Momentum Indicators</h4>
          <ul>
            <li><strong>Relative Strength Index (RSI):</strong> Measures the speed and change of price movements, indicating overbought or oversold conditions.</li>
            <li><strong>Stochastic Oscillator:</strong> Compares a security's closing price to its price range over a specific period.</li>
            <li><strong>Rate of Change (ROC):</strong> Measures the percentage change in price between the current price and the price a certain number of periods ago.</li>
          </ul>
          
          <h4>Volume Indicators</h4>
          <ul>
            <li><strong>On-Balance Volume (OBV):</strong> Relates volume to price change to confirm price trends or warn of potential reversals.</li>
            <li><strong>Volume Rate of Change:</strong> Measures the percentage change in volume over a specific period.</li>
            <li><strong>Chaikin Money Flow:</strong> Measures buying and selling pressure over a specific period.</li>
          </ul>
          
          <h3>Combining Chart Patterns and Indicators</h3>
          <p>While chart patterns and indicators can be valuable on their own, many traders combine multiple tools to increase the probability of successful trades. For example, a trader might use a chart pattern to identify a potential trade setup, then use momentum and volume indicators to confirm the signal before entering the trade.</p>
          
          <p>It's important to remember that no technical tool is perfect, and false signals can occur. Successful technical traders typically use risk management strategies and don't rely solely on one pattern or indicator for trading decisions.</p>
        `,
        image: "https://images.unsplash.com/photo-1642790551116-18eda95c0e7a?q=80&w=1000&auto=format&fit=crop",
        duration: "75 minutes",
        difficulty: "Advanced",
        relatedResources: [
          { title: "Advanced Chart Pattern Recognition", link: "#" },
          { title: "Using Multiple Timeframe Analysis", link: "#" },
          { title: "Volume Analysis in Trading", link: "#" },
        ]
      }
    ]
  }
};

const CourseLesson = () => {
  const { courseId, lessonSlug } = useParams();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Find the course and lesson
  const course = courseId ? courses[courseId] : null;
  const lesson = course ? course.lessons.find(l => l.slug === lessonSlug) : null;
  
  // Get the next lesson if available
  const currentIndex = course ? course.lessons.findIndex(l => l.slug === lessonSlug) : -1;
  const nextLesson = currentIndex !== -1 && currentIndex < course.lessons.length - 1 
    ? course.lessons[currentIndex + 1] 
    : null;
  
  // Get the previous lesson if available
  const previousLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonSlug]);
  
  if (!lesson || !course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Button variant="outline" onClick={() => navigate('/learning-resources')}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Learning Resources
          </Button>
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-2">Lesson not found</h2>
            <p className="text-muted-foreground">The lesson you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleMarkComplete = () => {
    setIsCompleted(true);
    toast.success("Lesson marked as completed!");
    
    // In a real app, you would update the user's progress in a database
    setTimeout(() => {
      if (nextLesson) {
        toast("Proceeding to next lesson", {
          action: {
            label: "Go Now",
            onClick: () => navigate(`/learning/${courseId}/${nextLesson.slug}`)
          }
        });
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Navigation */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Button variant="outline" onClick={() => navigate('/learning-resources')}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Learning Resources
            </Button>
            
            <div className="text-sm text-muted-foreground">
              Course: <span className="font-medium">{course.title}</span>
            </div>
          </div>
          
          {/* Lesson Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{lesson.title}</h1>
            <div className="flex flex-wrap gap-4">
              {lesson.duration && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" /> {lesson.duration} read
                </div>
              )}
              {lesson.difficulty && (
                <div className="flex items-center text-sm">
                  <Award className="h-4 w-4 mr-1" /> 
                  <span className={`
                    ${lesson.difficulty === 'Beginner' ? 'text-green-600 dark:text-green-400' :
                      lesson.difficulty === 'Intermediate' ? 'text-blue-600 dark:text-blue-400' :
                      'text-purple-600 dark:text-purple-400'}
                  `}>
                    {lesson.difficulty} level
                  </span>
                </div>
              )}
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 mr-1" /> Lesson {currentIndex + 1} of {course.lessons.length}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              {lesson.image && (
                <div className="mb-8">
                  <img 
                    src={lesson.image} 
                    alt={lesson.title}
                    className="w-full h-auto rounded-lg object-cover"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
              )}
              
              {/* Lesson Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: lesson.content }}></div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                {previousLesson ? (
                  <Button 
                    variant="outline" 
                    onClick={() => navigate(`/learning/${courseId}/${previousLesson.slug}`)}
                    className="flex items-center"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous: {previousLesson.title}
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {nextLesson ? (
                  <Button 
                    onClick={() => navigate(`/learning/${courseId}/${nextLesson.slug}`)}
                    className="flex items-center"
                  >
                    Next: {nextLesson.title}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={() => navigate('/learning-resources')}>
                    Return to Courses
                  </Button>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Completion Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Track Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleMarkComplete}
                    className="w-full"
                    variant={isCompleted ? "outline" : "default"}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Completed
                      </>
                    ) : (
                      "Mark as Complete"
                    )}
                  </Button>
                </CardContent>
              </Card>
              
              {/* Related Resources */}
              {lesson.relatedResources && (
                <Card>
                  <CardHeader>
                    <CardTitle>Related Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {lesson.relatedResources.map((resource, index) => (
                        <li key={index}>
                          <a 
                            href={resource.link} 
                            className="text-infinity-600 dark:text-infinity-400 hover:underline flex items-center"
                          >
                            <ArrowRight className="h-4 w-4 mr-2" />
                            {resource.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
              
              {/* Other lessons in this course */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.lessons.map((courseLesson, index) => (
                      <li key={index} className={`
                        ${courseLesson.slug === lesson.slug ? 'bg-infinity-50 dark:bg-infinity-900/30' : ''}
                        rounded-md
                      `}>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start text-left p-2 h-auto ${
                            courseLesson.slug === lesson.slug ? 'font-medium' : ''
                          }`}
                          onClick={() => navigate(`/learning/${courseId}/${courseLesson.slug}`)}
                        >
                          <div>
                            <span className="block">{index + 1}. {courseLesson.title}</span>
                            {courseLesson.duration && (
                              <span className="text-xs text-muted-foreground">{courseLesson.duration}</span>
                            )}
                          </div>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseLesson;
