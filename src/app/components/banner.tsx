import { DownOutlined } from '@ant-design/icons';
import Image from 'next/image'

const Banner = () => {

  return (
    <div className=''
    style={{
        WebkitFilter: 'drop-shadow(0px 0px 50px rgba(0, 0, 0, 1))',
        filter: 'drop-shadow(0px 0px 50px rgba(0, 0, 0, 1))',
    }}>
        <div className='h-screen overflow-hidden flex justify-center items-center' 
            style={{
                backgroundImage: `url('/back.jpg')`,
                backgroundSize: 'cover',
            }}>
            
            <div className='flex items-center flex-col'>
                <div className='flex items-center flex-col'>
                    <img 
                        src='/logo.png'
                        alt='Picture'
                        className='md:w-[50vw] w-[70vw] lg:w-[600px]'
                        style={{
                            WebkitFilter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
                            filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
                        }}
                        
                    />
                    <p className='text-3xl'>і будзьце пачутымі!</p>
                </div>
                {/* <DownOutlined style={{ fontSize: '36px', position: 'fixed', bottom: 40 }}/> */}
                <div style={{position: 'fixed', bottom: 40}}>
                    <a href="#intro">
                    <button
                        className="cursor-pointer bg-newblack px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:invert"
                        >
                        <svg
                            className="w-5 h-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            ></path>
                        </svg>
                    </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;