import osdelogo from "@/assets/osde-logo.png";
import galenologo from "@/assets/galeno-logo.png";
import swisslogo from "@/assets/swiss-logo.png";

const insuranceProviders = [
  { name: "OSDE", logo: osdelogo },
  { name: "Galeno", logo: galenologo },
  { name: "Swiss Medical", logo: swisslogo },
];

const Insurance = () => {
  return (
    <section id="prepagas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trabajamos con Prepagas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aceptamos las principales obras sociales y prepagas para tu comodidad
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {insuranceProviders.map((provider, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-card rounded-xl shadow-md border border-border p-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <img 
                  src={provider.logo} 
                  alt={`Logo ${provider.name}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {provider.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Consultá por otras obras sociales y planes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
