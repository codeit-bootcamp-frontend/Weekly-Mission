import React from "react";

import InputBox from "@/presentation/Input";
import SubmitButton from "@/presentation/Button/SubmitButton";
import ModalContainer from "@/components/Modals/ModalContainer";

const EditFolderModal = ({ isFolderEditModalOpen, onClose }) => {
  return (
    <ModalContainer
      modalTitle="폴더 이름 변경"
      isOpen={isFolderEditModalOpen}
      onClose={onClose}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <InputBox />
        <SubmitButton buttonType="blue" buttonText="변경하기" />
      </div>
    </ModalContainer>
  );
};

export default EditFolderModal;
