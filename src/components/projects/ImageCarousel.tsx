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
        // Local gallery photos have an 800 px sibling (scripts/project-thumbnails.mjs,
        // enforced by check-images.mjs). The card is 288x256 with object-cover, so a
        // 3:2 photo renders about 384 px wide: the thumbnail covers that up to 2x
        // screens, and denser screens still get the full-size file.
        const thumb = src.startsWith("/projects/") ? src.replace(/\.(jpe?g|png|webp)$/i, "-800w.webp") : null;
        const fullWidth = typeof image === "string" ? 1920 : image.width ?? 1920;

        return (
          <figure key={i} className="flex-shrink-0 w-72">
            <img
              src={src}
              srcSet={thumb ? `${thumb} 800w, ${src} ${fullWidth}w` : undefined}
              sizes={thumb ? "384px" : undefined}
              alt={alt}
              className="h-64 w-72 rounded-lg object-cover"
              loading="lazy"
              decoding="async"
              width={width}
              height={height}
            />
            <figcaption className="mt-2 text-sm text-muted-foreground line-clamp-3">{caption}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
