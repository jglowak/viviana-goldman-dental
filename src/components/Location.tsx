import { MapPin, Clock, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="consultorio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestro Consultorio
          </h2>
          <p className="text-lg text-muted-foreground">
            Visitanos en Villa Crespo, Buenos Aires
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Dirección
                  </h3>
                  <p className="text-muted-foreground">
                    Av. Corrientes 5500<br />
                    Villa Crespo, Buenos Aires<br />
                    C1414, Argentina
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Horarios de Atención
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p><strong className="text-foreground">Lunes a Viernes:</strong> 9:00 - 19:00</p>
                    <p><strong className="text-foreground">Sábados:</strong> 9:00 - 13:00</p>
                    <p><strong className="text-foreground">Domingos:</strong> Cerrado</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Contacto
                  </h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Teléfono:</strong> +54 11 1234-5678<br />
                    <strong className="text-foreground">WhatsApp:</strong> +54 11 1234-5678
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="h-[500px] rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4936462715695!2d-58.43806368477042!3d-34.59806498046006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c771eb933%3A0x6b3113b596d78c69!2sAv.%20Corrientes%205500%2C%20C1414%20CABA!5e0!3m2!1ses-419!2sar!4v1234567890123!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del consultorio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
