import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/lib/backgroundRemoval';
import logoSrc from '@/assets/logo.png';

export default function LogoProcessor() {
  const [status, setStatus] = useState<string>('Loading...');
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setStatus('Fetching logo...');
        const response = await fetch(logoSrc);
        const blob = await response.blob();
        
        setStatus('Loading image...');
        const imageElement = await loadImage(blob);
        
        setStatus('Removing background... This may take a moment.');
        const resultBlob = await removeBackground(imageElement);
        
        const url = URL.createObjectURL(resultBlob);
        setProcessedImage(url);
        setStatus('Done! Right-click the image below and save it, then replace src/assets/logo.png with the saved file.');
      } catch (error) {
        console.error('Error:', error);
        setStatus(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    processLogo();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <h1 className="text-3xl font-bold text-center">Logo Background Removal</h1>
        
        <div className="bg-card p-6 rounded-lg pixel-border">
          <p className="text-center mb-4">{status}</p>
          
          {processedImage && (
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded">
                <img 
                  src={processedImage} 
                  alt="Processed logo" 
                  className="max-w-full mx-auto"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div className="flex gap-4 justify-center">
                <a
                  href={processedImage}
                  download="logo-no-bg.png"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded pixel-border hover:bg-primary/90"
                >
                  Download Logo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
