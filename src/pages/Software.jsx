import {
    BestSeller,           
    TrendingOffer,
    ProductbyCategory
} from "@/components";

 

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

const SoftwarePage = () => {
    return (
        <div className="flex flex-col   items-center justify-center gap-12 m-auto py-12">
            {/* <img src="./images/LeftShedow.png" alt="shedow" className="absolute left-0 top-0 drop-shadow-2xl" />
            <img src="./images/RightShedow.png" alt="shedow" className="absolute right-0 top-0 drop-shadow-2xl" /> */}
            <div className="flex flex-col text-white font-poppins">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">Best Software</h3>
                <p className="text-base font-normal -tracking-tight text-center">For Home and Business</p>
            </div>
            <TrendingOffer gridNumber={3} />
            <img src="./images/softwarebanner.png" alt="offerimage" className="max-w-1260 w-full" />



            <BestSeller />
            <ProductbyCategory brandName="Vpns" />
            {setTimeout(()=>{
                return (
                    <ProductbyCategory brandName="iOS utilities" />)
            },1000)}
 
        </div>
    )
}

export default SoftwarePage