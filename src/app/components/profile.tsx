import React from "react";
import Image from "next/image";

type ProfileProps = {
  imageSrc: string;
  imageXsSrc: string;
  title: string;
};

const SecThree:React.FC<ProfileProps> = ({title, imageSrc, imageXsSrc}) => {

  return (
    <div>
        <div className="border-8 border-double border-newred">
            <img src={imageSrc} alt="vertik" className="w-60 block max-[500px]:hidden" />
            <img src={imageXsSrc} alt="vertik" className="w-60 hidden max-[500px]:block" />
        </div>
        <p className="font-extrabold text-newblack">{title}</p>
    </div>
  );
};

export default SecThree;
