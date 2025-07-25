import {
    CustomizedHero,
    DgmarqFeatures,
    CompanyIntroSection,
    Slider2,
    DgmarDna,
    FarmeWork,
    Faqs,
    ValuePropositionSection
} from "@/components"
import {
    CareersHeroSection,
    CareerDgmarqFeatures,
    CareerFarmeWork,
    CareerFaqs,
    CareerValueProposition
} from "@/lib/data"
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';


const Careers = () => {

    const Benefits = [
        { name: "Development and well-being programs    ", url: "#" },
        { name: "Motivizer cafeteria system", url: "#" },
        { name: "Multisport card", url: "#" },
        { name: "Life insurance", url: "#" },
        { name: "Medical care", url: "#" },
        { name: "Ergonomic workplace equipment", url: "#" },
        { name: "Employee referral program", url: "#" },
        { name: "Discounts on DGMAR.COM", url: "#" },
        { name: "Flexible working hours", url: "#" },
        { name: "Ergonomic and electronic equipment", url: "#" },
        { name: "Discounts in the Samsung partner store", url: "#" },
        { name: "Welcome Pack – to start your collaboration off right", url: "#" },

    ];

    return (
        <div className="flex flex-col bg-blue max-w-1440 items-center justify-center m-auto">
            <CustomizedHero data={CareersHeroSection} />
            <DgmarqFeatures title="Why join us" data={CareerDgmarqFeatures} />
            <CompanyIntroSection />
            <Slider2 />
            <DgmarDna />
            <FarmeWork data={CareerFarmeWork} />

            <div className="flex flex-col items-center justify-center gap-7 bg-blue-2 py-12  w-full">
                <h3 className="text-4xl font-semibold text-white">Benefits</h3>
                <div className="flex flex-wrap items-center justify-start gap-4 max-w-1260">
                    {Benefits.map((Benefits, index) => (
                        <Button className="p-6 rounded-21 gap-2.5  bg-blue font-poppins text-base text-center text-white font-bold" key={index} as={Link} to={Benefits.url}>
                            <Check /> {Benefits.name}
                        </Button>
                    ))}
                </div>
            </div>

            <Faqs data={CareerFaqs} />

            <div className="flex flex-col w-full max-w-1440 p-6 md:px-11 md:py-6 xl:px-22 xl:py-13 justify-between items-center gap-4 md:gap-[30px] bg-[#008AC9]/20">
                <h3 className="text-2xl md:text-4xl font-bold font-poppins text-center text-white">Learn about the recruitment process at DGMAR.COM</h3>
                <p className="text-base font-normal font-poppins text-center text-white">Find out how we hire the best talent and ensure their smooth onboarding experience</p>
                <>
                    <Button className="py-2.5 px-6 rounded-md bg-primary font-bold text-xl md:text-[26px] font-poppins h-14">Recruitment process</Button>
                </>
            </div>

            <ValuePropositionSection imageUrl="./images/CareeerFeatures.png" data={CareerValueProposition} btn={false} />


            <div className="max-w-1440 flex flex-col p-5 md:px-11 md:py-6 xl:px-22 xl:py-13 gap-[30px] text-white">
                <h2 className="font-poppins text-4xl font-bold text-center text-white">We’re creating a future full of opportunities</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 text-white gap-[30px]">
                    <div className="flex flex-col gap-[30px] items-center justify-center h-[539px] rounded-xl bg-blend-overlay bg-[#060606]/80 bg-[url('./images/Careersbannerbg1.png')] bg-cover bg-no-repeat bg-center">
                        <h3 className="font-poppins font-bold text-[22px] text-center">Our Values and Culture</h3>
                        <p className="text-base font-normal font-poppins text-center">
                            Find out how we co-create an open and inspiring culture based on strong values that matter most to us
                        </p>
                        <Button className="py-2.5 px-6 rounded-md bg-primary font-bold text-[22px] font-poppins h-14">
                            Learn More
                        </Button>
                    </div>
                    <div className="flex flex-col gap-[30px] items-center justify-center h-[539px] rounded-xl bg-blend-overlay bg-[#060606]/30 bg-[url('./images/Careersbannerbg2.png')] bg-cover bg-no-repeat bg-center">
                        <h3 className="font-poppins font-bold text-[22px] text-center">Learning, Development and Well-being</h3>
                        <p className="text-base font-normal font-poppins text-center">
                            Explore a wide range of development opportunities, knowledge-sharing programs, and initiatives supporting well-being, including work-life balance
                        </p>
                        <Button className="py-2.5 px-6 rounded-md bg-primary font-bold text-[22px] font-poppins h-14">
                            Explore initiatives
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers