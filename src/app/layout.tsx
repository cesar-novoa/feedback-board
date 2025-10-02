import React from "react";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUserQueryOptions } from "@/lib/auth";

import { AppProvider } from "./provider";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feedback Board",
  description: "A minimalistic feedback board application by César Nóvoa.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getUserQueryOptions());

  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${inconsolata.variable} antialiased font-sans h-full flex scrollbar`}
      >
        <AppProvider>
          <HydrationBoundary state={dehydratedState}>
            {children}
          </HydrationBoundary>
        </AppProvider>
      </body>
    </html>
  );
}
