import type { ContentGalleryGroup, ContentGalleryImage } from "@/content/types";

// Grouped image gallery for content pages — layout plans and 3D views on a
// an /our-designs page, and anything else that ships images in frontmatter.
//
// Rendered outside the article's `prose` wrapper so Tailwind Typography does not
// restyle the figures, and deliberately dumb: everything it needs (alt text,
// real dimensions, captions) is already validated by the frontmatter schema, so
// there is nothing to guess and nothing to forget.

interface ContentGalleryProps {
  groups: ContentGalleryGroup[];
  images: ContentGalleryImage[];
}

/** The -800 sibling is guaranteed by scripts/check-images.mjs. */
const smallVariant = (src: string) => src.replace(/-1600\.webp$/, "-800.webp");

const Figure = ({ image }: { image: ContentGalleryImage }) => (
  <figure className="mt-6 first:mt-0">
    <img
      src={image.src}
      srcSet={`${smallVariant(image.src)} 800w, ${image.src} 1600w`}
      sizes="(min-width: 1024px) 768px, 100vw"
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      className="w-full rounded-lg border border-border/60 bg-muted"
    />
    {image.caption && (
      <figcaption className="mt-2 text-sm text-muted-foreground">{image.caption}</figcaption>
    )}
  </figure>
);

const ContentGallery = ({ groups, images }: ContentGalleryProps) => {
  if (images.length === 0) return null;

  // Images with no group, or a group that was never declared, still render —
  // in declaration order, after the grouped sections.
  const groupedIds = new Set(groups.map((group) => group.id));
  const ungrouped = images.filter((image) => !image.group || !groupedIds.has(image.group));

  return (
    <div className="mt-12 space-y-12">
      {groups.map((group) => {
        const groupImages = images.filter((image) => image.group === group.id);
        if (groupImages.length === 0) return null;
        return (
          <section key={group.id} id={group.id} className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground">{group.heading}</h2>
            {group.intro && (
              <p className="mt-2 max-w-3xl text-muted-foreground">{group.intro}</p>
            )}
            <div className="mt-4">
              {groupImages.map((image) => (
                <Figure key={image.src} image={image} />
              ))}
            </div>
          </section>
        );
      })}

      {ungrouped.length > 0 && (
        <div>
          {ungrouped.map((image) => (
            <Figure key={image.src} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentGallery;
