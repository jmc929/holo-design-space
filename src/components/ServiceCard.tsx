import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  priceUSD: string;
  image: string;
  onLearnMore: () => void;
}

const ServiceCard = ({
  title,
  description,
  price,
  priceUSD,
  image,
  onLearnMore,
}: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift border-border bg-card">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">{price}</span>
            <span className="text-sm text-white/80">COP</span>
          </div>
          <div className="text-sm text-white/70">{priceUSD} USD</div>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <Button
          onClick={onLearnMore}
          variant="outline"
          className="w-full group/btn"
        >
          Más información
          <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
