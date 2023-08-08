import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCat as deleteCatApi } from "../../services/apiSpace";
import { toast } from "react-hot-toast";
//this customed hook is to combined 2 hooks query and mutation. 
export function useDeleteCat() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCat } = useMutation({
    mutationFn: deleteCatApi,
    onSuccess: () => {
      toast.success("deleted ");
      queryClient.invalidateQueries({
        queryKey: ["cat"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return{isDeleting, deleteCat};
}
