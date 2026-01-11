import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, Minus, Plus, ShoppingCart } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const productImages = product.imageIds.map((id) =>
    PlaceHolderImages.find((img) => img.id === id)
  );
  const mainImage = productImages[0];
  const galleryImages = productImages.slice(1);
  const productReviews = REVIEWS.filter((r) => r.productId === product.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image Gallery */}
        <div className="grid gap-4">
          <div className="aspect-square relative rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm border border-white/10 shadow-lg">
            {mainImage && (
              <Image
                src={mainImage.imageUrl}
                alt={product.name}
                data-ai-hint={mainImage.imageHint}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {galleryImages.map((image, index) =>
              image ? (
                <div
                  key={index}
                  className="aspect-square relative rounded-md overflow-hidden bg-card/50 backdrop-blur-sm border border-white/10 cursor-pointer"
                >
                  <Image
                    src={image.imageUrl}
                    alt={`${product.name} gallery image ${index + 1}`}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-500'
                  }`}
                />
              ))}
            </div>
            <span className="text-muted-foreground">
              {product.rating.toFixed(1)} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-2 mt-4">
            <p className="text-3xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </p>
            {product.originalPrice && (
              <p className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>

          <p className="mt-4 text-lg text-muted-foreground">
            {product.description}
          </p>

          <Separator className="my-8" />

          {/* Options */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    aria-label={color.name}
                    title={color.name}
                    className={`h-8 w-8 rounded-full border-2 ${color.class} focus:ring-2 ring-offset-2 ring-offset-background ring-primary data-[active=true]:ring-2`}
                    data-active={product.colors[0].name === color.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline" data-active={size === 'M'} className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center border border-input rounded-md w-fit">
                <Button variant="ghost" size="icon">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center">1</span>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="flex-1 text-lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Buy Now
            </Button>
          </div>

          {/* Accordion for details and reviews */}
          <Accordion type="multiple" defaultValue={['details']} className="w-full mt-8">
            <AccordionItem value="details">
              <AccordionTrigger>Product Details</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {product.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reviews">
              <AccordionTrigger>Reviews ({productReviews.length})</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  {productReviews.map(review => (
                    <div key={review.id} className="flex gap-4">
                      <Image src={review.avatarUrl} alt={review.name} width={40} height={40} className="rounded-full h-10 w-10"/>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                         <div className="flex mt-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-500'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
