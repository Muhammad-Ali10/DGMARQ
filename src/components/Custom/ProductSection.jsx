import {
    useQuery,
} from '@tanstack/react-query'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"

import { Link } from 'react-router-dom'
const ProductSection = ({ data }) => {
   
    return (
        <Link to={`/product-details/${data?._id}`}  >
            <Card className="w-[196px] flex flex-col bg-[#041536] p-4 rounded-21 border-0 text-white font-poppins gap-2.5 box-border">
                <img
                    src={data?.images[0]}
                    alt={data?.title}
                    className="size-[166px] rounded-2xl"
                />
                <CardHeader className="p-0">
                    <CardTitle className="text-sm font-semibold -tracking-normal w-[166px] truncate">
                        {data?.title}
                    </CardTitle>
                    <span className="text-sm font-normal -tracking-normal">
                        Microsoft Store
                    </span>
                    <p className="text-sm font-normal -tracking-normal">
                        Key <span className="font-bold">Global</span>
                    </p>
                </CardHeader>
                <CardContent className="flex fle-row justify-between items-center w-full p-0">
                    <p className="text-sm font-bold">
                        {data?.discountPrice} &nbsp;
                        <span className="font-normal uppercase">USD</span>
                    </p>
                    <h3 className="text-sm font-semibold px-1 py-0.5 bg-primary rounded-[6px]">
                        {(((data?.actualPrice - data?.discountPrice) / data?.actualPrice) * 100).toFixed(0)}%
                    </h3>
                </CardContent>
                <CardFooter className="p-0">
                    <del className="text-sm font-normal uppercase">
                        {data?.actualPrice} usd
                    </del>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ProductSection
