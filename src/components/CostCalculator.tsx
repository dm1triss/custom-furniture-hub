import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

export const CostCalculator = () => {
  const [dimensions, setDimensions] = useState({
    width: "",
    height: "",
    depth: "",
  });
  const [material, setMaterial] = useState("standard");
  const [extras, setExtras] = useState({
    lighting: false,
    softClose: false,
  });
  const { toast } = useToast();

  const calculatePrice = () => {
    const basePrice = 5000; // Базовая цена в рублях
    const volume = 
      (parseFloat(dimensions.width) || 0) * 
      (parseFloat(dimensions.height) || 0) * 
      (parseFloat(dimensions.depth) || 0) / 1000000; // Перевод в м³

    let materialMultiplier = 1;
    switch (material) {
      case "premium":
        materialMultiplier = 1.5;
        break;
      case "luxury":
        materialMultiplier = 2;
        break;
      default:
        materialMultiplier = 1;
    }

    let extrasPrice = 0;
    if (extras.lighting) extrasPrice += 3000;
    if (extras.softClose) extrasPrice += 2000;

    return Math.round((basePrice * volume * materialMultiplier + extrasPrice) * 100) / 100;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const price = calculatePrice();
    toast({
      title: "Заявка отправлена",
      description: `Расчетная стоимость: ${price} руб. Мы свяжемся с вами для уточнения деталей.`,
    });
  };

  return (
    <section id="calculator" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Рассчитать стоимость</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="width">Ширина (см)</Label>
              <Input
                id="width"
                type="number"
                min="0"
                value={dimensions.width}
                onChange={(e) =>
                  setDimensions({ ...dimensions, width: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Высота (см)</Label>
              <Input
                id="height"
                type="number"
                min="0"
                value={dimensions.height}
                onChange={(e) =>
                  setDimensions({ ...dimensions, height: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="depth">Глубина (см)</Label>
              <Input
                id="depth"
                type="number"
                min="0"
                value={dimensions.depth}
                onChange={(e) =>
                  setDimensions({ ...dimensions, depth: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label>Материал</Label>
            <RadioGroup
              defaultValue="standard"
              onValueChange={(value) => setMaterial(value)}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="standard" />
                <Label htmlFor="standard">Стандарт</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="premium" id="premium" />
                <Label htmlFor="premium">Премиум</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="luxury" id="luxury" />
                <Label htmlFor="luxury">Люкс</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>Дополнительные опции</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="lighting"
                  checked={extras.lighting}
                  onChange={(e) =>
                    setExtras({ ...extras, lighting: e.target.checked })
                  }
                  className="h-4 w-4"
                />
                <Label htmlFor="lighting">Подсветка (+3000 руб.)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="softClose"
                  checked={extras.softClose}
                  onChange={(e) =>
                    setExtras({ ...extras, softClose: e.target.checked })
                  }
                  className="h-4 w-4"
                />
                <Label htmlFor="softClose">
                  Доводчики для ящиков (+2000 руб.)
                </Label>
              </div>
            </div>
          </div>

          <div className="text-2xl font-bold text-center">
            Примерная стоимость: {calculatePrice()} руб.
          </div>

          <Button type="submit" className="w-full">
            Оформить заказ
          </Button>
        </form>
      </div>
    </section>
  );
};
