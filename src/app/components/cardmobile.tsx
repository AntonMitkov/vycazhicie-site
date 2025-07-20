import React from "react";

type CardMobileProps = {
  imageSrc: string;
  title: string;
  description: string;
  isFlipped?: boolean;
};

const CardMobile: React.FC<CardMobileProps> = ({ title, imageSrc, description, isFlipped=false }) => {
  return (
    <div className={`max-w-md mx-auto bg-newred p-6 flex items-center space-x-4 gap-5 max-[600]:gap-3 ${ isFlipped ? 'flex-row-reverse' : '' }`}>
      <img
        src={imageSrc}
        alt={title}
        className="w-35 h-35 max-[600]:w-20 max-[600]:h-20 rounded-full object-cover"
      />
      <div>
        <p className="text-newwhite text-2xl max-[600]:text-base font-bold">{title}</p>
        <p className="text-newwhite mt-2 text-xl max-[600]:text-xs">{description}</p>
      </div>
    </div>
  );
};

export default CardMobile;