import React from "react";

type ProfileProps = {
  imageSrc: string;
  title: string;
};

const SecThree:React.FC<ProfileProps> = ({title, imageSrc}) => {

  return (
    <div>
        <div className="border-8 border-double border-newred">
            <img src={imageSrc} alt="vertik" className="w-60" />
        </div>
        <p className="font-extrabold text-newblack">{title}</p>
    </div>
  );
};

export default SecThree;
