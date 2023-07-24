import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser(){
    const {isLoading, data:user}=useQuery({
        queryKey:['user'],//we set the setData in useLogin, so now we got data in the cache
        queryFn: getCurrentUser,
    });
    
    return {isLoading, user, isAuthenticated: user?.role==='authenticated'};
}