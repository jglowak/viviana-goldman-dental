import { Heart, Clock, UserCheck, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Heart,
    title: "Atención Particular Personalizada",
    description: "Cada paciente recibe un tratamiento único y adaptado a sus necesidades específicas."
  },
  {
    icon: Clock,
    title: "Sin Demoras",
    description: "Respetamos tu tiempo con turnos puntuales y sin largas esperas en sala."
  },
  {
    icon: UserCheck,
    title: "Trato Cercano y Profesional",
    description: "Construimos una relación de confianza para que te sientas cómodo en cada visita."
  },
  {
    icon: Building2,
    title: "Consultorio Equipado",
    description: "Tecnología moderna en un ambiente cálido y acogedor en Villa Crespo."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos enfocamos en brindarte una experiencia dental excepcional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            También aceptamos <strong className="text-foreground">Sancor Salud</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;