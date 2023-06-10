"user client";

import { HydrateProps, Hydrate as RQHydrate } from "@tanstack/react-query";

const QueryHydrate = (props: HydrateProps) => {
  return <RQHydrate {...props} />;
};

export default QueryHydrate;
