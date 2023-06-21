import CardContainer from "@/components/CardContainer";
import UpdateLink from "@/components/UpdateLink";

const Folder = () => {
  return (
    <>
      <UpdateLink title="전체" />
      {/* @ts-expect-error Async Server Component */}
      <CardContainer />
    </>
  );
};

export default Folder;
