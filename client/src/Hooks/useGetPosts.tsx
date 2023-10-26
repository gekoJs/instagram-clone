import { useQuery } from "@tanstack/react-query";
import { POSTS } from "../utils/queryKeys";
import { routePosts } from "../utils/routeKeys";
import { dataType } from "../utils/types";

function useGetPosts() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [POSTS],
    queryFn: async () => {
      const data: dataType = await fetch(routePosts)
        .then((resp) => resp.json())
        .then((resp) => resp)
        .catch((err) => err);
      return data;
    },
  });
  return { data, isLoading, isError };
}
export default useGetPosts;
