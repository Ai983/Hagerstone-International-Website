import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { ImagePlus, Sparkles, ZoomIn, Download } from "lucide-react";

interface GeneratedVisualGalleryProps {
  images: string[];
  loading: boolean;
  styleName: string;
  onGenerateMore?: () => void;
  canGenerateMore?: boolean;
}

const GeneratedVisualGallery: React.FC<GeneratedVisualGalleryProps> = ({
  images,
  loading,
  styleName,
  onGenerateMore,
  canGenerateMore = false,
}) => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <>
      <Card>
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-playfair text-xl font-semibold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              AI-Generated Visualizations
            </h3>
            
            {canGenerateMore && (
              <Button
                variant="outline"
                size="sm"
                onClick={onGenerateMore}
                disabled={loading}
                className="gap-2"
              >
                <ImagePlus className="w-4 h-4" />
                Generate More
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(imageUrl)}
              >
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={imageUrl}
                    alt={`AI rendered office interior in ${styleName} style with premium finishes – Hagerstone International`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}

            {/* Loading skeleton */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-video rounded-lg overflow-hidden"
              >
                <Skeleton className="w-full h-full">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="w-8 h-8 text-accent animate-pulse mx-auto mb-2" />
                      <span className="text-sm text-muted-foreground">Generating...</span>
                    </div>
                  </div>
                </Skeleton>
              </motion.div>
            )}
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            These AI-generated visualizations represent conceptual designs based on your style preferences.
            Final designs will be customized by our expert team.
          </p>
        </CardContent>
      </Card>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={`AI rendered office interior in ${styleName} style – Hagerstone`}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                className="gap-2"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = selectedImage;
                  link.download = `hagerstone-${styleName.toLowerCase().replace(/\s+/g, '-')}-design.png`;
                  link.click();
                }}
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
            
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default GeneratedVisualGallery;
