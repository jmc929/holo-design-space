import { useEffect, useState } from "react";

const brands = [
  { name: "Pullman", logo: "https://via.placeholder.com/150x60/0066FF/FFFFFF?text=Pullman" },
  { name: "Sony", logo: "https://via.placeholder.com/150x60/0066FF/FFFFFF?text=Sony" },
  { name: "Camilo Iluminación", logo: "https://via.placeholder.com/150x60/0066FF/FFFFFF?text=Camilo+Ilum" },
  { name: "Samsung", logo: "https://via.placeholder.com/150x60/0066FF/FFFFFF?text=Samsung" },
  { name: "LG", logo: "https://via.placeholder.com/150x60/0066FF/FFFFFF?text=LG" },
  { name: "Philips", logo: "https://via.placeholder.com/150x60/0066FF/FFFFFF?text=Philips" },
];

const BrandSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Marcas <span className="text-gradient">Aliadas</span>
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 items-center justify-center flex-wrap md:flex-nowrap">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`flex-shrink-0 transition-all duration-500 ${
                  index === currentIndex
                    ? "scale-110 opacity-100"
                    : "scale-90 opacity-50"
                }`}
              >
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to brand ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
