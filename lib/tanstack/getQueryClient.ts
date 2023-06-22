import { cache } from "react";

import { queryClientOptions } from "@/utils/constants";
import { QueryClient } from "@tanstack/react-query";

const getQueryClient = cache(() => new QueryClient(queryClientOptions));

export default getQueryClient;
