import { useRef } from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import farmHero from "@/assets/farm-hero.jpg";
import cropLogo from "@/assets/crop-logo.jpg";
import CropPredictionForm from "@/components/CropPredictionForm";
import { Button } from "@/components/ui/button";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${farmHero})` }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-foreground/40 backdrop-blur-[2px]">

        {/* Hero / Landing Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <img src={cropLogo} alt="Crop Logo" className="h-20 w-20 mx-auto mb-6 drop-shadow-lg" />

            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-primary-foreground">
                AI-Powered Agriculture
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Crop Recommendation
              <br />
              <span className="text-accent">System</span>
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-lg mx-auto mb-10">
              Discover the ideal crop for your land using machine learning — just enter your soil & environmental data.
            </p>

            <Button
              onClick={scrollToForm}
              size="lg"
              className="h-14 px-8 text-base font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              Get Started
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </section>

        {/* Form Section */}
        <section ref={formRef} className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary-foreground mb-2">
                Enter Your Parameters
              </h2>
              <p className="text-primary-foreground/70">
                Fill in the soil and climate details below
              </p>
            </div>

            <CropPredictionForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-primary-foreground/10 py-6 text-sm text-primary-foreground/70">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto px-4">

            {/* Your Name */}
            <p>
              Built by <span className="font-medium text-primary-foreground">Kondapalli Pujitha</span> · AI/ML Developer
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pujitha-kondapalli-955a2b34b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/kondapallipujitha72"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Index;
