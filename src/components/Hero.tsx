import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Star } from "lucide-react";
import heroImage from "@/assets/ayurveda-hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary-light/40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center mb-8 fade-in-up">
            <img 
              src="/lovable-uploads/df7dd0c8-031b-4bd5-830f-4ac3c33ebb32.png" 
              alt="AyurSutra - Panchakarma Wellness Center" 
              className="h-24 md:h-32 w-auto filter brightness-0 invert"
            />
          </div>
          
          {/* Tagline */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 fade-in-up">
            Reviving Wellness through Panchakarma
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up opacity-90">
            Experience the ancient wisdom of Panchakarma - a holistic approach to detoxification, 
            rejuvenation, and healing. Our authentic therapies restore balance to your body, 
            mind, and spirit through time-tested Ayurvedic practices.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 mb-8 fade-in-up">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="text-sm">5000+ Patients Healed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="text-sm">25+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="text-sm">100% Natural Therapies</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 fade-in-up">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-4 text-lg group wellness-glow"
            >
              Book Your Appointment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Leaf className="h-16 w-16 text-accent float-animation" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Leaf className="h-12 w-12 text-accent float-animation" style={{ animationDelay: "2s" }} />
      </div>
    </section>
  );
};

export default Hero;