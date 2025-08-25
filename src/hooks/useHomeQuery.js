import { useQuery } from "@tanstack/react-query";
import {
    UpcommingGamesApi,
    BestSellerApi,
    CategoryApi,
    ProductByKey,
    FlashDealsApi,
    BundleDealsApi,
    GameAccountApi,
    WishlistApi
} from "@/lib/api/Api";


export const useBestSellerQuery = (page = 1, limit = 6) => {
    return useQuery({
        queryKey: ['BestSeller', page, limit],
        queryFn: () => BestSellerApi(page, limit),
    });
};

export const useUpcommingGamesQuery = () => {
    return useQuery({
        queryKey: ['UpcommingGames'],
        queryFn: UpcommingGamesApi,
    });
};

export const useCategoryQuery = (page = 1, limit = 6) => {
    return useQuery({
        queryKey: ["Software", page, limit],
        queryFn: () => CategoryApi(page, limit),

        // ✅ Prevent multiple calls
        refetchOnWindowFocus: false,  // don’t refetch when window is focused
        refetchOnReconnect: false,    // don’t refetch when internet reconnects
        refetchOnMount: false,        // don’t refetch on component remount
        retry: 1,                     // retry only once if fails
        staleTime: 1000 * 60 * 5,     // cache result for 5 minutes
        cacheTime: 1000 * 60 * 10,    // keep in cache for 10 minutes
    });
};



export const useProductByKeyQuery = (page = 1, limit = 6) => {
    return useQuery({
        queryKey: ['ProductByKey', page, limit],
        queryFn: () => ProductByKey(page, limit)
    })
}

export const useFlashDealsQuery = () => {
    return useQuery({
        queryKey: ['FlashDeals'],
        queryFn: FlashDealsApi,
    });
};

export const useBundleDealsQuery = () => {
    return useQuery({
        queryKey: ['BundleDeals'],
        queryFn: BundleDealsApi,
    });
};

export const useGameAccountQuery = (page = 1, limit = 6) => {
    return useQuery({
        queryKey: ['GameAccount'],
        queryFn: () => GameAccountApi(page, limit),
    })
}

export const useWishlistQuery = (page = 1, limit = 6) => {
    return useQuery({
        queryKey: ['Wishlist'],
        queryFn: () => WishlistApi(page, limit),
    })
}   