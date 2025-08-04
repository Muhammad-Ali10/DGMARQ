import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const FlashDealCard = ({
  startTime,
  endTime,
  actualPrice,
  discountPrice,
  image,
  title,
}) => {
  const calculateTimeLeft = () => {
    const now = Date.now();

    if (startTime && now < startTime) {
      const diff = startTime - now;
      return {
        status: "Coming Soon",
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    } else if (startTime && endTime && now >= startTime && now <= endTime) {
      const diff = endTime - now;
      return {
        status: "Active",
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    } else {
      return { status: "Ended", hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return (
    <div className="w-full max-w-[454px] h-auto bg-primary rounded-21 p-5 flex flex-col gap-3.5 flex-shrink-0">
      <h2 className="text-2xl font-bold font-poppins text-center text-white">
        Flash Deal{" "}
        {timeLeft.status === "Coming Soon"
          ? "Starts in"
          : timeLeft.status === "Active"
          ? "Ends in"
          : "Deal Ended"}
      </h2>

      {/* Countdown Timer */}
      <div className="flex justify-between items-center">
        {["hours", "minutes", "seconds"].map((key, i) => (
          <React.Fragment key={key}>
            <div className="w-[90px] h-[78px] bg-white/10 text-white px-1 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold font-poppins">
                {String(timeLeft[key]).padStart(2, "0")}
              </div>
              <div className="text-sm font-poppins font-normal tracking-tight">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            </div>
            {i < 2 && (
              <div className="text-white text-2xl sm:text-4xl font-bold">:</div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Product Image + Discount */}
      <div className="flex flex-col justify-center items-center w-full relative">
        <div className="max-w-[308px]">
          <img
            src={image}
            alt="Flash Deal"
            className="w-full h-[169px] object-contain z-0"
          />
          <div className="text-base font-normal font-poppins flex flex-col -mt-12 ml-2.5 absolute z-50 text-white rounded-lg bg-primary w-[99px] h-[70px] px-3.5 py-1">
            Save{" "}
            <span className="text-2xl font-bold font-poppins text-center">
              $ {(actualPrice - discountPrice).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Product Title & Info */}
      <div className="flex flex-col mt-6 text-white font-poppins">
        <h3 className="text-[22px] leading-[26px] font-semibold">{title}</h3>
        <div className="flex justify-between items-center mt-1">
          <div className="text-white text-sm font-normal">
            Left: <span className="font-bold">0</span>
          </div>
          <div className="bg-orange text-white px-4 py-2 rounded-21 border-[#D55603] border">
            Sold 50
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-auto pt-4 bg-white/10 text-center font-poppins p-3">
        <div className="text-white text-2xl font-semibold">
          $ {(actualPrice - discountPrice).toFixed(2)}
        </div>
        <del className="text-white/60 text-xs font-normal p-3">
          $ {actualPrice}
        </del>
      </div>

      {/* Buy Button */}
      <button className="w-full bg-orange flex items-center justify-center gap-2 p-3 rounded-21 border border-[#D55603] text-white font-medium font-poppins">
        <ShoppingCart />
        Buy Now
      </button>
    </div>
  );
};

export default React.memo(FlashDealCard);
