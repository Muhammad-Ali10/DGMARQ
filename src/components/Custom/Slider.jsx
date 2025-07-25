
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Slider = () => {

    const rewards = [
        {
            imgSrc: "/images/reward1.png",
            title: "Marketplace",
            decripition: "21st Century National Technology Awards, 2024",
        },
        {
            imgSrc: "/images/reward2.png",
            title: "Payments Innovations of the Year category (3rd place)",
            decripition: "eCommerce Awards 2024",
        },
        {
            imgSrc: "/images/reward3.png",
            title: "Best Digital Marketing Campaign (1st place)",
            decripition: "21st Century National Technology Awards, 2024",
        },
        {
            imgSrc: "/images/reward4.png",
            title: "Company of the Year: Retail Gold Winner",
            decripition: "21st Century National Technology Awards, 2024",
        },
        {
            imgSrc: "/images/reward1.png",
            title: "Marketplace",
            decripition: "21st Century National Technology Awards, 2024",
        },
        {
            imgSrc: "/images/reward2.png",
            title: "Payments Innovations of the Year category (3rd place)",
            decripition: "eCommerce Awards 2024",
        },
        {
            imgSrc: "/images/reward3.png",
            title: "Best Digital Marketing Campaign (1st place)",
            decripition: "21st Century National Technology Awards, 2024",
        },
        {
            imgSrc: "/images/reward4.png",
            title: "Company of the Year: Retail Gold Winner",
            decripition: "21st Century National Technology Awards, 2024",
        }
    ]

    return (
        <Carousel className="max-w-[1230px] w-full m-auto">
            <CarouselContent className="flex items-center justify-center gap-4">
                {rewards.map((item, index) =>
                    <CarouselItem className=" max-w-[292px] w-full bg-blue-4 flex flex-col rounded-21 p-4 gap-2.5 text-white">
                        <img src={item.imgSrc} alt="reward" className="size-[262px]" />
                        <h3 className="text-base font-semibold tracking-tighter font-poppins">{item.title}</h3>
                        <p className="text-sm font-normal font-poppins tracking-tighter capitalize text-justify">{item.decripition}</p>
                    </CarouselItem>
                )}

            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
        </Carousel>
    )
}

export default Slider