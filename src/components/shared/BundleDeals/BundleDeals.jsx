
import ProductCardVertical from "@/components/Custom/ProductCardVertical"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CirclePlus, CircleEqual } from 'lucide-react';

const BundleDeals = () => {
    return (
 
            <div className="flex flex-col max-w-1260 w-full text-white font-poppins ">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">Exclusive bundle deals</h3>
                <p className="text-base font-normal -tracking-tight text-center">Add some funds in a flash and enjoy new games, DLC, and more!</p>
                <div className="flex flex-col md:flex-row justify-between items-center mt-9">
                    <ProductCardVertical productimage="/images/trandingimage.png" />
                    <CirclePlus className="text-white" />
                    <ProductCardVertical productimage="/images/trandingimage.png" />
                    <CircleEqual className="text-white" />
                    <Card className="w-[382px] h-[175px] flex flex-col items-center justify-center border-0 p-0 gap-0 bg-[#041536] text-white">
                        <CardHeader className="p-0 w-full">
                            <span className="text-sm font-normal text-center font-poppins -tracking-tight ">Price</span>
                            <CardTitle className="text-[34px] font-medium font-poppins text-center">$25.14</CardTitle>
                        </CardHeader>
                      <CardContent>
                          <CardDescription className="text-sm font-normal text-center font-poppins -tracking-tight   text-white pb-2">You save: $ 30.93</CardDescription>
                        <CardAction className="bg-primary rounded-md py-0.5 px-1.5 text-sm font-poppins font-semibold text-white m-auto">Add To Cart</CardAction>
                      </CardContent>
                    </Card>
                </div>
            </div>

    )
}

export default BundleDeals