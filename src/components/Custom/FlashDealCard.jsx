import React, { useEffect, useState } from "react";
import { Base_url } from "../../lib/baseUrl";
import axios from "axios";
import { ShoppingCart } from 'lucide-react';

const FlashDealCard = () => {

    const [products, setProducts] = useState({});
    const flashDealStartDate = products?.[0]?.startDate
        ? new Date(products[0].startDate).getTime()
        : null;

    const flashDealEndDate = products?.[0]?.endDate
        ? new Date(products[0].endDate).getTime()
        : null;

    const calculateTimeLeft = () => {
        const now = new Date().getTime();

        if (flashDealStartDate && now < flashDealStartDate) {
            const difference = flashDealStartDate - now;
            return {
                status: "Coming Soon",
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else if (
            flashDealStartDate &&
            flashDealEndDate &&
            now >= flashDealStartDate &&
            now <= flashDealEndDate
        ) {
            const difference = flashDealEndDate - now;
            return {
                status: "Active",
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { status: "Ended", days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [flashDealStartDate, flashDealEndDate]);

    useEffect(() => {
        axios
            .get(`${Base_url}/flashDeals/getAll`)
            .then((res) => {
                console.log(res, 'flash deals===>>>');


                const approvedProducts = res?.data?.data.filter(
                    (product) => product.status === "approved"
                );

                if (approvedProducts.length > 0) {
                    setProducts([approvedProducts[0]]);
                } else {
                    setProducts([]);
                }
            })
            .catch((error) => {
                console.log(error);
            });


    }, []);

    return (
        <>
            {products?.[0]?.status === 'approved' ?
                <div className="w-full max-w-[454px] h-auto bg-primary rounded-21 p-5 flex flex-col gap-3.5  flex-shrink-0">
                    <h2 className="text-2xl font-bold font-poppins text-center text-white">Flash Deal {timeLeft.status === "Coming Soon"
                        ? "Starts in"
                        : timeLeft.status === "Active"
                            ? "Ends in"
                            : "Deal Ended"}</h2>

                    <div className="flex justify-between items-center">
                        <div className="w-[90px] h-[78px] bg-white/10 text-white px-1 flex flex-col items-center justify-center">
                            <div className="text-3xl font-bold font-poppins">{String(timeLeft.hours).padStart(2, "0")}</div>
                            <div className="text-sm font-poppins font-normal tracking-tight">Hours</div>
                        </div>

                        <div className="text-white text-2xl sm:text-4xl font-bold">:</div>

                        <div className="w-[90px] h-[78px] bg-white/10 px-1 text-white  flex flex-col items-center justify-center">
                            <div className="text-3xl font-bold font-poppins">{String(timeLeft.minutes).padStart(2, "0")}</div>
                            <div className="text-sm font-poppins font-normal tracking-tight">Minutes</div>
                        </div>

                        <div className="text-white text-2xl sm:text-4xl font-bold">:</div>

                        <div className="w-[90px] h-[78px] bg-white/10 px-1 text-white  flex flex-col items-center justify-center">
                            <div className="text-3xl font-bold font-poppins">{String(timeLeft.seconds).padStart(2, "0")}</div>
                            <div className="text-sm font-poppins font-normal tracking-tight">Seconds</div>
                        </div>
                    </div>


                    <div className="flex  flex-col justify-center items-center w-full">
                        <div className="max-w-[308px]">
                            <img src={products?.[0]?.image} alt="Steam Logo" className="w-full  h-[169px] object-contain z-0" />
                            <div className="text-base font-normal font-poppins flex flex-col -mt-12 ml-2.5 absolute z-50 text-white rounded-lg bg-primary w-[99px] h-[70px] px-3.5 py-1">
                                Save <span className="text-2xl font-bold font-poppins text-center">$ {products?.[0]?.actualPrice - products?.[0]?.discountPrice}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-6 text-white font-poppins">
                        <h3 className="text-[22px] leading-[26px] font-semibold ">
                            {products?.[0]?.title}
                        </h3>
                        <div className="flex justify-between items-center mt-1">
                            <div className="text-white text-sm font-normal">
                                Left: <span className="font-bold">0</span>
                            </div>
                            <div className="bg-orange text-white px-4 py-2 rounded-21 border-[#D55603] border">
                                Sold 50
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-4 bg-white/10 text-center font-poppins p-3">
                        <div className="text-white text-2xl font-semibold ">
                            $ {products?.[0]?.actualPrice - products?.[0]?.discountPrice}
                        </div>
                        <del className="text-white/60 text-xs font-normal p-3 ">$ {products?.[0]?.actualPrice}</del>

                    </div>
                    <button className="w-full bg-orange flex items-center justify-center gap-2 p-3 rounded-21 border border-[#D55603] text-white font-medium font-poppins">
                        <ShoppingCart />
                        Buy Now
                    </button>
                </div> : null}
        </>
    )
}

export default FlashDealCard