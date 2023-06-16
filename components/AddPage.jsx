// "use client";
// import { useState } from "react";
import AddPageChip from "./AddPageChip";
import styles from "@components/AddPage.module.css";
import UpdateModal from "@layout/UpdateModal";
// import useHttp from "@hooks/useHttp";
import FolderLink from "@components/folderLink/FolderLink";

const buttonChip = [
  { chip: "전체", link: "folder" },
  { chip: "⭐️ 즐겨찾기", link: "folder/favorites" },
  { chip: "코딩 팁", link: "folder/1" },
  { chip: "채용 사이트", link: "folder/2" },
  { chip: "유용한 글", link: "folder/3" },
  { chip: "나만의 장소", link: "folder/4" },
];

const AddPage = () => {
  // const [isSelected, setIsSelected] = useState("전체");
  // const [modal, setModal] = useState(false);
  // const modalHandler = () => {
  //   setModal(!modal);
  // };

  // const { responseData, isLoading, error } = useHttp({
  //   url: "/users/1/folders",
  // });
  // console.log(responseData);

  return (
    <div className={styles.page}>
      {/* <div className={styles["chip-box"]}>
        {responseData?.data?.map((chip) => (
          <AddPageChip
            key={chip.id}
            name={chip.name}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        ))}
      </div> */}
      <FolderLink />
      <div>
        <button
          className={styles["add-folder"]}
          type="button"
          // onClick={modalHandler}
        >
          폴더 추가 +
        </button>
      </div>
      {/* {modal && (
        <UpdateModal
          modal={modal}
          modalHandler={modalHandler}
          content="폴더 추가"
          placeholder="내용 입력"
        />
      )} */}
    </div>
  );
};

export default AddPage;
