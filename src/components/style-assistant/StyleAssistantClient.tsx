'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Bot, Image as ImageIcon, Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getRecommendationsAction } from '@/app/style-assistant/actions';
import { useToast } from '@/hooks/use-toast';
import { ProductCard } from '../products/ProductCard';
import { PRODUCTS } from '@/lib/data';

type Recommendation = {
  name: string;
};

export function StyleAssistantClient() {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoDataUri, setPhotoDataUri] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        toast({
          variant: 'destructive',
          title: 'File too large',
          description: 'Please upload an image smaller than 4MB.',
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // For sending to server action
      const readerForDataUri = new FileReader();
      readerForDataUri.onload = (e) => {
        setPhotoDataUri(e.target?.result as string);
      };
      readerForDataUri.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!photoDataUri) {
      toast({
        variant: 'destructive',
        title: 'No photo selected',
        description: 'Please upload a photo of your outfit.',
      });
      return;
    }

    setIsLoading(true);
    setRecommendations([]);

    const result = await getRecommendationsAction(photoDataUri);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: result.error,
      });
    } else if (result.recommendations) {
      setRecommendations(result.recommendations);
    }
    
    setIsLoading(false);
  };
  
  // This is a mock function to find products. In a real app, you'd fetch from your DB.
  const recommendedProducts = recommendations
    .map(rec => 
      PRODUCTS.find(p => p.name.toLowerCase().includes(rec.toLowerCase().replace(/tee|t-shirt/,'').trim()))
    )
    .filter(Boolean);


  return (
    <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-white/10 p-6 md:p-8">
      <CardContent className="p-0">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
          {/* File Upload */}
          <div className="flex flex-col items-center justify-center">
            <label
              htmlFor="outfit-upload"
              className="relative flex flex-col items-center justify-center w-full h-64 md:h-full border-2 border-dashed border-muted rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
            >
              {photoPreview ? (
                <Image
                  src={photoPreview}
                  alt="Outfit preview"
                  fill
                  className="object-contain rounded-lg p-2"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <ImageIcon className="w-10 h-10 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, or WEBP (MAX. 4MB)
                  </p>
                </div>
              )}
              <input
                id="outfit-upload"
                type="file"
                className="hidden"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleFileChange}
              />
            </label>
            <Button
              type="submit"
              size="lg"
              className="w-full mt-4 text-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Find My Style
                </>
              )}
            </Button>
          </div>

          {/* Results */}
          <div className="min-h-[20rem]">
            <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-2">
              <Bot className="text-primary" /> AI Recommendations
            </h3>
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <Loader2 className="w-16 h-16 animate-spin text-primary mb-4" />
                <p className="text-lg">Our AI is styling your look...</p>
                <p>This may take a moment.</p>
              </div>
            )}

            {!isLoading && recommendations.length > 0 && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">Based on your outfit, we recommend these tees:</p>
                  <ul className="list-disc list-inside space-y-2 text-lg">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="font-semibold">{rec}</li>
                    ))}
                  </ul>
                  {recommendedProducts.length > 0 && (
                     <div className="pt-4">
                      {recommendedProducts.map(product => product && <ProductCard key={product.id} product={product} />)}
                     </div>
                  )}
                </div>
            )}
            
            {!isLoading && recommendations.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center bg-muted/20 rounded-lg p-8">
                    <p className="text-muted-foreground">Your recommended T-shirts will appear here once you upload a photo.</p>
                </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
