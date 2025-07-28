import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import '../../App.css';

import { Pagination } from 'swiper/modules';

const Slider = () => {

    const rewards = [
        {
            imgSrc: "./images/reward1.png",
            title: "Marketplace",
            decripition: "21st Century National Technology Awards, 2024",
        },
        {
            imgSrc: "./images/reward2.png",
            title: "Payments Innovations of the Year category (3rd place)",
            decripition: "eCommerce Awards 2024",
        },
        {
            imgSrc: "./images/reward3.png",
            title: "Best Digital Marketing Campaign (1st place)",
            decripition: "21st Century National Technology Awards, 2024",
        },
        {
            imgSrc: "./images/reward4.png",
            title: "Company of the Year: Retail Gold Winner",
            decripition: "21st Century National Technology Awards, 2024",
        },
        {
            imgSrc: "./images/reward1.png",
            title: "Marketplace",
            decripition: "21st Century National Technology Awards, 2024",
        },
        {
            imgSrc: "./images/reward2.png",
            title: "Payments Innovations of the Year category (3rd place)",
            decripition: "eCommerce Awards 2024",
        },
        {
            imgSrc: "./images/reward3.png",
            title: "Best Digital Marketing Campaign (1st place)",
            decripition: "21st Century National Technology Awards, 2024",
        },
        {
            imgSrc: "./images/reward4.png",
            title: "Company of the Year: Retail Gold Winner",
            decripition: "21st Century National Technology Awards, 2024",
        }
    ]

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Pagination]}
                className="mySwiper max-w-1260"
            >
                {rewards.map((item, index) =>
                    <SwiperSlide className="w-full rounded-21  p-4 text-white text-start">

                      <div className="size-[262px] rounded-2xl">
                          <img src={item.imgSrc} alt="reward" className="h-full m-auto rounded-2xl" />
                      </div>
                        <h3 className="text-base font-semibold tracking-tighter font-poppins truncate text-start mt-2.5">{item.title}</h3>
                        <p className="text-sm font-normal font-poppins tracking-tighter capitalize text-justify">{item.decripition}</p>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

export default Slider