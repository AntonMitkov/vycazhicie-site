import { DownOutlined } from '@ant-design/icons';
import Image from 'next/image'
import Logo from "./logo";

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
                    {/* <img 
                        src='/logo.svg'
                        alt='Picture'
                        className='md:w-[50vw] w-[70vw] lg:w-[600px]'
                        style={{
                            WebkitFilter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
                            filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
                        }}
                        
                    /> */}
                    <Logo 
                    className='md:w-[50vw] w-[70vw] lg:w-[600px] h-auto p-1' 
                    style={{
                            WebkitFilter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
                            filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
                        }}/>
                    <p className='text-2xl max-[650]:text-xl text-new'>і будзьце пачутымі!</p>
                </div>
                {/* <DownOutlined style={{ fontSize: '36px', position: 'fixed', bottom: 40 }}/> */}
    
            </div>
        </div>
    </div>
  );
};

export default Banner;