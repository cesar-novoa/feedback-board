import { queryOptions, useQuery } from "@tanstack/react-query";
import { Meta } from "@/types/api";
import { api } from "@/lib/api-client";
import { QueryConfigType } from "@/lib/react-query";

type Feedback = {
  id: string;
  title: string;
  description: string;
  votes: number;
  createdAt: number;
  status: string;
};

function getFeedbackList({ page }: { page?: number }): Promise<{
  data: Feedback[];
  meta: Meta;
}> {
  return api.get("/feedback", {
    params: {
      page,
    },
  });
}

function getFeedbackListQueryOptions({ page = 1 }: { page?: number } = {}) {
  return queryOptions({
    queryKey: ["feedbackList", { page }],
    queryFn: () => getFeedbackList({ page }),
  });
}

type UseGetFeedbackListOptions = {
  page?: number | undefined;
  queryConfig?: QueryConfigType<typeof getFeedbackListQueryOptions> | undefined;
};
function useGetFeedbackList({
  page,
  queryConfig,
}: UseGetFeedbackListOptions = {}) {
  return useQuery({
    ...getFeedbackListQueryOptions({ page }),
    ...queryConfig,
  });
}

export { getFeedbackList, useGetFeedbackList };
