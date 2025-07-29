import React, { Fragment } from "react";

import {
    Header,
    BestSeller,
    BundleDeals,
    CryptoCorner,
    FavoriteItems,
    FlashDeal,
    Hero,
    TrendingOffer,
    RandomKeys,
    Software,
    TopGames,
    TrendingCategories,
    UpcomingGames,
    GamesBanner,
    CallToAction,
    FooterBlogs,
    Footer
} from "@/components";
import { Button } from "@/components/ui/button";



const Home = () => {


    const product = [
        "./images/BestSeller1.png",
        "./images/BestSeller2.png",
        "./images/BestSeller3.png",
        "./images/BestSeller4.png",
        "./images/BestSeller5.png",
        "./images/BestSeller6.png",

    ]
    const NavItem = [
        { name: "Bestsellers", id: "bestSellers" },
        { name: "Upcoming Games", id: "upcoming-games" },
        { name: "Flash Deal", id: "FlashDeal" },
        { name: "Trending Categories", id: "trending-categories" },
        { name: "Software", id: "software" },
        { name: "Gaming gift cards", id: "gaming-gift-cards" },
        { name: "Random Keys", id: "random-keys" },
        { name: "Cryptocurrencies", id: "cryptocurrencies" },
        { name: "Game Accounts", id: "bg-game_bg" },
    ]

    return (
        <div className="flex flex-col items-center justify-center m-auto overflow-hidden gap-12 px-5">
            <Hero />
            <div className="w-full max-w-1260 mx-auto flex flex-col md:flex-row items-center justify-center text-white border rounded-xl py-1.5 px-4 mt-9">
                {NavItem.map(({ name, id }, index) => (
                    <React.Fragment key={id}>
                        <Button
                            className="text-base font-medium font-poppins tracking-tight capitalize bg-transparent p-0 cursor-pointer z-50"
                            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                        >
                            {name}
                        </Button>
                        {index < NavItem.length - 1 && (
                            <hr className="border-t border-white w-5 rotate-90" />
                        )}
                    </React.Fragment>
                ))}

            </div>

            <BestSeller product={product} id="bestSellers" />
            <FlashDeal displayImage={false} displayDirection="flex-row" />

            <UpcomingGames />
         

            <div className="flex flex-col  lg:flex-row-reverse md:px-0 justify-center items-center max-w-1260 w-full gap-6 pt-11" id="FlashDeal" >

                <img src="./images/offerimage.png" alt="offerimage" className="h-[500px]" />
                <TrendingOffer gridNumber="grid-cols-2" />
            </div>
            <TrendingCategories />
            <Software id="software" />

            <TopGames />
            <BundleDeals />
            <RandomKeys />
            <CryptoCorner />

            <FavoriteItems />
            {/*Games Banner section starts here */}
            <GamesBanner />

            {/* Call to Action section starts here */}
            <CallToAction />
            {/* Call to Action section ends here */}
            {/* Footer Blogs section starts here */}
            <FooterBlogs />
            {/* Footer Blogs section ends here */}
            

        </div>
    )
}

export default Home