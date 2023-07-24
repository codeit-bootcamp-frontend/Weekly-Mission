"use client";

import { changeFolderName, createFolder, getFolder } from "@/api/request/request-folder";
import { getLinks } from "@/api/request/request-link";
import { checkExistEmail, getUser } from "@/api/request/request-user";

export default async function TestPage() {
  const handleClick = async () => {
    // const res = await createFolder("새로운 폴더222");
    const res = await checkExistEmail("nhy990130@gmail.com");

    console.log("요청 결과:", res);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        클릭!
      </button>
    </>
  );
}
