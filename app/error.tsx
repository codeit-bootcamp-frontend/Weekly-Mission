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
      <h2>
        Something went wrong! shared 페이지의 레이아웃 ~ 홈페이지에서 발생하는
        에러들 처리
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
