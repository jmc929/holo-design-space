import { useEffect, useState } from "react";
import pullman from "@/assets/pullman-colchones.png";
import sony from "@/assets/sony.png";
import camiloIluminacion from "@/assets/camilo-iluminacion.png";
import samsung from "@/assets/samsung.png";
import lg from "@/assets/lg.png";
import philips from "@/assets/philips.png";

const brands = [
  { name: "Pullman", logo: pullman },
  { name: "Sony", logo: sony },
  { name: "Camilo Iluminación", logo: camiloIluminacion },
  { name: "Samsung", logo: samsung },
  { name: "LG", logo: lg },
  { name: "Philips", logo: philips },
];

const BrandSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 2500); // Velocidad del cambio
    return () => clearInterval(interval);
  }, []);

  const getVisibleBrands = () => {
    const total = brands.length;
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      visible.push(brands[(currentIndex + i + total) % total]);
    }
    return visible;
  };

  return (
    <div className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          Marcas <span className="text-gradient">Aliadas</span>
        </h2>

        <div className="relative overflow-hidden py-24">
          <div className="flex items-center justify-center gap-8 transition-transform duration-1000 ease-in-out">
            {getVisibleBrands().map((brand, index) => {
              const position = index - 2;
              const isActive = position === 0;

              const scale = isActive ? 1.6 : 0.8 - Math.abs(position) * 0.1;
              const opacity = isActive ? 1 : 0.4;

              return (
                <div
                  key={brand.name}
                  style={{
                    transform: `scale(${scale}) translateX(${position * 120}px)`,
                    opacity,
                    zIndex: isActive ? 10 : 1,
                    transition: "all 0.8s ease-in-out",
                  }}
                  className="flex-shrink-0"
                >
                  <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-shadow flex items-center justify-center w-64 h-64">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-30 w-auto object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-10">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30"
              }`}
              aria-label={`Ir a marca ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
