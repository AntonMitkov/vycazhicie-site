const Card = () => {

  return (
    <div className="flex flex-col justify-center gap-5">
        <div style={{
            WebkitFilter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
            filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 1))',
        }}>
            <img src="speakers/alesya_zaya.png" alt="alesya" className="h-120 rounded-2xl"/>
            <p className="text-2xl font-bold absolute bottom-6 left-6">Алеся Алейнікава</p>
        </div>
    </div>
  );
};

export default Card;