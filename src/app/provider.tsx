"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { QueryConfig } from "@/lib/react-query";
import { Notifications } from "@/components/ui/notification";

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: QueryConfig,
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Notifications />
      {children}
    </QueryClientProvider>
  );
}

export { AppProvider };
