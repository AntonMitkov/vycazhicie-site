import TornPaper from "./tornpaper";
import TornSvg from "@/assets/torn_paper.svg"


const Intro = () => {
    console.log("TornSvg:", TornSvg);

  return (
    <div>
        <div className="max-[1023px]:h-fit max-[1023px]:py-35 max-[560px]:pb-20 max-[1023px]:gap-15 h-screen w-screen bg-newwhite flex flex-col lg:flex-row justify-center items-center px-6 gap-10 bg-cover" id="intro">
            
            <div className="max-w-xl text-center lg:text-left">
                <p className="text-4xl max-[650]:text-2xl text-newblack pb-8">
                    <span className="font-black"><span className="text-newred">(Вы)</span>кажыце</span> — гэта не проста мерапрыемства
                </p>
                <p className="text-newblack text-md max-[650px]:text-sm">
                    (Вы)кажыце - праект, які быў створаны 7 гадоў таму, але праіснаваў нядоўга, і вось 4 гады таму яго вырашылі аднавіць. "(Вы)кажыце" развіваўся и рабіўся маштабней. Гэта мерапрыемства, на якім вы можаце падзяліцца тэмай, якая цікавіць вас, бо наш слоган гэта "Выкажыся і будзь пачутым".
                </p>
                <p className="text-newblack block text-md max-[650px]:text-sm max-[550px]:hidden">
                    Мерапрыемства праводзіцца 2 разы на год - першы раз спікерамі з’яўляюцца толькі 11-я, другі раз - только 10-я. Само мерапрыемства цягнецца дзве з паловай гадзіны з перапынкам на кава-брэйк, дзе вы можаце адпачыць, выпіць гарбатку и абнашчыцца печывам. Выступы цягнуцца прыкладна 10 звілін, за якія спікер павінен падрабязна распавесці пра сваю тэму. Важна, што гэта не проста маналог выступоўцы. По сканчэнні слухачы могуць задаць любое пытанне, якое іх цікавіць, звязанае з тэмай выступу. 
                </p>
            </div>

            <div className="max-w-md w-full flex justify-center"
            style={{
                WebkitFilter: 'drop-shadow(0px 0px 20px rgba(153, 28, 31, 1))',
                filter: 'drop-shadow(0px 0px 20px rgba(153, 28, 31, 1))',
            }}>

                <video className="md:block w-[350px] max-[650px]:w-[250px]" controls muted={true} autoPlay={true} loop={true} style={{
                    objectFit: 'cover',
                    borderRadius: '10px',
                }}>
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div>
            <TornPaper/>
        </div>
    </div>
  );
};

export default Intro;
