import { useQuery } from "@tanstack/react-query";
import { getCats } from "../../services/apiSpace";

export function useCats() {
  const {
    isLoading,
    data: cats,
    error,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: getCats, //fetch('url')
  });
  return {isLoading, error, cats}
}
