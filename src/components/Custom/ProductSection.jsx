import {
    useQuery,
} from '@tanstack/react-query'
//import { BestSellerApi } from "../../../lib/api/bestsellerapi"
import ProductCardHorizontal from '@/components/Custom/ProductCardHorizontal'


const ProductSection = ({productimage, title, description}) => {
   /* const { isPending, error, data } = useQuery({
        queryKey: ['BestSeller'],
        queryFn: () => BestSellerApi(1, 6)
    })

    const newFavorites = data?.data || [];

  console.log(data)*/
 
    return (
        <div className="flex flex-col items-center max-w-1260 w-full justify-center pt-12 gap-6">
            <div className="flex flex-col text-white font-poppins">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">{title}</h3>
                <p className="text-base font-normal -tracking-tight text-center">{description}</p>
            </div>
            {/*isPending && <div>Loading...</div>*/}
            <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-6 md:gap-[15px]">
                {productimage?.map((product,index) =>
                    <ProductCardHorizontal key={index} productimage={product}/>
                  
                )}
            </div>
        </div>
    )
}

export default ProductSection