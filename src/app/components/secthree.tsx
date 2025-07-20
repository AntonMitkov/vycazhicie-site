import Profile from "./profile";

const SecThree = () => {

  return (
    <div style={{
            WebkitFilter: 'drop-shadow(0px 0px 30px rgba(255, 255, 255, 1))',
            filter: 'drop-shadow(0px 0px 30px rgba(255, 255, 255, 1))',
        }}>
        <div className="h-screen bg-newwhite flex flex-col items-center justify-center gap-15">
            <p className="text-6xl font-black text-newblack">Нашы арганізатары</p>
            <div>
                <div className="flex flex-row gap-5 max-[1200px]:hidden">
                    <Profile title="Ягор Вератынскі" imageSrc="orgs/vertik.png"/>
                    <Profile/>
                    <Profile/>
                    <Profile/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SecThree;
