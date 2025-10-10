import { useState } from "react";
import { ArrowRight, Sparkles, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import BrandSlider from "@/components/BrandSlider";
import heroImage from "@/assets/hero-interior.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  {
    id: 1,
    title: "Diseño Básico Holográfico",
    description:
      "Visualización holográfica de tu espacio con recomendaciones de IA. Ideal para proyectos pequeños.",
    price: "$2,500,000",
    priceUSD: "$625",
    image: service1,
    fullDescription:
      "Este servicio incluye una sesión de consulta virtual, visualización holográfica 3D de una habitación, recomendaciones personalizadas de diseño basadas en IA, y una lista de productos sugeridos con enlaces directos a nuestros proveedores aliados.",
  },
  {
    id: 2,
    title: "Diseño Premium Completo",
    description:
      "Diseño completo de múltiples espacios con visualización inmersiva y gestión de compras.",
    price: "$7,500,000",
    priceUSD: "$1,875",
    image: service2,
    fullDescription:
      "Incluye diseño completo de hasta 3 habitaciones, visualización holográfica avanzada con interacción en tiempo real, recomendaciones de IA personalizadas, gestión completa de compras con proveedores aliados, y coordinación de instalación.",
  },
  {
    id: 3,
    title: "Proyecto Corporativo",
    description:
      "Solución integral para oficinas y espacios comerciales con tecnología de punta.",
    price: "$15,000,000",
    priceUSD: "$3,750",
    image: service3,
    fullDescription:
      "Diseño completo de espacios corporativos, visualización holográfica multi-usuario, sistema de IA avanzado para optimización de espacios, gestión total de proyecto incluyendo compras e instalación, soporte post-implementación por 6 meses.",
  },
];

const Index = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Tecnología del Futuro, Hoy
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Diseña tu Espacio con{" "}
              <span className="text-gradient">Hologramas e IA</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
              HoloHome combina tecnología holográfica e inteligencia artificial
              para crear espacios únicos. Visualiza, personaliza y transforma tu
              hogar de manera inmersiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="gradient-primary text-primary-foreground text-lg group">
                Comenzar Ahora
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">
              ¿Quiénes <span className="text-gradient">Somos?</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            <b>HoloHome</b> es una plataforma innovadora que une la inteligencia artificial
            con la proyección holográfica para transformar el diseño de interiores
            en una experiencia inmersiva, emocionante y accesible para todos. 
            Revolucionamos la forma de concebir los espacios, permitiendo a nuestros 
            clientes visualizar y personalizar su entorno antes de realizar cualquier 
            cambio físico. <br /><br />

            Creemos que el diseño debe ir más allá de lo funcional: debe inspirar, 
            emocionar y conectar con las personas. Por eso, nuestro equipo 
            multidisciplinario —formado por ingenieros, arquitectos, diseñadores y 
            expertos en tecnología— trabaja en conjunto para convertir cada idea en 
            una experiencia visual única. <br /><br />
                    
            Más que una empresa, <b>HoloHome</b> es un puente entre la creatividad, la 
            tecnología y la vida cotidiana, donde el futuro del diseño de interiores 
            se proyecta, literalmente, frente a tus ojos.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-muted/50 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Innovación</h3>
                <p className="text-sm text-muted-foreground">
                  Tecnología holográfica de vanguardia
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-muted/50 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Confianza</h3>
                <p className="text-sm text-muted-foreground">
                  Alianzas con las mejores marcas
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-muted/50 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Personalización</h3>
                <p className="text-sm text-muted-foreground">
                  Diseños únicos para cada cliente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nuestros <span className="text-gradient">Servicios</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige el plan perfecto para transformar tu espacio con tecnología
              de punta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                onLearnMore={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Marcas Aliadas */}
      <BrandSlider />

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Transformar tu Espacio?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contáctanos hoy y descubre cómo la tecnología puede hacer realidad
              el hogar de tus sueños
            </p>
            <Button size="lg" variant="secondary" className="text-lg">
              Contratar HoloHome
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedService?.title}</DialogTitle>
            <DialogDescription className="text-base pt-4">
              {selectedService?.fullDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">
                {selectedService?.price}
              </span>
              <span className="text-muted-foreground">COP</span>
              <span className="text-xl text-muted-foreground">
                / {selectedService?.priceUSD} USD
              </span>
            </div>
            <Button className="w-full gradient-primary text-primary-foreground">
              Contratar Este Servicio
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
