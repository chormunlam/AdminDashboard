import { useMutation,  useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient=useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => { 
      console.log(user);
      queryClient.setQueryData(['user'], user.user)//this allow us to set some data to react query cache
      navigate("/home", {replace: true});
    },
    onError: (err) => { 
      console.log("ERROR", err);
      toast.error("Provided email or password is incorrect"); 
    }
  });

  return { login, isLoading };
}
