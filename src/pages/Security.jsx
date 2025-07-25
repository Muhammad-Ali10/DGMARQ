import {
    CallToAction,
    FooterBlogs,
    PromoSection,
    FarmeWork,
    Help,
    CustomizedHero
} from "@/components";
import {
    SecurityHeroSection,
    FarmeWorkData,
    SecurityPromoSection
} from "@/lib/data";


const Security = () => {
    return (

        <div className="flex flex-col max-w-1440 bg-blue items-center justify-center m-auto">
             {/*Hero Section Start Here*/}
                <CustomizedHero data={SecurityHeroSection}/>
             {/*Hero Section End Here*/}
             
            <PromoSection data={SecurityPromoSection}/>

            <FarmeWork FarmeWorkData={FarmeWorkData} />

            <PromoSection />

            <Help />

            <CallToAction />
            <FooterBlogs />
        </div>



    )
}

export default Security