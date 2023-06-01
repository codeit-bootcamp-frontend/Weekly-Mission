"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong! shared 페이지 내부 에러 담당</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
