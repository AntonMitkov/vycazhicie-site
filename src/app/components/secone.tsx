import { tree } from "next/dist/build/templates/app-page";
import Card from "./card";
import ImageCard from "./card_temp";
import CardMobile from "./cardmobile";

const SecOne = () => {

  return (
    <div style={{
            WebkitFilter: 'drop-shadow(0px 0px 30px rgba(153, 28, 31, 1))',
            filter: 'drop-shadow(0px 0px 30px rgba(153, 28, 31, 1))',
        }}>
      <div className="bg-newred h-fit min-[1000px]:h-screen max-[999px]:pb-10 flex flex-col items-center gap-6 min-[1000px]:gap-15 justify-center px-10">
          <div>
            <p className="text-3xl min-[1000px]:text-5xl max-[600]:text-xl text-newwhite pb-6 font-black">
                Пра што гавораць нашы спікеры?
            </p>
            <hr className="bg-newwhite"/>
          </div>
          <div className="flex flex-col items-center gap-7 max-[999px]:hidden">
            <div className="flex flex-col min-[1000px]:flex-row justify-center items-center gap-10">
                <ImageCard title="Алеся Алейнікава" imageSrc="speakers/alesya_zaya.png" description="Гэта тэставае апісанне для карткі"/>
                <ImageCard title="Ульяна Якімчык" imageSrc="speakers/ulya_geniy.jpeg" description="Гэта тэставае апісанне для карткі"/>
                <ImageCard title="Таісія Туравец" imageSrc="speakers/tasya_maya.jpeg" description="Гэта тэставае апісанне для карткі"/>
            </div>
            <p className="block max-[999px]:hidden text-newwhite">*Навядзі на картку і убач</p>
          </div>
          <div className="flex flex-col items-center gap-4 pb-10 min-[1000px]:hidden">
            <CardMobile title="Алеся Алейнікава" imageSrc="speakers/alesya_zaya_mobile.png" description="Гэта тэставае апісанне для карткі"/>
            <CardMobile title="Ульяна Якімчык" imageSrc="speakers/ulya_geniy_mobile.jpeg" description="Гэта тэставае апісанне для карткі" isFlipped={true}/>
            <CardMobile title="Таісія Туравец" imageSrc="speakers/tasya_maya_mobile.jpeg" description="Гэта тэставае апісанне для карткі"/>
          </div>
      </div>
    </div>
  );
};

export default SecOne;
