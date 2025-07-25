import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const TrendingCategories = () => {
    return (
        <div className="flex w-full justify-center relative gap-5">
            <img src="/images/CenterShedow.png" className="absolute z-10"/>
            <div className="flex flex-col items-center md:items-start max-w-1260 w-full gap-4 md:gap-8 z-20 px-4">
                <div>
                    <h3 className=" text-26 -tracking-tight font-semibold text-start text-white">Top Trending Categories</h3>
                    <p className="text-base font-normal -tracking-tight text-start text-white mb-4">From popular subscriptions and software to e-learning, top-ups, and more.</p></div>
                <div className="flex flex-col md:flex-row w-full justify-between gap-4 md:gap-8">
                    <Card className="rounded-21 flex justify-end  max-w-[430px] w-full h-[461px] bg-[url(/images/BgCategories1.png)] bg-cover bg-center p-5 border-0">
                        <div className="flex flex-row items-start gap-5">
                            <img src="/images/TopSeller1.png" className="w-24 h-32" />
                            <div className="flex flex-col items-start gap-2">
                                <Button className="bg-[#F05F00] px-2.5 py-1.5 rounded-lg font-poppins text-base text-white">Best seller</Button>
                                <h3 className="text-26 font-bold font-poppins text-white">IndieFlix Gift Card 1 Month</h3>
                                <span className="text-base font-medium font-poppins text-white">IndieFlix · Global · Key</span>
                            </div>
                        </div>
                    </Card>
                    <Card className="rounded-21 flex justify-end  max-w-[804px] w-full h-[461px] bg-[url(/images/BgCategories1.png)] bg-cover bg-center p-5 border-0">
                        <div className="flex flex-row items-start gap-5">
                            <img src="/images/TopSeller1.png" className="w-24 h-32" />
                            <div className="flex flex-col items-start gap-2">
                                <Button className="bg-[#F05F00] px-2.5 py-1.5 rounded-lg font-poppins text-base text-white">Best seller</Button>
                                <h3 className="text-26 font-bold font-poppins text-white">IndieFlix Gift Card 1 Month</h3>
                                <span className="text-base font-medium font-poppins text-white">IndieFlix · Global · Key</span>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="flex flex-col md:flex-row-reverse w-full justify-between z-20 gap-4 md:gap-8">
                    <Card className="rounded-21 flex justify-end  max-w-[430px] w-full h-[461px] bg-[url(/images/BgCategories1.png)] bg-cover bg-center p-5 border-0">
                        <div className="flex flex-row items-start gap-5">
                            <img src="/images/TopSeller1.png" className="w-24 h-32" />
                            <div className="flex flex-col items-start gap-2">
                                <Button className="bg-[#F05F00] px-2.5 py-1.5 rounded-lg font-poppins text-base text-white">Best seller</Button>
                                <h3 className="text-26 font-bold font-poppins text-white">IndieFlix Gift Card 1 Month</h3>
                                <span className="text-base font-medium font-poppins text-white">IndieFlix · Global · Key</span>
                            </div>
                        </div>
                    </Card>
                    <Card className="rounded-21 flex justify-end  max-w-[804px] w-full h-[461px] bg-[url(/images/BgCategories1.png)] bg-cover bg-center p-5 border-0">
                        <div className="flex flex-row items-start gap-5">
                            <img src="/images/TopSeller1.png" className="w-24 h-32" />
                            <div className="flex flex-col items-start gap-2">
                                <Button className="bg-[#F05F00] px-2.5 py-1.5 rounded-lg font-poppins text-base text-white">Best seller</Button>
                                <h3 className="text-26 font-bold font-poppins text-white">IndieFlix Gift Card 1 Month</h3>
                                <span className="text-base font-medium font-poppins text-white">IndieFlix · Global · Key</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default TrendingCategories