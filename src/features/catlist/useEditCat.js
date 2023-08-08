import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCat } from "../../services/apiSpace";
import { toast } from "react-hot-toast";

export function useEditCat(){
    const queryClient = useQueryClient();
  
  const { mutate:editCat, isLoading: isEditing } = useMutation({
    mutationFn: ({newCatData, id})=>createEditCat(newCatData, id),
    onSuccess: () => {
      toast.success("cat info sucessfully edited");
      queryClient.invalidateQueries({ queryKey: ["cat"] });
      //reset(); //only do it when sucess..
    },
    onError: (err) => toast.error(err.message),
  });

  return {isEditing, editCat}

}