"use client";

import PropTypes from "prop-types";

export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Error: {error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};
