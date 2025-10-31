import { Smile, Sparkles, Braces, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Smile,
    title: "Odontología General",
    description: "Tratamientos preventivos, limpiezas, obturaciones y cuidado integral de tu salud bucal."
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description: "Blanqueamiento, carillas y tratamientos para lograr la sonrisa que siempre soñaste."
  },
  {
    icon: Braces,
    title: "Ortodoncia",
    description: "Corrección de la posición dental con brackets tradicionales e invisibles."
  },
  {
    icon: Layers,
    title: "Implantes",
    description: "Reemplazo de piezas dentales perdidas con soluciones permanentes y naturales."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos tratamientos odontológicos completos con tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
