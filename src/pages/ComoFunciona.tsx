import { useState } from "react";
import { CheckCircle2, Eye, Sparkles, ShoppingCart, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const steps = [
  {
    id: 1,
    title: "Visualizar tu espacio 3D",
    description:
      "Capturamos tu entorno actual utilizando fotografías o escaneos tridimensionales y lo transformamos en un modelo holográfico interactivo. Podrás recorrer tu espacio desde cualquier ángulo, ver cómo se comporta la luz, los colores y los volúmenes, y comenzar a imaginar el diseño ideal antes de realizar cualquier cambio físico.",
    icon: Eye,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    title: "Personaliza con IA",
    description:
      "Nuestra IA analiza tus preferencias estéticas, la distribución del espacio y las tendencias actuales de diseño para ofrecerte propuestas inteligentes y personalizadas. Podrás experimentar con diferentes estilos, combinaciones de colores, materiales y muebles, ajustándolos en tiempo real mediante proyección holográfica, hasta lograr la versión perfecta de tu hogar o negocio.",
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 3,
    title: "Compara y compra",
    description:
      "Explora en tu propio holograma los productos de nuestras marcas aliadas, desde televisores y sofás hasta luminarias y electrodomésticos. Compara precios, materiales y funcionalidades directamente en tu visualización 3D, obteniendo una experiencia de compra informada, práctica y totalmente integrada al diseño.",
    icon: ShoppingCart,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    id: 4,
    title: "Recibe todo en casa",
    description:
      "Una vez que confirmes tu diseño, nuestro sistema gestiona de manera automática la compra, entrega e instalación de los productos elegidos. Todo llega a tu hogar sin intermediarios ni complicaciones, asegurando que el espacio que visualizaste se convierta exactamente en el que vivirás. Tu única tarea será disfrutar del resultado.",
    icon: Home,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const services = [
  {
    id: 1,
    title: "Diseño Básico Holográfico",
    },
  {
    id: 2,
    title: "Diseño Premium Completo",
    },
  {
    id: 3,
    title: "Proyecto Corporativo",
  },
];

const ComoFunciona = () => {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
    return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Proceso Simple y Efectivo
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            ¿Cómo <span className="text-gradient">Funciona?</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Transformar tu espacio es más fácil de lo que imaginas. <br /><br />
            Con <b>HoloHome</b>, la combinación entre tecnología holográfica 
            e inteligencia artificial te permite vivir el diseño de 
            interiores como nunca antes. <br />
            Sigue estos cuatro pasos y descubre cómo convertir tus ideas 
            en una experiencia visual totalmente inmersiva.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2" />

            {/* Steps */}
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row gap-14 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgColor} mb-4`}
                    >
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>

                    <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                      <span className="text-5xl font-bold text-muted-foreground/20">
                        {String(step.id).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number Badge (centered) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold shadow-lg border-4 border-background z-10">
                    {step.id}
                  </div>

                  {/* Spacer for layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Comenzar tu Transformación?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Da el primer paso hacia el espacio de tus sueños. Nuestro equipo
            está listo para guiarte en cada etapa del proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => {setIsContactFormOpen(true); setSelectedService(null); }} size="lg" variant="secondary" className="text-lg">
                Contactar Ahora
            </Button>
            <Link to="/">
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Ver Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
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
              <Button onClick={() => setIsContactFormOpen(false)} className="w-full">
                Enviar Solicitud
              </Button>
            </div>
          </DialogContent>
        </Dialog>

      <Footer />
    </div>
  );
};

export default ComoFunciona;
