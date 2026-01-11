import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const productImage = PlaceHolderImages.find((img) => img.id === product.imageIds[0]);

  return (
    <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-1">
      <Link href={`/products/${product.id}`} className="block">
        <CardHeader className="p-0">
          {productImage && (
            <Image
              src={productImage.imageUrl}
              alt={product.name}
              data-ai-hint={productImage.imageHint}
              width={500}
              height={500}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-headline font-semibold tracking-tight truncate group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-4 w-4',
                    i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</p>
          )}
        </div>
        <Button size="icon" className="shrink-0">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
