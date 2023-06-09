import React, { useState, useRef } from "react";

import Input from "@/presentation/Input";
import SubmitButton from "@/presentation/Button/SubmitButton";
import ModalContainer from "@/components/Modals/ModalContainer";

const EditFolderModal = ({
  isFolderEditModalOpen,
  onClose,
  currentFolderTitle,
}) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    //TODO : inputRef.current.value 사용해 API 요청으로 변경
  };

  return (
    <ModalContainer
      modalTitle="폴더 이름 변경"
      isOpen={isFolderEditModalOpen}
      onClose={onClose}
    >
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        onSubmit={handleSubmit}
      >
        <Input>
          <input defaultValue={currentFolderTitle} ref={inputRef} />
        </Input>
        <SubmitButton buttonType="blue" buttonText="변경하기" type="submit" />
      </form>
    </ModalContainer>
  );
};

export default EditFolderModal;
