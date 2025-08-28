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

    CallToAction,
    FooterBlogs,
    Footer,
    GameAccount
} from "@/components";
import { Button } from "@/components/ui/button";
import ProductbyCategory from "../components/shared/ProductsbyCategory/ProductbyCategory";



const Home = () => {



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
        <div className="flex flex-col items-center justify-center m-auto overflow-hidden gap-12">
            
            <div className="hidden w-full max-w-1260 mx-auto lg:flex flex-row flex-wrap items-center justify-center text-white border rounded-xl py-1.5 px-4 mt-9">
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

            <BestSeller id="bestSellers" />
            <FlashDeal />

            <UpcomingGames />
            <TrendingOffer displayImage={true} gridNumber={2} />

            <TrendingCategories />
            <ProductbyCategory brandName="Software" />
            {/* <Software />  */}

            <TopGames />
            <BundleDeals />
            {/* <RandomKeys /> */}
            <ProductbyCategory brandName="Random Keys" />
            <ProductbyCategory brandName="Cryptocurrencies" />
            {/* <CryptoCorner /> */}
            <GameAccount />
            <FavoriteItems />

            {/* <GamesBanner /> */}

            <CallToAction />

            <FooterBlogs />


        </div>
    )
}

export default Home