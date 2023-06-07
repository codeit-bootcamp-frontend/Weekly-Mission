import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

export default function Error() {
  return (
    <div>
      <p>에러가 발생했습니다</p>
    </div>
  );
}

Error.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
