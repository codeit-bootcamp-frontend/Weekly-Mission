"use client";

import React from "react";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>
        Something went wrong! 메인페이지 혹은 각 페이지의 레이아웃에서 발생하는
        에러 처리
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
