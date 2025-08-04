
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

const LoadingCard = () => {

    return (
        <Card className="w-[196px] flex flex-col bg-[#041536] p-4 rounded-21 border-0 text-white font-poppins gap-2.5 box-border">
            <Skeleton className="size-[166px] rounded-2xl" />
            <CardHeader className="p-0 space-y-2">
                <Skeleton className="h-4 w-[160px]" />
                <Skeleton className="h-3 w-[100px]" />
                <Skeleton className="h-3 w-[80px]" />
            </CardHeader>
            <CardContent className="flex flex-row justify-between items-center w-full p-0">
                <Skeleton className="h-4 w-[60px]" />
                <Skeleton className="h-4 w-[40px] rounded-[6px]" />
            </CardContent>
            <CardFooter className="p-0">
                <Skeleton className="h-4 w-[70px]" />
            </CardFooter>
        </Card>
    )
}

export default LoadingCard
