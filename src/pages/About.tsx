
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-background to-infinity-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Infinity</h1>
              <p className="text-lg text-muted-foreground mb-12">
                Revolutionizing the financial landscape through cutting-edge technology and expertise.
              </p>
              
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2025, Infinity emerged from a vision to bridge the gap between traditional financial services and modern technology. Our founders, with decades of experience in finance and technology sectors, recognized the need for a more intuitive, accessible, and powerful financial ecosystem.
                  </p>
                  <p className="text-muted-foreground">
                    Since our inception, we've been committed to developing innovative solutions that empower individuals and institutions to navigate the complexities of global finance with confidence and ease.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Our Philosophy</h2>
                  <p className="text-muted-foreground">
                    At Infinity, we believe that financial tools should be accessible, transparent, and empowering. We are committed to democratizing finance through technology, making sophisticated financial capabilities available to everyone. Our philosophy is built on three core principles:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                    <div className="p-6 rounded-lg bg-infinity-50 dark:bg-infinity-900/30">
                      <h3 className="text-xl font-bold mb-2">Innovation</h3>
                      <p className="text-muted-foreground">
                        Constantly pushing boundaries to create groundbreaking financial solutions
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-lg bg-infinity-50 dark:bg-infinity-900/30">
                      <h3 className="text-xl font-bold mb-2">Integrity</h3>
                      <p className="text-muted-foreground">
                        Maintaining the highest standards of honesty, transparency, and ethics
                      </p>
                    </div>
                    
                    <div className="p-6 rounded-lg bg-infinity-50 dark:bg-infinity-900/30">
                      <h3 className="text-xl font-bold mb-2">Impact</h3>
                      <p className="text-muted-foreground">
                        Creating meaningful change in how people interact with financial systems
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Leadership Team</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-infinity-100 dark:bg-infinity-900"></div>
                      <div>
                        <h3 className="text-lg font-bold">Anupam Singh</h3>
                        <p className="text-sm text-muted-foreground">CEO & Co-Founder</p>
                      </div>
                    </div>
                    

                    

                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
