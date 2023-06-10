"use client";

import { useState } from "react";

import { queryClientOptions } from "@/utils/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
