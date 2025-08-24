import ProductCardVertical from "@/components/Custom/ProductCardVertical"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CirclePlus, CircleEqual } from 'lucide-react';
import { useBundleDealsQuery } from "@/hooks/useHomeQuery";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const BundleDeals = () => {
    const dispatch = useDispatch();
    const { data, isPending, isError } = useBundleDealsQuery();
    const Dealproduct = data?.data || [];

    const ApprovedProducts = useMemo(() => {
        return Dealproduct.filter(item => item.status === "approved");
    }, [Dealproduct]);

    if (isPending) return <p className="text-white">Loading...</p>;
    if (isError) return <p className="text-red-500">Error fetching deals</p>;
  const handleAddToCart = (products) => {
    products.forEach((product) => {
      dispatch(
        addToCart({
          _id: product._id,
          image: product.images[0],
          description: product.description,
          title: product.title,
          quantity: 1,
          price: product.discountPrice,
        })
      );
    });
    toast.success("Items added to cart successfully!");
  };


    return (
        <div className="flex flex-col max-w-1260 w-full text-white font-poppins ">
            <h3 className=" text-4xl -tracking-tight font-semibold text-center">Exclusive bundle deals</h3>
            <p className="text-base font-normal -tracking-tight text-center">Add some funds in a flash and enjoy new games, DLC, and more!</p>

            <div className="flex flex-col gap-10 mt-9 px-5 xl:px-0">
                {ApprovedProducts.map((bundle, index) => {

                    const totalPrice = bundle.productId.reduce((acc, product) => acc + (Number(product.discountPrice) || 0), 0);
                    const totalDiscount = bundle.productId.reduce((acc, product) => acc + (Number(product.actualPrice) || 0), 0);
                    const youSave = totalPrice - totalDiscount;

                    return (
                        <div key={index} className="flex flex-wrap gap-2.5 items-center justify-center lg:justify-between">
                            {bundle.productId.map((product, i) => (
                                <div key={product._id} className="flex items-center gap-2">
                                    <ProductCardVertical
                                        actualPrice={product.actualPrice}
                                        discountPrice={product.discountPrice}
                                        image={product.images[0]}
                                        title={product.title}
                                    />
                                    {i < bundle.productId.length - 1 && <CirclePlus className="text-white" />}
                                </div>
                            ))}
                            <CircleEqual className="text-white" />
                            <Card className="w-[382px] h-[175px] flex flex-col items-center justify-center border-0 p-0 gap-0 bg-[#041536] text-white">
                                <CardHeader className="p-0 w-full">
                                    <span className="text-sm font-normal text-center font-poppins -tracking-tight ">Price</span>
                                    <CardTitle className="text-[34px] font-medium font-poppins text-center">${totalPrice.toFixed(0)}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm font-normal text-center font-poppins -tracking-tight   text-white pb-2">You save: ${youSave.toFixed(0)}</CardDescription>
                                    <CardAction className="bg-primary rounded-md py-0.5 px-1.5 text-sm font-poppins font-semibold text-white m-auto"  onClick={() => handleAddToCart(bundle.productId)}>Add To Cart</CardAction>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BundleDeals;
