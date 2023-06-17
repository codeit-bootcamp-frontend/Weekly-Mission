"use client";

import Link from "next/link";
import PropTypes from "prop-types";

export default function GlobalError({ error, reset }) {
  return (
    <>
      <h2>Error: {error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
      <div>
        <Link href="/">홈으로 돌아가기</Link>
      </div>
    </>
  );
}

GlobalError.propTypes = {
  error: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};
