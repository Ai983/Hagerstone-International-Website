// Image carousel component supporting both string URLs and objects with src/alt
type ImageItem = string | { src: string; alt: string };

export default function ImageCarousel({ images }: { images: ImageItem[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {images.map((image, i) => {
        const src = typeof image === 'string' ? image : image.src;
        const alt = typeof image === 'string' ? `Project image ${i + 1}` : image.alt;
        
        return (
          <img 
            key={i} 
            src={src} 
            alt={alt} 
            className="h-64 w-auto rounded-lg object-cover flex-shrink-0"
            loading="lazy"
          />
        );
      })}
    </div>
  );
}
