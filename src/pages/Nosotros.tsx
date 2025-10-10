import { Target, Eye, Heart, Sparkles, Leaf, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const Nosotros = () => {
  const valores = [
    {
      icon: Sparkles,
      title: "Innovación",
      description:
        "Lideramos el cambio en el diseño de interiores incorporando las tecnologías más recientes para ofrecer experiencias únicas",
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
    {
      icon: Eye,
      title: "Transparencia",
      description:
        "Fomentamos la confianza a través de procesos claros y comunicación constante",
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description:
        "Promovemos decisiones de diseño responsables y ecológicas",
    },
    {
      icon: Globe,
      title: "Colaboración Global",
      description:
        "Impulsamos la creatividad mediante el trabajo conjunto entre expertos, clientes y comunidades alrededor del mundo",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <img src={logo} alt="Company Logo" className="w-20 h-20 flex items-center justify-center mx-auto mb-8"/>
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
                Transformar la forma en que las personas interactúan con sus 
                espacios, utilizando tecnología holográfica e inteligencia 
                artificial para que diseñar o remodelar sea un proceso 
                inspirador, eficiente y libre de incertidumbre.
                Queremos que cada usuario pueda experimentar su hogar antes 
                de crearlo, tomando decisiones con confianza y emoción.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser líderes globales en la digitalización del diseño interior, 
                aspirando a que cada hogar y espacio comercial pueda 
                beneficiarse de nuestra tecnología de visualización inmersiva.
                Buscamos que HoloHome se convierta en sinónimo de innovación, 
                comodidad y sostenibilidad en el diseño del futuro. .
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
