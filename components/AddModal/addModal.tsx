"use client";

import React, { useEffect } from "react";

import { allowScroll, preventScroll } from "@/lib/modal";

import styles from "./addModal.module.css";
import AddPortalWrapper from "./addPortalWrapper";

interface IAddModal {
  handleClickCloseModal: () => void;
  selectedLinkValue: string;
}

const AddModal = ({ handleClickCloseModal, selectedLinkValue }: IAddModal) => {
  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  return (
    <AddPortalWrapper>
      <div className={styles.modalWrapper} onClick={handleClickCloseModal}>
        <div></div>
      </div>
    </AddPortalWrapper>
  );
};

export default AddModal;
