import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import { Link } from "react-router-dom"


const ProductCardVertical = ({ image, actualPrice, discountPrice, title, url }) => {


console.log(url)
    return (
        <Link to={`/product-details/${url}`}  >
            <Card className=" w-[382px] flex flex-1 flex-row  items-start md:items-center bg-[#041536] p-4 rounded-21 border-0 text-white font-poppins gap-2.5 box-border">

                <img src={image} className="w-[150px] h-[150px] rounded-2xl" />
                <div className="w-full md:max-w-[175px]">
                    <CardHeader className="p-0 text-start">
                        <CardTitle className="text-sm font-semibold -tracking-normal w-[186px] truncate">{title}</CardTitle>
                        <span className="text-sm font-normal -tracking-normal ">Microsoft Store</span>
                        <p className="text-sm font-normal -tracking-normal">Key <span className="font-bold">GLOBAL</span></p>
                    </CardHeader>
                    <CardContent className="flex fle-row justify-between items-center w-full p-0">
                        <p className="text-sm font-bold">{discountPrice} &nbsp;<span className="font-normal uppercase">USD
                        </span></p>
                        <h3 className="text-sm font-semibold px-1 py-0.5 bg-primary rounded-[6px]">-{(((actualPrice - discountPrice) / actualPrice) * 100).toFixed(0)}%</h3>
                    </CardContent>
                    <CardFooter className="p-0">
                        <del className="text-sm font-normal uppercase">{actualPrice} usd</del>
                    </CardFooter>
                </div>

            </Card>
        </Link>
    )
}

export default ProductCardVertical