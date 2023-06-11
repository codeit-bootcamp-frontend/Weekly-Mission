import DefaultLayout from "@/layouts/DefaultLayout";
import { ReactElement } from "react";

const Error = () => {
  return (
    <div>
      <p>에러가 발생했습니다</p>
    </div>
  );
};

Error.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Error;
