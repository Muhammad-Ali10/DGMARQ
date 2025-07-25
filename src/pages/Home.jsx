import {
    Header,
    BestSeller,
    BundleDeals,
    CryptoCorner,
    FavoriteItems,
    FlashDeal,
    Hero,
    DgmarqFeatures,
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


const Home = () => {


        const product = [
        "../../../assets/images/BestSeller1.png",
        "../../../assets/images/BestSeller2.png",
        "../../../assets/images/BestSeller3.png",
        "../../../assets/images/BestSeller4.png",
        "../../../assets/images/BestSeller5.png",
        "../../../assets/images/BestSeller6.png",

    ]
    return (
        <div className="flex flex-col max-w-1440 bg-blue items-center justify-center m-auto">
            <Hero />
            <BestSeller product={product} />
            <FlashDeal displayImage={false} displayDirection="flex-row" />
            <UpcomingGames />
            <FlashDeal displayImage={true} displayDirection="flex-row-reverse" />
            <TrendingCategories />
            <Software />
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