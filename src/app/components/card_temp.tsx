import React from "react";

type ImageCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ title, imageSrc, description }) => {
  return (
    <div className="relative w-70 h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-105" style={{
            WebkitFilter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
            filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
        }}>
      <img
        src={imageSrc}
        alt="Card Image"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Темный градиент снизу для читаемости текста */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
        <h3 className="text-lg font-semibold pl-2">{title}</h3>
      </div>

      {/* Описание при наведении */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center p-4 text-center transition-opacity duration-300">
        <p className="text-sm">
            {description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;