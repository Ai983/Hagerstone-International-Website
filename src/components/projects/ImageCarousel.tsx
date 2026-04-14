// Image carousel component supporting both string URLs and objects with src/alt
type ImageItem =
  | string
  | { src: string; alt: string; caption?: string; width?: number; height?: number };

export default function ImageCarousel({ images }: { images: ImageItem[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {images.map((image, i) => {
        const src = typeof image === "string" ? image : image.src;
        const alt = typeof image === "string" ? `Project image ${i + 1}` : image.alt;
        const caption = typeof image === "string" ? `Project image ${i + 1}` : image.caption ?? image.alt;
        const width = typeof image === "string" ? 384 : image.width ?? 384;
        const height = typeof image === "string" ? 256 : image.height ?? 256;

        return (
          <figure key={i} className="flex-shrink-0">
            <img
              src={src}
              alt={alt}
              className="h-64 w-auto rounded-lg object-cover"
              loading="lazy"
              decoding="async"
              width={width}
              height={height}
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
