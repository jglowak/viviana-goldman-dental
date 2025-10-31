import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => {
  const handleAppointment = () => {
    window.open("https://wa.me/5491112345678?text=Hola,%20quisiera%20solicitar%20un%20turno", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 40%, hsl(var(--background) / 0.7) 70%, transparent 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Odontóloga en Villa Crespo
            <span className="block text-primary mt-2">Dra. Viviana Goldman</span>
          </h1>
          
          <p className="text-2xl text-foreground mb-4 font-medium">
            Atención personalizada para tu salud dental
          </p>
          
          <p className="text-lg text-muted-foreground mb-8">
            Especialistas en prótesis, estética, endodoncia e implantes dentales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={handleAppointment}
              className="bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-8 py-6 shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Turno
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-2"
            >
              Más Información
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
