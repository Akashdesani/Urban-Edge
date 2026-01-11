import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MoveRight, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { PRODUCTS, REVIEWS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image-main');

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter !leading-tight">
            DEFINE YOUR <span className="text-primary">EDGE</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-300">
            Unleash your style with our exclusive collection of urban
            streetwear. Premium quality, bold designs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-bold text-lg">
              <Link href="/shop">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-bold text-lg bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/#featured">Explore Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Featured Products
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Handpicked styles making waves right now.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-lg text-primary">
              <Link href="/shop">
                View All Products <MoveRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-invert max-w-none text-neutral-300">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              From Streets to Statements
            </h2>
            <p className="text-xl leading-relaxed">
              Urban Edge was born from the raw energy of the city. We believe
              clothing is more than just fabric; it's a canvas for identity.
              Our mission is to empower you to express your unique story through
              bold, uncompromising design.
            </p>
            <p>
              Every thread, every print, is a testament to our commitment to
              premium quality and authentic streetwear culture. We're not just
              a brand; we're a movement. Join us and define your edge.
            </p>
          </div>
          <div>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/seed/story/600/400"
                  alt="Graffiti art on a city wall"
                  data-ai-hint="graffiti art"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Word on the Street
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              See what our community is saying.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {REVIEWS.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between bg-card/50 backdrop-blur-sm border-white/10 shadow-lg p-6">
                      <CardContent className="p-0">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-500'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-neutral-300 mb-4">
                          "{review.comment}"
                        </p>
                      </CardContent>
                      <div className="flex items-center">
                        <Image
                          src={review.avatarUrl}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="ml-4">
                          <p className="font-semibold text-white">
                            {review.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Verified Buyer
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-10" />
            <CarouselNext className="mr-10" />
          </Carousel>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Join the Movement
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get exclusive access to new drops, special offers, and behind the
            scenes content.
          </p>
          <form className="mt-8 max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow text-lg py-6"
              aria-label="Email for newsletter"
            />
            <Button type="submit" size="lg" className="font-bold text-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
