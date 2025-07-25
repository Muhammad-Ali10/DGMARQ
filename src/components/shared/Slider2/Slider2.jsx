"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider2 = () => {
  const rewards = [
    {
      imgSrc: "https://dgmarq-z9uy.vercel.app//reward1.png",
      title: "Marketplace",
      decripition: "21st Century National Technology Awards, 2024",
    },
    {
      imgSrc: "https://dgmarq-z9uy.vercel.app//reward2.png",
      title: "Payments Innovations of the Year category (3rd place)",
      decripition: "eCommerce Awards 2024",
    },
    {
      imgSrc: "https://dgmarq-z9uy.vercel.app//reward3.png",
      title: "Best Digital Marketing Campaign (1st place)",
      decripition: "21st Century National Technology Awards, 2024",
    },
    {
      imgSrc: "https://dgmarq-z9uy.vercel.app//reward4.png",
      title: "Company of the Year: Retail Gold Winner",
      decripition: "21st Century National Technology Awards, 2024",
    },
    {
      imgSrc: "https://dgmarq-z9uy.vercel.app//reward1.png",
      title: "Marketplace",
      decripition: "21st Century National Technology Awards, 2024",
    },
    {
      imgSrc: "https://dgmarq-z9uy.vercel.app//reward2.png",
      title: "Payments Innovations of the Year category (3rd place)",
      decripition: "eCommerce Awards 2024",
    },
    {
      imgSrc: "https://dgmarq-z9uy.vercel.app//reward3.png",
      title: "Best Digital Marketing Campaign (1st place)",
      decripition: "21st Century National Technology Awards, 2024",
    },
    {
      imgSrc: "https://dgmarq-z9uy.vercel.app//reward4.png",
      title: "Company of the Year: Retail Gold Winner",
      decripition: "21st Century National Technology Awards, 2024",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-10 sm:px-6 md:px-11 xl:px-20 xl:py-14 max-w-[1440px] mx-auto">
      <Carousel className="w-full">
        {/* Section Heading */}
        <div className="flex flex-col gap-2.5 mb-5 px-2 sm:px-4 md:px-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-white">
            Enterprise
          </h3>
          <span className="text-sm sm:text-base font-poppins font-normal text-white">
            Get for more
          </span>
        </div>

        {/* Carousel Items */}
        <CarouselContent className="flex items-center justify-center gap-4">
          {rewards.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 bg-blue-4 flex flex-col rounded-[21px] p-4 gap-2 text-white"
            >
              <img
                src={item.imgSrc}
                alt="reward"
                className="w-full h-[200px] sm:h-[220px] md:h-[240px] xl:h-[262px] object-cover rounded-md"
              />
              <h3 className="text-sm sm:text-base font-semibold tracking-tighter font-poppins">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-normal font-poppins tracking-tighter capitalize text-justify">
                {item.decripition}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <div className="flex items-center justify-center absolute top-5 right-5 sm:top-10 sm:right-10 xl:top-16 xl:right-16 z-10">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider2;
