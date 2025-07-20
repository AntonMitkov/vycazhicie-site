const Intro = () => {

  return (
    <div className="max-[1023px]:h-fit max-[1023px]:py-35 max-[1023px]:gap-15 h-screen w-screen bg-newwhite flex flex-col lg:flex-row justify-center items-center px-6 gap-10 bg-cover" id="intro" style={{
                backgroundImage: `url('/bg-2.png')`,
            }}>
        
        <div className="max-w-xl text-center lg:text-left">
            <p className="text-4xl max-[650]:text-2xl text-newblack pb-8">
                <span className="font-black"><span className="text-newred">(Вы)</span>кажыце</span> — гэта не проста мерапрыемства
            </p>
            <p className="text-newblack text-lg max-[650px]:text-sm">
                Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции требуют от нас анализа дальнейших направлений развития. Таким образом консультация с широким активом позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации модели развития. 
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
  );
};

export default Intro;
