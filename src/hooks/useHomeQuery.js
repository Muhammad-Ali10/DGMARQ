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
        queryKey: ['Software', page, limit],
        queryFn: () => CategoryApi(page, limit),
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