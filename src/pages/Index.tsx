import { useState } from "react";
import { ArrowRight, Sparkles, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
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
import demoVideo from "@/assets/HoloHome_ Rediseño Futurista.mp4";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const services = [
  {
    id: 1,
    title: "Diseño Básico Holográfico",
    description:
      "Perfecto para proyectos personales, habitaciones individuales o remodelaciones puntuales.",
    price: "$2,500,000",
    priceUSD: "$625",
    image: service1,
    fullDescription:
      "Ideal para quienes desean transformar una habitación o espacio pequeño con el poder de la tecnología. Incluye una sesión virtual de diagnóstico donde se analiza el entorno, estilo deseado y presupuesto. Luego, se genera una visualización holográfica 3D de alta fidelidad, acompañada de recomendaciones personalizadas creadas por nuestra IA. El servicio finaliza con una lista curada de productos y mobiliario, con enlaces directos a proveedores aliados para una compra rápida y segura.",
  },
  {
    id: 2,
    title: "Diseño Premium Completo",
    description:
      "Recomendado para viviendas nuevas, remodelaciones completas o proyectos de diseño a medida.",
    price: "$7,500,000",
    priceUSD: "$1,875",
    image: service2,
    fullDescription:
      "Pensado para quienes buscan una transformación integral con una experiencia totalmente inmersiva. Incluye el diseño completo de hasta tres habitaciones, con visualización holográfica avanzada, interacción en tiempo real y personalización total mediante IA. Nuestro equipo se encarga de la gestión de compras y logística con las marcas aliadas, asegurando coherencia estética y eficiencia en cada detalle. Además, ofrece asesoría continua durante el proceso de instalación, garantizando un resultado fiel al modelo virtual.",
  },
  {
    id: 3,
    title: "Proyecto Corporativo",
    description:
      "Perfecto para oficinas, locales comerciales, constructoras y desarrolladores inmobiliarios que desean diferenciarse con innovación y eficiencia.",
    price: "$15,000,000",
    priceUSD: "$3,750",
    image: service3,
    fullDescription:
      "Dirigido a empresas, constructoras y desarrolladores que buscan incorporar tecnología holográfica en el diseño y presentación de espacios corporativos. Incluye la visualización holográfica multiusuario, ideal para presentaciones en salas de juntas o ferias inmobiliarias, junto con un sistema de IA avanzada que optimiza la distribución, iluminación y flujo de trabajo. El servicio abarca la gestión total del proyecto, desde el diseño hasta la instalación, incluyendo compras, coordinación de proveedores y soporte post-implementación durante seis meses.",
  },
];

const Index = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isContactForm2Open, setIsContactForm2Open] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

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
              <Link to="/como-funciona">
                <Button size="lg" className="gradient-primary text-primary-foreground text-lg group">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button onClick={() => setIsDemoOpen(true)} size="lg" variant="outline" className="text-lg">
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
            <Button onClick={() => {setIsContactForm2Open(true); setSelectedService(null); }} size="lg" variant="secondary" className="text-lg">
              Contratar HoloHome
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Demo Video Dialog */}
      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Demo HoloHome</DialogTitle>
            <DialogDescription>
              Visualiza la demostración del rediseño futurista de HoloHome.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <video
              src={demoVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

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
            <Button onClick={() => {setIsContactFormOpen(true); setSelectedService(null); }} className="w-full gradient-primary text-primary-foreground">
              Contratar Este Servicio
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solicitud de Cotización</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
                <Label>Nombre *</Label>
                <Input type="text" placeholder="Tu nombre" />
              </div>
              <div>
                <Label>Correo Electrónico *</Label>
                <Input type="email" placeholder="tu@email.com" />
              </div>
              <div>
                <Label>Teléfono *</Label>
                <Input type="tel" placeholder="+57 300 123 4567" />
              </div>
              <div>
                <Label>Mensaje</Label>
                <Textarea className="resize-none" placeholder="Cuéntanos sobre tu proyecto..." />
              </div>
            <Button onClick={() => setIsContactFormOpen(false)} className="w-full">
              Enviar Solicitud
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isContactForm2Open} onOpenChange={setIsContactForm2Open}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Solicitud de Cotización</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Tipo de Diseño *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bsico-holografico">Básico Holográfico</SelectItem>
                    <SelectItem value="premium-completo">Premium Completo</SelectItem>
                    <SelectItem value="proyecto-corporativo">Proyecto Corporativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Presupuesto Estimado *</Label>
                <Input type="text" placeholder="$0" />
              </div>
              <div>
                <Label>Nombre *</Label>
                <Input type="text" placeholder="Tu nombre" />
              </div>
              <div>
                <Label>Correo Electrónico *</Label>
                <Input type="email" placeholder="tu@email.com" />
              </div>
              <div>
                <Label>Teléfono *</Label>
                <Input type="tel" placeholder="+57 300 123 4567" />
              </div>
              <Button onClick={() => setIsContactForm2Open(false)} className="w-full">
                Enviar Solicitud
              </Button>
            </div>
          </DialogContent>
        </Dialog>
    </div>
  );
};

export default Index;
