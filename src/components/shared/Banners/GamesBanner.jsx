import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"


const GamesBanner = () => {


    const cardData =
        [
            {
                imageUrl: "./images/mobileapp.svg",
                title: "Vast selection in best prices",
                description: "Over 70K digital items"
            },
            {
                imageUrl: "./images/share.svg",
                title: "Secured payments",
                description: "2000+ Payment  Methods"
            },
            {
                imageUrl: "./images/mobile.svg",
                title: "Loyal users",
                description: "30M  customers in 180 countries"
            }
        ]


    return (
        <div className="flex flex-col max-w-1440 w-full pt-8">
            <img src="./images/banner2.jpg" alt="banner" className="w-full object-cover h-[386px] max-w-1440" />
            <div className="max-w-1440 w-full flex justify-center  px-7 py-12 bg-[#0E092C] -mt-12">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-1260 w-full ">
                    <h3 className="text-26 font-bold font-poppins text-white">Why DGMARQ?</h3>
                    {cardData?.map((item, index) =>
                        <Card className="px-4 py-5 rounded-3xl flex flex-row bg-[#060318]  border-0 max-w-[340px] gap-1 w-full text-white" key={index}>
                            <img src={item?.imageUrl} className="size-14" />
                            <div className="flex flex-col w-full gap-4">
                                <CardHeader className="p-0">
                                    <CardTitle className="text-xl font-bold text-white font-poppins">{item?.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-base font-normal font-poppins">{item?.description}</p>
                                </CardContent>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GamesBanner