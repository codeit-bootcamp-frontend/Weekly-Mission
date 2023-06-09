import React, { useState, useRef } from "react";

import Input from "@/presentation/Input";
import SubmitButton from "@/presentation/Button/SubmitButton";
import ModalContainer from "@/components/Modals/ModalContainer";

const AddFolerModal = ({ isAddFolderModalOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <ModalContainer
      modalTitle="폴더 추가"
      isOpen={isAddFolderModalOpen}
      onClose={onClose}
    >
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        onSubmit={handleSubmit}
      >
        <Input>
          <input placeholder="내용 추가" />
        </Input>
        <SubmitButton buttonType="blue" buttonText="추가하기" type="submit" />
      </form>
    </ModalContainer>
  );
};

export default AddFolerModal;
