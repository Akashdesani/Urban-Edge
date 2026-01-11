'use server';

/**
 * @fileOverview Provides style recommendations for Urban Edge T-shirts based on a user-uploaded outfit photo.
 *
 * - getStyleRecommendations - A function that takes an outfit photo and returns T-shirt style recommendations.
 * - StyleRecommendationsInput - The input type for the getStyleRecommendations function.
 * - StyleRecommendationsOutput - The return type for the getStyleRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleRecommendationsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of the user\u2019s outfit, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Properly escaped quotes.
    ),
});
export type StyleRecommendationsInput = z.infer<typeof StyleRecommendationsInputSchema>;

const StyleRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of Urban Edge T-shirt recommendations that match the outfit.'),
});
export type StyleRecommendationsOutput = z.infer<typeof StyleRecommendationsOutputSchema>;

export async function getStyleRecommendations(
  input: StyleRecommendationsInput
): Promise<StyleRecommendationsOutput> {
  return styleRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleRecommendationsPrompt',
  input: {schema: StyleRecommendationsInputSchema},
  output: {schema: StyleRecommendationsOutputSchema},
  prompt: `You are a personal stylist for Urban Edge, an urban streetwear brand. Given a photo of an outfit, you will recommend 3 Urban Edge T-shirts that match the outfit.\n\nOutfit Photo: {{media url=photoDataUri}}\n\nT-Shirt Recommendations:`, // Properly escaped quotes.
});

const styleRecommendationsFlow = ai.defineFlow(
  {
    name: 'styleRecommendationsFlow',
    inputSchema: StyleRecommendationsInputSchema,
    outputSchema: StyleRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
