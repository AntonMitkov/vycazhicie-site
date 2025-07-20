import { DownOutlined } from '@ant-design/icons';
import Image from 'next/image'

const Outro = () => {

  return (
    <div className=''>
        <div className='h-screen overflow-hidden flex justify-center items-center' 
            style={{
                backgroundImage: `url('/bg-3.jpeg')`,
                backgroundSize: 'cover',
            }}>
            
            <div className='flex items-center flex-col'>
                <div className='flex items-center flex-col'>
                    <img 
                        src='/logo.png'
                        alt='Picture'
                        className='md:w-[50vw] w-[70vw] lg:w-[600px]'
                        style={{
                            WebkitFilter: 'drop-shadow(0px 0px 70px rgba(0, 0, 0, 1))',
                            filter: 'drop-shadow(0px 0px 70px rgba(0, 0, 0, 1))',
                        }}
                        
                    />
                    <p className='text-xl'>Мерапрыемства, якое яднае</p>
                </div>
                {/* <DownOutlined style={{ fontSize: '36px', position: 'fixed', bottom: 40 }}/> */}
            </div>
        </div>
    </div>
  );
};

export default Outro;