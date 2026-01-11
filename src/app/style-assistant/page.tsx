import { StyleAssistantClient } from '@/components/style-assistant/StyleAssistantClient';
import { Bot } from 'lucide-react';

export default function StyleAssistantPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <div className="inline-block bg-primary/10 p-4 rounded-full">
          <Bot className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-5xl font-headline font-bold text-primary mt-4">
          AI Style Assistant
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
          Got an outfit but not sure what tee to wear? Upload a photo, and our
          AI stylist will find the perfect match from our collection.
        </p>
      </header>

      <main>
        <StyleAssistantClient />
      </main>
    </div>
  );
}
