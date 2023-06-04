"use client";
import { useState } from "react";

import styles from "@components/UpdateLink.module.css";
import DeleteModal from "@layout/DeleteModal";
import UpdateModal from "@layout/UpdateModal";
import ShareModal from "@layout/ShareModal";

const UpdateLink = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const shareModalHander = () => {
    setShareModal(!shareModal);
  };
  const updateModalHander = () => {
    setUpdateModal(!updateModal);
  };

  const modalHandler = () => {
    setDeleteModal(!deleteModal);
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.selected}>전체</p>
      </div>
      <div className={styles.icons}>
        <div onClick={shareModalHander}>
          <img src="/share.svg" alt="공유하기" />
          <span>공유</span>
          {shareModal && (
            <ShareModal
              modal={shareModal}
              modalHandler={shareModalHander}
              title="폴더 공유"
              content="폴더명"
            />
          )}
        </div>
        <div onClick={updateModalHander}>
          <img src="/pen.svg" alt="이름변경" />
          <span>이름 변경</span>
          {updateModal && (
            <UpdateModal
              modal={updateModal}
              modalHandler={updateModalHander}
              content="폴더 이름 변경"
              placeholder="유용한 팁"
            />
          )}
        </div>
        <div onClick={modalHandler}>
          <img src="/delete.svg" alt="삭제" />
          <span>삭제</span>
          {deleteModal && (
            <DeleteModal
              modal={deleteModal}
              modalHandler={modalHandler}
              title="폴더 삭제"
              content="폴더명"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateLink;
