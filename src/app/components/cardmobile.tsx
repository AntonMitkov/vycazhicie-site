import React from "react";

type CardMobileProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const CardMobile: React.FC<CardMobileProps> = ({ title, imageSrc, description }) => {
  return (
    <div className="max-w-md mx-auto bg-newred p-6 flex items-center space-x-4 border-b-1 border-b-newwhite gap-5">
      <img
        src={imageSrc}
        alt={title}
        className="w-35 h-35 rounded-full object-cover"
      />
      <div>
        <p className="text-newwhite text-2xl font-bold">{title}</p>
        <p className="text-newwhite mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CardMobile;