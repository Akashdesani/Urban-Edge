import { ProductCard } from '@/components/products/ProductCard';
import { PRODUCTS } from '@/lib/data';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const colors = [
  { name: 'Black', class: 'bg-black' },
  { name: 'White', class: 'bg-white' },
  { name: 'Blue', class: 'bg-sky-500' },
  { name: 'Grey', class: 'bg-gray-700' },
];
const categories = ['All', 'New Arrivals', 'Bestsellers', 'Graphic Tees', 'Minimalist'];

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-headline font-bold text-primary">
          The Collection
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Find your next statement piece.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <aside className="lg:col-span-1">
          <Card className="sticky top-24 bg-card/50 backdrop-blur-sm border-white/10 p-6">
            <h3 className="text-2xl font-headline font-semibold mb-4">Filters</h3>
            <Accordion type="multiple" defaultValue={['category', 'size', 'price']} className="w-full">
              <AccordionItem value="category">
                <AccordionTrigger>Category</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`cat-${category}`} />
                        <Label htmlFor={`cat-${category}`}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="size">
                <AccordionTrigger>Size</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <Button key={size} variant="outline" size="sm">
                        {size}
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="color">
                <AccordionTrigger>Color</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-3">
                    {colors.map((color) => (
                      <div key={color.name} className="flex items-center gap-2">
                         <button
                           aria-label={color.name}
                           className={`h-6 w-6 rounded-full border-2 ${color.class} focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background`}
                         />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="price">
                <AccordionTrigger>Price Range</AccordionTrigger>
                <AccordionContent>
                   <div className="p-2">
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>$0</span>
                        <span>$100</span>
                      </div>
                   </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button className="w-full mt-6">Apply Filters</Button>
          </Card>
        </aside>

        {/* Product Grid */}
        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
