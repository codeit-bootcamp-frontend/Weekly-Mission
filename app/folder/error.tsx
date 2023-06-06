"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong! folder 페이지 내부 에러 처리</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
