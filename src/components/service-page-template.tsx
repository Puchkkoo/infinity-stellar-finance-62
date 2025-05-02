
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  advantages: {
    title: string;
    description: string;
  }[];
  differences: {
    title: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  image,
  advantages,
  differences,
  faqs = [],
}: ServicePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-infinity-50 dark:to-infinity-950/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2 space-y-6">
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
            <h2 className="section-title text-center">Key Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
              {advantages.map((advantage, i) => (
                <div key={i} className="p-6 rounded-xl bg-infinity-50 dark:bg-infinity-900/30 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-serif font-bold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-infinity-50/50 dark:bg-infinity-950/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">The Infinity Difference</h2>
              <p className="section-subtitle">What sets us apart from traditional offerings</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {differences.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-infinity-100 dark:bg-infinity-900/40 rounded-full p-3 shrink-0">
                    <span className="flex items-center justify-center w-8 h-8 text-xl font-bold text-infinity-700 dark:text-infinity-400">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {faqs.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="p-6 rounded-xl bg-infinity-50 dark:bg-infinity-900/30">
                    <h3 className="text-xl font-serif font-bold mb-4">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
