import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  title,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    if (window.innerWidth <= 768) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={selectedImage}
          alt={title}
          className="absolute w-full h-full object-cover object-center transition-opacity duration-300"
          loading="eager"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => handleImageClick(image)}
            className={`relative aspect-square overflow-hidden rounded-md bg-gray-100
              ${
                selectedImage === image
                  ? 'ring-2 ring-black'
                  : 'hover:opacity-75'
              }`}
          >
            <img
              src={image}
              alt={title}
              className="absolute w-full h-full object-cover object-center"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {isModalOpen && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full max-w-3xl aspect-square">
            <img
              src={selectedImage}
              alt={title}
              className="absolute w-full h-full object-contain"
              loading="eager"
            />
          </div>
        </div>
      )}
    </div>
  );
};
