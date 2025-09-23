import { ConfigProvider, theme, Timeline } from "antd";

const SecTwo = () => {

  return (
    <div className="h-fit min-[1050px]:h-screen bg-newblack">
        <div className="pt-30 px-20 max-[1050px]:pb-20">
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-5 items-center max-[820px]:scale-75 max-[820px]:justify-center">
                    <img src="logo2.svg" alt="logo" className="w-90"/>
                    <p className="text-4xl max-[700px]:text-2xl text-newwhite font-black">свае думкі і вы!</p>
                </div>
                <div className="flex flex-col min-[1050px]:flex-row items-center justify-center gap-15 text-lg max-[700px]:text-sm max-[450px]:text-xs text-newwhite">
                    <div>
                        <ul>
                            <li>
                                <div className="flex flex-row">
                                    <div className="w-25 max-[460]:w-15">
                                        <p className="text-newred font-extrabold text-6xl max-[460px]:text-4xl">01.</p>
                                    </div>
                                    <div className="flex items-center pl-5 border-l-2 border-l-newred w-108 max-[700px]:w-56">
                                        <p className=""><i>Падай заяўку</i> на нашым сайце. Да яе прымацуй сваю ідэю і сцісла апішы пра што менавіта ты хочаш расказаць</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-row">
                                    <div className="w-25 max-[460]:w-15">
                                        <p className="text-newred font-extrabold text-6xl pt-10 max-[460px]:text-4xl">02.</p>
                                    </div>
                                    <div className="flex items-center pl-5 border-l-2 border-l-newred w-108 max-[700px]:w-56">
                                        <p className="pt-10"><i>Прайдзі сумоўе</i> з нашымі арганізатарамі і падрабязна апішы пра што ты будзеш распавядаць. Тут арганізатары могуць паглядзець як добра ты разбіраешся ў тэме</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-row">
                                    <div className="w-25 max-[460]:w-15">
                                        <p className="text-newred font-extrabold text-6xl pt-10 max-[460px]:text-4xl">03.</p>
                                    </div>
                                    <div className="flex items-center pl-5 border-l-2 border-l-newred w-108 max-[700px]:w-56">
                                        <p className="pt-10"><i>Напішы чарнавы сцэнар</i> свайго выступу і адпраў на рэдактуру</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-row">
                                    <div className="w-25 max-[460]:w-15">
                                        <p className="text-newred font-extrabold text-6xl pt-10 max-[460px]:text-4xl">04.</p>
                                    </div>
                                    <div className="flex items-center pl-5 border-l-2 border-l-newred w-108 max-[700px]:w-56">
                                        <p className="pt-10"><i>Выступі</i> на мерапрыемстве "Выкажыце" і ўяві сваю працу</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="border-8 border-double border-newred">
                        <img src="speakers/masha_and_egorchk-2.png" alt="sonya" className="w-120" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SecTwo;
