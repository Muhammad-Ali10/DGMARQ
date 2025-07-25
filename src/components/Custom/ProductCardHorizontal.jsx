import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"



const ProductCardHorizontal = ({ productimage }) => {

    return (
        <Card className="w-[196px] flex flex-col bg-[#041536] p-4 rounded-21 border-0 text-white font-poppins gap-2.5 box-border">

            <img src={productimage} className="size-[166px] rounded-2xl" />

            <CardHeader className="p-0">
                <CardTitle className={`text-sm font-semibold -tracking-normal w-[166px] truncate`}>Minecraft: Java & Bedrock Edition Java & Bedrock Edition PC</CardTitle>
                <span className="text-sm font-normal -tracking-normal ">Microsoft Store</span>
                <p className="text-sm font-normal -tracking-normal">Key <span className="font-bold">GLOBAL</span></p>
            </CardHeader>
            <CardContent className="flex fle-row justify-between items-center w-full p-0">
                <p className="text-sm font-bold">15.36 &nbsp;<span className="font-normal uppercase">USD
                </span></p>
                <h3 className="text-sm font-semibold px-1 py-0.5 bg-primary rounded-[6px]">-55%</h3>
            </CardContent>
            <CardFooter className="p-0">
                <del className="text-sm font-normal uppercase">34.06 usd</del>
            </CardFooter>
        </Card>
    )
}

export default ProductCardHorizontal
