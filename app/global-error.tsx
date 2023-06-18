"use client";

import Link from "next/link";

import { ErrorProps } from "@/types";

export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <html>
      <body>
        <h2>Error: {error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
        <div>
          <Link href="/">홈으로 돌아가기</Link>
        </div>
      </body>
    </html>
  );
}
