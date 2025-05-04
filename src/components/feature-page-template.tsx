
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ReactNode } from "react";

export interface FeaturePageProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string[];
  image: string;
  benefits: {
    title: string;
    description: string;
  }[];
  howItWorks?: {
    step: string;
    description: string;
  }[];
  useCases?: {
    title: string;
    description: string;
  }[];
  additionalContent?: ReactNode;
  children?: ReactNode;
}

export function FeaturePageTemplate({
  title,
  subtitle,
  icon,
  description,
  image,
  benefits,
  howItWorks = [],
  useCases = [],
  additionalContent,
  children,
}: FeaturePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-infinity-50 dark:to-infinity-950/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="bg-infinity-100 dark:bg-infinity-900/40 rounded-full p-4">
                    {icon}
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold">{title}</h1>
                <p className="text-xl text-muted-foreground">{subtitle}</p>
                
                <div className="space-y-4">
                  {description.map((paragraph, i) => (
                    <p key={i} className="text-lg">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="p-6 rounded-xl bg-infinity-50 dark:bg-infinity-900/30 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-serif font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {howItWorks.length > 0 && (
          <section className="py-16 bg-infinity-50/50 dark:bg-infinity-950/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">Step by step guide to leveraging this feature</p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                {howItWorks.map((step, i) => (
                  <div key={i} className="flex gap-6 mb-12 last:mb-0">
                    <div className="bg-infinity-100 dark:bg-infinity-900/40 rounded-full h-12 w-12 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-xl font-bold text-infinity-700 dark:text-infinity-400">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-3">{step.step}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {useCases.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center mb-12">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, i) => (
                  <div key={i} className="p-6 rounded-xl bg-infinity-50 dark:bg-infinity-900/30">
                    <h3 className="text-xl font-serif font-bold mb-4">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Render additional content if provided */}
        {additionalContent}
        
        {/* Render children content if provided */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
