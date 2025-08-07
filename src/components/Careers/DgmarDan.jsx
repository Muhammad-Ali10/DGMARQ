import { Button } from "@/components/ui/button";

const DgmarDna = () => {
  const DAN_Data = [
    {
      imgUrl: "https://res.cloudinary.com/dptwervy7/image/upload/v1754393654/DAN_Deliver_hdehg9.png",
      title: "Deliver Value",
    },
    {
      imgUrl: "https://res.cloudinary.com/dptwervy7/image/upload/v1754393656/DNA_Team_uunmwd.png",
      title: "Team Spirit",
    },
    {
      imgUrl: "https://res.cloudinary.com/dptwervy7/image/upload/v1754393656/DNA_Growth_jq0nu3.png",
      title: "Growth",
    },
    {
      imgUrl: "https://res.cloudinary.com/dptwervy7/image/upload/v1754393655/DNA_Communication_zcru4f.png",
      title: "Communication",
    },
    {
      imgUrl: "https://res.cloudinary.com/dptwervy7/image/upload/v1754393655/DNA_Accountability_rrh1tt.png",
      title: "Trust",
    },
    {
      imgUrl: "https://res.cloudinary.com/dptwervy7/image/upload/v1754393657/DNA_Trust_ijli0i.png",
      title: "Accountability",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5  p-4 sm:p-5 md:px-11 md:py-6 xl:px-22 xl:py-13 text-white text-center mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold font-poppins">
        DGMAR DNA – Our core values
      </h2>
      <p className="text-poppins font-normal text-sm sm:text-base">
        The DGMAR Capital group, including the DGMAR.COM marketplace, has been
        built on a set of core principles we call the DGMAR DNA
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
        {DAN_Data.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center gap-2.5 rounded-2xl p-4 sm:p-5 bg-blue text-center"
            key={index}
          >
            <img
              src={item.imgUrl}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
            <p className="text-lg sm:text-xl font-bold font-poppins">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center text-white gap-4 md:gap-7 mt-6">
        <Button className="py-2.5 px-6 rounded-md bg-primary font-bold text-base md:text-xl xl:text-[26px] font-poppins h-14">
          More about DGMAR DNA
        </Button>
        <Button className="py-2.5 px-6 rounded-md border-2 border-[#0E9FE2] bg-transparent font-bold text-base md:text-xl xl:text-[26px] font-poppins h-14">
          Go for L&D details
        </Button>
      </div>
    </div>
  );
};

export default DgmarDna;
