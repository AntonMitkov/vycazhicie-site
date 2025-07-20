const Footer = () => {

  return (
    <div className='h-30 bg-black flex flex-row items-center justify-evenly text-xs max-[400px]:hidden' style={{
                            WebkitFilter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
                            filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
                        }}>
        
        <p className="basis-20 text-center">Developed by Anton Mitkov</p>
        
        <img 
            src='/logo.png'
            alt='Picture'
            className='w-50 basis-20'
            style={{
                WebkitFilter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
                filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
            }}
            
        />

        <p className="basis-20 text-center">2025 <br /> july</p>
        
    </div>
  );
};

export default Footer;