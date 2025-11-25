import { useState } from "react";

const CollectionListing= ({ artwork }) => {
   const imageSrc = `/images/${artwork.image}`;
  const [enlarged, setEnlarged] = useState(false);

  const toggleSize = () => {
    setEnlarged(prev => !prev);
  };

  return (
    <div
      onClick={toggleSize}
      className={`
        transition-all duration-300 cursor-pointer 
        ${enlarged ? "fixed inset-0 z-50 flex items-center justify-center bg-black/80" : ""}
      `}
    >
      <img
        src={imageSrc}
        alt={artwork.title}
        className={`
          transition-all duration-300 
          ${enlarged ? "max-h-[90vh] max-w-[90vw]" : "w-full h-auto rounded-lg shadow-lg"}
        `}
      />

      {/* Optioneel: titel tonen in fullscreen */}
      {enlarged && (
        <div className="absolute bottom-4 text-white text-lg font-semibold">
          {artwork.title}
        </div>
      )}
    </div>
  );
};

export default CollectionListing;