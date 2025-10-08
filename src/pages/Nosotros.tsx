import { Target, Eye, Heart, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Nosotros = () => {
  const valores = [
    {
      icon: Sparkles,
      title: "Innovación",
      description:
        "Lideramos el cambio en el diseño de interiores con tecnología de vanguardia",
    },
    {
      icon: Heart,
      title: "Personalización",
      description:
        "Cada proyecto es único y diseñado según las necesidades de nuestros clientes",
    },
    {
      icon: Target,
      title: "Eficiencia",
      description:
        "Optimizamos tiempo y recursos mediante la visualización previa de espacios",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-8 animate-glow">
              <Sparkles className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Sobre <span className="text-gradient">HoloHome</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transformando el futuro del diseño de interiores
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Transformar la forma en que las personas diseñan y equipan sus
                espacios, combinando tecnología holográfica e inteligencia
                artificial con diseño personalizado. Hacemos que el proceso de
                renovación sea accesible, eficiente y emocionante para todos.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser líderes globales en el sector del diseño de interiores
                digital, estableciendo nuevos estándares de innovación y
                excelencia. Aspiramos a que cada hogar y espacio comercial pueda
                beneficiarse de nuestra tecnología de visualización inmersiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nuestros <span className="text-gradient">Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Los principios que guían cada decisión y proyecto en HoloHome
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover-lift text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{valor.title}</h3>
                  <p className="text-muted-foreground">{valor.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Nuestra <span className="text-gradient">Tecnología</span>
            </h2>

            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-muted/50 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-3">
                  Visualización Holográfica
                </h3>
                <p className="text-muted-foreground">
                  Utilizamos la última tecnología en proyección holográfica para
                  crear representaciones tridimensionales de tus espacios,
                  permitiéndote explorar cada detalle antes de realizar cambios
                  físicos.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-muted/50 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-3">
                  Inteligencia Artificial
                </h3>
                <p className="text-muted-foreground">
                  Nuestra IA analiza tus preferencias, el espacio disponible y
                  las últimas tendencias para ofrecerte recomendaciones
                  personalizadas que se ajustan perfectamente a tu estilo de vida
                  y presupuesto.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-muted/50 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-3">
                  Gestión Integral
                </h3>
                <p className="text-muted-foreground">
                  No solo diseñamos tu espacio, también gestionamos la compra de
                  productos con nuestros aliados y coordinamos la instalación,
                  haciendo que todo el proceso sea simple y sin estrés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
