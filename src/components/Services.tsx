import { Smile, Sparkles, Braces, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Layers,
    title: "Prótesis Dental",
    description: "Restauración de piezas dentales con prótesis fijas y removibles de alta calidad."
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description: "Blanqueamiento, carillas y diseño de sonrisa para lograr resultados naturales."
  },
  {
    icon: Smile,
    title: "Endodoncia",
    description: "Tratamiento de conducto especializado para salvar tus dientes naturales."
  },
  {
    icon: Braces,
    title: "Implantes Dentales",
    description: "Reemplazo permanente de piezas perdidas con implantes de última generación."
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
