import { tree } from "next/dist/build/templates/app-page";
import Card from "./card";
import ImageCard from "./card_temp";
import CardMobile from "./cardmobile";

const SecOne = () => {

  return (
    <div>
      <div className="bg-newred h-fit min-[1000px]:h-screen max-[999px]:pb-10 pt-0 max-[560px]:pt-5 flex flex-col items-center gap-6 min-[1000px]:gap-15 justify-center px-10">
          <div>
            <p className="text-3xl min-[1000px]:text-5xl max-[600]:text-xl text-newwhite pb-6 font-black">
                Пра што гавораць нашы спікеры?
            </p>
            <hr className="bg-newwhite text-newwhite border-newwhite"/>
          </div>
          <div className="flex flex-col items-center gap-7 max-[999px]:hidden">
            <div className="flex flex-col min-[1000px]:flex-row justify-center items-center gap-10">
                <ImageCard title="Алеся Алейнікава" imageSrc="speakers/alesya_zaya.png" description={`Алеся - наша спікерка, якая ўдзельнічала ў першым мерапрыемстве навучальнага года 2024/2025 і навучалася на грамадазнаўчым профілі. Яе спіч быў пра самае добрае і светлае пачуцце - каханне. Яна распавяла, што такое каханне з біялагічнага пункту гледжання(напрыклад, якія гармоны вылучаюцца ў той момант, калі мы знаходзімся побач з нашым партнёрам), і з грамадскага(напрыклад, калі нашае "Я" і "Ён/Яна" злучаюцца ў "Мы")`}/>
                <ImageCard title="Ульяна Якімчык" imageSrc="speakers/ulya_geniy.jpeg" description="Ульяна - наша спікерка, якая ўдзельнічала ў першым мерапрыемстве навучальнага года 2024/2025 і навучалася на грамадазнаўчым профілі. Яна падрыхтавала спіч, на якім падрабязна распавяла пра псіхапатаў і іх жыццё, а таксама пра іх біялагічныя і псіхалагічныя аспекты."/>
                <ImageCard title="Таісія Туравец" imageSrc="speakers/tasya_maya.jpeg" description="Таісія(ці, для сяброў, Тася) - наша спікерка, якая ўдзельнічала ў другім мерапрыемстве навучальнага года 2024/2025 і навучаецца на філалагічным профілі. Яе спіч пра сны знайшоў асаблівы водгук у кожнага з прысутных на мерапрыемстве, бо тэма датычыцца кожнага з нас. Яна распавяла пра фазы сну, пра працу мозга падчас яго, пра лунатызм і шчэ шмат чаго цікавага."/>
            </div>
            <p className="block max-[999px]:hidden text-newwhite">*Навядзі на картку і убач</p>
          </div>
          <div className="flex flex-col items-center gap-4 pb-10 min-[1000px]:hidden">
            <CardMobile title="Алеся Алейнікава" imageSrc="speakers/alesya_zaya_mobile.png" imageSrcXs="speakers/alesya_zaya_xs.png" description={`Алеся - наша спікерка, якая ўдзельнічала ў першым мерапрыемстве навучальнага года 2024/2025 і навучалася на грамадазнаўчым профілі. Яе спіч быў пра самае добрае і светлае пачуцце - каханне. Яна распавяла, што такое каханне з біялагічнага пункту гледжання(напрыклад, якія гармоны вылучаюцца ў той момант, калі мы знаходзімся побач з нашым партнёрам), і з грамадскага(напрыклад, калі нашае "Я" і "Ён/Яна" злучаюцца ў "Мы")`}/>
            <CardMobile title="Ульяна Якімчык" imageSrc="speakers/ulya_geniy_mobile.jpeg" imageSrcXs="speakers/ulya_geniy_xs.jpeg" description="Ульяна - наша спікерка, якая ўдзельнічала ў першым мерапрыемстве навучальнага года 2024/2025 і навучалася на грамадазнаўчым профілі. Яна падрыхтавала спіч, на якім падрабязна распавяла пра псіхапатаў і іх жыццё, а таксама пра іх біялагічныя і псіхалагічныя аспекты." isFlipped={true}/>
            <CardMobile title="Таісія Туравец" imageSrc="speakers/tasya_maya_mobile.jpeg" imageSrcXs="speakers/tasya_maya_xs.jpeg" description="Таісія(ці, для сяброў, Тася) - наша спікерка, якая ўдзельнічала ў другім мерапрыемстве навучальнага года 2024/2025 і навучаецца на філалагічным профілі. Яе спіч пра сны знайшоў асаблівы водгук у кожнага з прысутных на мерапрыемстве, бо тэма датычыцца кожнага з нас. Яна распавяла пра фазы сну, пра працу мозга падчас яго, пра лунатызм і шчэ шмат чаго цікавага."/>
          </div>
      </div>
    </div>
  );
};

export default SecOne;
