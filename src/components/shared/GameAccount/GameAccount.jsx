import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import bgimg from "/images/BgCategories1.png"
import { useGameAccountQuery } from "@/hooks/useHomeQuery"

const GameAccount = () => {


    const { data, isPanding, isError } = useGameAccountQuery(1, 4)

    const Accounts = data?.data || []

    const CardWidth =
        [
            "max-w-[300px]",
            "max-w-[300px]",
            "max-w-[600px]"
        ]

    return (
        <div className="flex w-full justify-center relative gap-5" id="trending-categories">
            <img src="/images/CenterShedow.png" className="absolute z-10" />
            <div className="flex flex-col items-center md:items-start max-w-1260 w-full gap-4 md:gap-8 z-20 px-4">
                <div>
                    <h3 className=" text-26 -tracking-tight font-semibold text-start text-white">Top Trending Categories</h3>
                    <p className="text-base font-normal -tracking-tight text-start text-white mb-4">From popular subscriptions and software to e-learning, top-ups, and more.</p></div>
                <div className="flex flex-col md:flex-row w-full justify-between gap-4 md:gap-8">
                    {Accounts.slice(0, 3).map((account, index) => (
                        <Card style={{
                            backgroundImage: `url(${account.images[0]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} className={`rounded-21 flex justify-end  ${CardWidth[index]} w-full h-80  p-5 border-0`}>
                                <div className="flex flex-col items-start gap-2">
                                    <h3 className="text-26 font-bold font-poppins text-white">{account.title}</h3>
                                    <span className="text-base font-medium font-poppins text-white">IndieFlix · Global · Key</span>
                                </div>
                        </Card>
                    ))
                    } </div>
                <div className="flex flex-col md:flex-row-reverse w-full justify-between gap-4 md:gap-8">
                    {Accounts.slice(1, 4).map((account, index) => (
                        <Card style={{
                            backgroundImage: `url(${account.images[0]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} className={`rounded-21 flex justify-end  ${CardWidth[index]} w-full h-80  p-5 border-0`}>
                            <div className="flex flex-col items-start gap-2 w-full">
                                    <h3 className="text-2xl font-bold font-poppins text-white">{account.title}</h3>
                                    <span className="text-base font-medium font-poppins text-white">IndieFlix · Global · Key</span>
                                </div>          
                        </Card>
                    ))
                    }
                </div>

            </div>
        </div>
    )
}

export default GameAccount