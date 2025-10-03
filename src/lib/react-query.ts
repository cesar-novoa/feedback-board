import { DefaultOptions } from "@tanstack/react-query";

const QueryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60, // 5 minutes
  },
} satisfies DefaultOptions;

type QueryConfigType<T extends (...args: any[]) => any> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;

export { QueryConfig, type QueryConfigType };
