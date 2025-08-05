import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel"
import card1 from '/public/images/cardimage1.png';
import bg2 from "../../../../public/images/cardimage2.png"
import bg3 from "../../../../public/images/cardimage3.png"
import bg4 from "../../../../public/images/cardimage4.png"
import bg5 from "../../../../public/images/cardimage5.png"

const Hero = () => {  
  return (
    <div className="w-full   py-8 relative overflow-hidden">
     {/* <img src="./images/LeftShedow.png" alt="shedow" className="absolute left-0 top-0 drop-shadow-2xl"/>
        <img src="./images/CenterShedow.png" alt="shedow" className="absolute -right-2/3 -bottom-full drop-shadow-2xl"/> */}
      <Carousel className="w-full max-w-1260 mx-auto">
        <CarouselContent className="flex items-end  justify-center">
          {/* First Item */}
          <CarouselItem className="basis-auto p-0 z-10 md:-mr-6">
            <div className="w-[180px] md:w-[259px] h-[280px] md:h-[349px] rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-full bg-gradient-to-b from-blue-500 to-blue-700">
                <img
                  src='https://res.cloudinary.com/dptwervy7/image/upload/v1754393643/cardimage1_ejqqfq.png'
                  alt="Windows 11"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CarouselItem>

          {/* Second Item */}
          <CarouselItem className="basis-auto p-0 z-20 md:-mr-20">
            <div className="w-[180px] md:w-[285px] h-[280px] md:h-[382px] rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-full">
                <img
                  src="https://res.cloudinary.com/dptwervy7/image/upload/v1754393646/cardimage2_zl6lut.png"
                  alt="Tekken 8"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CarouselItem>

          {/* Featured Center Item */}
          <CarouselItem className="basis-auto p-0 z-30">
            <div className="w-[220px] md:w-[409px] h-[320px] md:h-[529px] rounded-2xl overflow-hidden shadow-xl relative">
              <div className="relative h-full">
                <img
                  src="https://res.cloudinary.com/dptwervy7/image/upload/v1754393646/cardimage3_nlpwzx.png"
                  alt="The Last of Us Part II Remastered"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-blue-800/95 p-4">
                  <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                    New Release
                  </div>
                  <h2 className="text-white font-bold text-lg md:text-2xl leading-tight mb-1">
                    THE LAST OF US PART II: REMASTERED
                  </h2>
                  <p className="text-gray-300 text-xs md:text-sm">Steam/PSN · Global · Key/Account</p>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Fourth Item */}
          <CarouselItem className="basis-auto p-0 z-20 md:-ml-20">
            <div className="w-[180px] md:w-[285px] h-[280px] md:h-[382px] rounded-2xl overflow-hidden shadow-lg ">
              <div className="relative h-full bg-gradient-to-b from-purple-500 to-purple-700">
                <img
                  src="https://res.cloudinary.com/dptwervy7/image/upload/v1754393649/cardimage4_crqqnw.png"
                  alt="Cyberpunk 2077"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CarouselItem>

          {/* Fifth Item */}
          <CarouselItem className="basis-auto p-0 z-10 md:-ml-6">
            <div className="w-[180px] md:w-[259px] h-[280px] md:h-[349px] rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-full">
                <img
                  src="https://res.cloudinary.com/dptwervy7/image/upload/v1754393647/cardimage5_xm7zvc.png"
                  alt="Red Dead Redemption 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Hero
