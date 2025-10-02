"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { queryConfig } from "@/lib/react-query";

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export { AppProvider };
