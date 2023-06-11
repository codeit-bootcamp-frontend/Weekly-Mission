import DefaultLayout from "@/layouts/DefaultLayout";

const Error: React.FC & {
  getLayout: (page: JSX.Element) => JSX.Element;
} = () => {
  return (
    <div>
      <p>에러가 발생했습니다</p>
    </div>
  );
};

Error.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Error;
