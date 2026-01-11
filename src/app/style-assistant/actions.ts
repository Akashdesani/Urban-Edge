'use server';

import { getStyleRecommendations } from '@/ai/flows/style-recommendations';

export async function getRecommendationsAction(photoDataUri: string) {
  if (!photoDataUri) {
    return { error: 'No photo data provided.' };
  }

  try {
    const result = await getStyleRecommendations({ photoDataUri });
    return { recommendations: result.recommendations };
  } catch (error) {
    console.error('Error getting style recommendations:', error);
    return { error: 'Failed to get recommendations from AI. Please try again.' };
  }
}
