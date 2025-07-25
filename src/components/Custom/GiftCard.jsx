import { CircleCheck, Heart } from 'lucide-react';

const Giftcards = ({ cards }) => {
  console.log(cards);
  return (
    <div className="flex flex-col gap-6">
      {cards.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-center gap-2.5 p-4 bg-blue-4 rounded-21 max-w-[875px] "
        >
          <div className="w-[174px] h-[240px]">
            <img
              src="https://dgmarq-z9uy.vercel.app//gift-card.png"
              alt="Gift cards"
              className="w-full h-full object-cover rounded-21"
            />
          </div>
          <div className="flex flex-col items-start justify-center flex-1">
            <h2 className="text-3xl tracking-tight font-poppins font-semibold text-white flex flex-row justify-between items-center w-full">
              {item.title} <span>{item.price} USD</span>
            </h2>
            <div className="flex flex-col items-start justify-between w-full gap-4">
              <div className="flex flex-row items-center justify-start w-full">
                <p className="text-lg font-normal font-poppins tracking-tight text-white capitalize w-24">
                  Platform
                </p>
                <p className="text-lg font-normal font-poppins tracking-tight text-white capitalize">
                  {item.platform}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <p className="text-lg font-normal font-poppins tracking-tight text-white capitalize w-24">
                  Type
                </p>
                <p className="text-lg font-normal font-poppins tracking-tight text-white uppercase">
                  {item.type}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <p className="text-lg font-normal font-poppins tracking-tight text-white capitalize w-24">
                  Region
                </p>
                <p className="text-lg font-normal font-poppins tracking-tight text-white">
                  {item.region}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full gap-2.5">
                <CircleCheck className="text-[#04CF12]" />
                <p className="text-sm font-normal font-poppins tracking-tight text-[#04CF12]">
                  Can activate in Pakistan
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-sm font-bold font-poppins tracking-tight text-white">
                SPONSORED
              </p>
              <Heart className="text-white size-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Giftcards;
