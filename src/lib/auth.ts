import { queryOptions } from "@tanstack/react-query";
import { AUTH } from "@/constants/query/auth";

const getUser = async () => {
  return { id: "123", name: "John Doe" };
};

const getUserQueryOptions = () => {
  return queryOptions({
    queryKey: [AUTH.USER_QUERY_KEY],
    queryFn: getUser,
  });
};

export { getUser, getUserQueryOptions };
