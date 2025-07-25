import React from 'react';
import { ProductSection, RandomKeySeller, FooterBlogs } from '@/components';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';


const BestSellers = () => {

    const product = [
        "./images/BestSeller7.png",
        "./images/BestSeller8.png",
        "./images/BestSeller9.png",
        "./images/BestSeller8.png",
        "./images/BestSeller10.png",
        "./images/BestSeller11.png",
        "./images/BestSeller12.png",
        "./images/BestSeller13.png",
        "./images/BestSeller14.png",
        "./images/BestSeller15.png",
        "./images/BestSeller16.png",
        "./images/BestSeller17.png",
    ]

    const SoftwareBestSeller = [
        "./images/BestSeller1.png",
        "./images/BestSeller2.png",
        "./images/BestSeller3.png",
        "./images/BestSeller4.png",
        "./images/BestSeller5.png",
        "./images/BestSeller6.png",
    ];

    const PlatformsButton = [
        { name: "steam Games", url: "#" },
        { name: "Origin Games ", url: "#" },
        { name: "Xbox Live Games", url: "#" },
        { name: "GOG Games", url: "#" },
        { name: "Ubisoft Connect", url: "#" },
        { name: "PSN Games", url: "#" },
    ];

    const PopularTopics = [
        { name: "Civilization Games", url: "#" },
        { name: "Final Fantasy Games", url: "#" },
        { name: "Nancy Drew Games ", url: "#" },
        { name: "Borderlands Games", url: "#" },
        { name: "Fallout Games", url: "#" },
        { name: "Payday Games", url: "#" },
        { name: "Sniper Elite Games", url: "#" },
        { name: "ACA NEOGEO Games", url: "#" },
        { name: "Civilization 7 Price", url: "#" },
        { name: "Civilization 7 PS5 Code", url: "#" },
        { name: "Kingdom Come Deliverance 2 Price", url: "#" },
        { name: "Monster Hunter Wilds PC Key", url: "#" },
        { name: "Monster Hunter Wilds Best Price", url: "#" },
        { name: "Monster Hunter Wilds Xbox Key", url: "#" },
        { name: "Monster Hunter Wilds PS5 Code", url: "#" },
        { name: "Ambulance Life PC Key", url: "#" },
        { name: "Spider-Man 2 PC Key", url: "#" },
        { name: "Assetto Corsa Evo Key", url: "#" },
    ];

    return (
        <div className="flex flex-col max-w-1440 bg-blue items-center justify-center gap-12 m-auto pt-12">

            {/* <BestSellers component starts here in this componemet Our Marketplace Best Sellers */}

            <ProductSection productimage={product} title="Best sellers" description="The hottest items on our marketplace – discover what captured our users' hearts!" />

            {/* <BestSellers component ends here */}


            {/* Random key Seller component starts here In This component Our Marketplace Random Key Seller */}

            <RandomKeySeller />

            {/* Random key Seller component ends here */}


            {/* software Bestseller section starts here */}

            <ProductSection productimage={SoftwareBestSeller} title="Software Best sellers" description="The hottest software items on our marketplace – discover what captured our users' hearts!" />

            {/* software Bestseller section ends here */}

            {/* Platforms Button section starts here */}

            <div className="flex flex-col items-center justify-center gap-7 bg-blue-2 py-12 max-w-1440 w-full">

                <h3 className="text-2xl font-semibold text-white">TOP Game Platforms</h3>
                <p className="text-sm font-poppins font-normal text-white">Are you low on cash or just want to score a great bargain? DGMARQ offers a selection of great video games for all major gaming platforms!</p>

                <div className="flex flex-wrap items-center justify-center gap-4 max-w-1260 w-full">
                    {PlatformsButton.map((platform, index) => (
                        <Button className="py-5 px-4 rounded-21 h-[110px] w-[189px] bg-blue font-poppins text-base text-center text-white font-bold" key={index} as={Link} to={platform.url}>
                            {platform.name}
                        </Button>
                    ))}
                </div>
            </div>
            {/* Platforms Button section ends here */}

            {/* Popular Topics section starts here */}

            <div className="flex flex-col items-center justify-center gap-7 py-12 max-w-1260 w-full">
                <h3 className="text-2xl font-semibold text-white">Popular Topics</h3>
                <p className="text-sm font-poppins font-normal text-white">Explore the most popular topics in the gaming world and find the best deals on your favorite games!</p>

                <div className="flex flex-wrap items-center justify-start gap-4">
                    {PopularTopics.map((topic, index) => (
                        <Button className="py-5 px-4 bg-blue-3 rounded-21 h-[64px] font-poppins text-base text-center text-white font-bold" key={index} as={Link} to={topic.url}>
                            {topic.name}
                        </Button>
                    ))}
                </div>
            </div>
            {/* Popular Topics section ends here */}
        
                    
            {/* Footer Blogs section starts here */}
            <FooterBlogs /> 
            {/* Footer Blogs section ends here */}

        </div>
    );
}

export default BestSellers;