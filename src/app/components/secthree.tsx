import Profile from "./profile";

const SecThree = () => {

  return (
    <div style={{
            WebkitFilter: 'drop-shadow(0px 0px 30px rgba(255, 255, 255, 1))',
            filter: 'drop-shadow(0px 0px 30px rgba(255, 255, 255, 1))',
        }}>
        <div className="h-screen max-[1200px]:h-fit bg-newwhite flex flex-col items-center justify-center gap-15 px-5 max-[1200px]:py-15">
            <p className="text-4xl min-[768px]:text-6xl font-black text-newblack">Нашы арганізатары</p>
            <div>
                <div className="flex flex-row gap-5 max-[1200px]:flex-col">
                    <div className="flex flex-row gap-5">
                      <Profile title="Ягор Вератынскі" imageSrc="orgs/vertik.png"/>
                      <Profile title="Маша Скнарына" imageSrc="orgs/masha_skn_solnyshko.png"/>
                    </div>
                    <div className="flex flex-row gap-5">
                      <Profile title="Таня Паклонская" imageSrc="orgs/tatyana.png"/>
                      <Profile title="Антон Міцькоў" imageSrc="orgs/AntonMeatCow.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SecThree;
