
import { Button } from '@/components/ui/button';


const ValuePropositionSection = ({imageUrl, data, btn}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 max-w-1440 w-full px-5 py-6 md:px-10 md:py-8 lg:px-12 lg:py-10 xl:px-22 xl:py-13 text-white bg-[#0E092C]">

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold font-poppins text-center leading-snug">
                DGMARQ.COM empowers sellers with its Win-Win CPS Model and strengths, providing unparalleled opportunities for success
            </h3>

            {/* Image + Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center w-full">

                {/* Image */}
                <img src={imageUrl} alt="seller-laptop" className="rounded-xl w-full max-w-full h-auto object-contain" />

                {/* Detail Cards */}
                {data.map((step, index) => (
                    <div key={index} className="flex flex-col items-start justify-start gap-4">
                        <h3 className="text-[22px] font-bold font-poppins">{step.title}</h3>
                        <p className="text-base font-normal font-poppins">{step.description}</p>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            {btn && <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-6 w-full">
                <Button className="py-2.5 px-6 rounded-md bg-primary font-bold text-[22px] font-poppins h-14">
                    Explore our journey
                </Button>
                <Button className="py-2.5 px-6 rounded-md border-2 border-[#0E9FE2] bg-transparent font-bold text-[22px] font-poppins h-14">
                    Explore our values and mission
                </Button>
            </div>}
        </div>
    )
}

export default ValuePropositionSection