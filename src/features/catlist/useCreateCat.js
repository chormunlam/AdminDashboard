import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCat } from "../../services/apiSpace";

export function useCreatCat() {
  const queryClient = useQueryClient();

  const { mutate: createCat, isLoading: isCreating } = useMutation({
    mutationFn: createEditCat,
    onSuccess: () => {
      toast.success("new cat sucessfully created");
      queryClient.invalidateQueries({ queryKey: ["cat"] });
     // reset(); //only do it when sucess..//from react hook form library
    },
    onError: (err) => toast.error(err.message),
  });

  return {isCreating, createCat}
}
