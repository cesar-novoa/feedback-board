"use client";
import React from "react";
import { FeedbackList } from "./components/feedback-list";

export default function DashboardPage() {
  return (
    <div className="flex h-full align-middle justify-center items-center">
      <FeedbackList />
    </div>
  );
}
