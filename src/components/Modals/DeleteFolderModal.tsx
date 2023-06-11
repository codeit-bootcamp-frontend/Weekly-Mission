import React from "react";
import ModalContainer from "@/components/Modals/ModalContainer";
import SubmitButton from "@/presentation/Button/SubmitButton";

interface DeleteFolderModalProps {
  isFolderDeleteModalOpen: boolean;
  onClose: () => void;
  currentFolderTitle: string;
}

const DeleteFolderModal = ({
  isFolderDeleteModalOpen,
  onClose,
  currentFolderTitle,
}: DeleteFolderModalProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <ModalContainer
      modalTitle="폴더 삭제"
      modalSubTitle={currentFolderTitle}
      isOpen={isFolderDeleteModalOpen}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit}>
        <SubmitButton buttonType="red" buttonText="삭제하기" />
      </form>
    </ModalContainer>
  );
};

export default DeleteFolderModal;
