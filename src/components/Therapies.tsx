import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Wind, Flame, Mountain, Waves, Sparkles } from "lucide-react";
import { useState } from "react";
import TherapyBookingModal from "./TherapyBookingModal";
import { useToast } from "@/hooks/use-toast";

const Therapies = () => {
  const { toast } = useToast();
  const [selectedTherapy, setSelectedTherapy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const therapies = [
    {
      icon: Droplets,
      title: "Abhyanga",
      subtitle: "Full Body Oil Massage",
      description: "A synchronized full-body massage with warm herbal oils that deeply nourishes the tissues, improves circulation, and promotes relaxation.",
      benefits: ["Stress Relief", "Improved Circulation", "Skin Nourishment"],
      duration: "60-90 mins",
      color: "from-blue-500/20 to-primary/20"
    },
    {
      icon: Wind,
      title: "Shirodhara",
      subtitle: "Oil Pouring Therapy",
      description: "A continuous stream of warm oil poured gently over the forehead to calm the nervous system and achieve deep mental relaxation.",
      benefits: ["Mental Clarity", "Deep Relaxation", "Better Sleep"],
      duration: "45-60 mins",
      color: "from-primary/20 to-accent/20"
    },
    {
      icon: Flame,
      title: "Panchakarma Detox",
      subtitle: "Complete Cleansing",
      description: "A comprehensive detoxification program that eliminates toxins from deep tissues and restores natural balance.",
      benefits: ["Deep Detox", "Renewed Energy", "Enhanced Immunity"],
      duration: "7-21 days",
      color: "from-accent/20 to-orange-500/20"
    },
    {
      icon: Mountain,
      title: "Kati Basti",
      subtitle: "Lower Back Therapy",
      description: "Warm medicated oil pooled over the lower back area to relieve pain, stiffness, and strengthen the spine.",
      benefits: ["Back Pain Relief", "Improved Flexibility", "Muscle Strength"],
      duration: "30-45 mins",
      color: "from-green-500/20 to-primary/20"
    },
    {
      icon: Waves,
      title: "Udvartana",
      subtitle: "Herbal Powder Massage",
      description: "An invigorating massage with herbal powders that helps reduce weight, improve skin texture, and enhance circulation.",
      benefits: ["Weight Management", "Skin Toning", "Cellulite Reduction"],
      duration: "45-60 mins",
      color: "from-primary/20 to-purple-500/20"
    },
    {
      icon: Sparkles,
      title: "Nasya",
      subtitle: "Nasal Cleansing",
      description: "Medicated oil administration through the nose to clear respiratory passages and improve mental clarity.",
      benefits: ["Respiratory Health", "Mental Clarity", "Sinus Relief"],
      duration: "20-30 mins",
      color: "from-accent/20 to-primary/20"
    }
  ];

  const handleBookTherapy = (therapy) => {
    setSelectedTherapy(therapy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTherapy(null);
  };

  const handleBookAppointment = () => {
    toast({
      title: "Appointment Request Sent!",
      description: `We'll contact you soon to confirm your ${selectedTherapy?.title} therapy appointment.`,
    });
    handleCloseModal();
  };

  return (
    <section id="therapies" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Authentic Therapies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the healing power of traditional Ayurvedic therapies, each carefully designed 
            to address specific health concerns and promote overall well-being.
          </p>
        </div>

        {/* Therapies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapies.map((therapy, index) => {
            const IconComponent = therapy.icon;
            return (
              <Card key={index} className={`group card-hover border-0 shadow-card bg-gradient-to-br ${therapy.color} backdrop-blur-sm overflow-hidden relative`}>
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      {therapy.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {therapy.title}
                  </CardTitle>
                  <p className="text-primary font-medium">{therapy.subtitle}</p>
                </CardHeader>
                
                <CardContent className="relative">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {therapy.description}
                  </p>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {therapy.benefits.map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleBookTherapy(therapy)}
                    className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground font-medium group-hover:shadow-lg transition-all duration-300"
                  >
                    Book This Therapy
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which therapy is right for you?
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
          >
            Get Personalized Consultation
          </Button>
        </div>
      </div>

      {/* Therapy Booking Modal */}
      <TherapyBookingModal
        therapy={selectedTherapy}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onBookAppointment={handleBookAppointment}
      />
    </section>
  );
};

export default Therapies;