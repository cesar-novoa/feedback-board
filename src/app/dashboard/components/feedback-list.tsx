"use client";
import { ChevronUp, MessageCircleMore } from "lucide-react";

import { useGetFeedbackList } from "@/app/dashboard/api/get-feedback";
import { formatDate } from "@/utils/format";

function FeedbackList() {
  const feedbackListQuery = useGetFeedbackList();

  if (feedbackListQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        Loading...
      </div>
    );
  }

  const feedbackList = feedbackListQuery.data?.data;

  if (!feedbackList) return null;

  return (
    <div className="flex flex-col h-full p-2">
      {feedbackList.map((item) => (
        <div className="border border-primary p-2" key={item.id}>
          <h2 className="text-md font-bold">{item.title}</h2>
          <p className="line-clamp-2">{item.description}</p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-start gap-4 grow">
              <div className="flex flex-row gap-1 text-lg justify-center items-center">
                <ChevronUp size={24} />
                {item.votes}
              </div>
              <div className="flex flex-row gap-1 text-lg justify-center items-center">
                <MessageCircleMore size={18} />-
              </div>
              <div>{formatDate(item.createdAt)}</div>
            </div>
            <span className="grow text-right font-medium text-success">
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export { FeedbackList };
