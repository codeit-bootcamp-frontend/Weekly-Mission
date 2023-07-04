import React, { useContext } from "react";
import ModalContainer from "@/components/Modals/ModalContainer";
import SubmitButton from "@/presentation/Button/SubmitButton";
import { fetchData } from "$/src/utils/fetchData";
import FolderTabsContext from "$/src/contexts/FolderTabsContext";
import { useRouter } from "next/navigation";

interface DeleteFolderModalProps {
  isFolderDeleteModalOpen: boolean;
  onClose: () => void;
  currentFolderTitle: string;
  currentTabId?: number;
}

const DeleteFolderModal = ({
  isFolderDeleteModalOpen,
  onClose,
  currentTabId,
  currentFolderTitle,
}: DeleteFolderModalProps) => {
  const { tabs, setTabs } = useContext(FolderTabsContext);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    await fetchData({
      url: `/api/folders/${currentTabId}`,
      method: "DELETE",
    });

    setTabs((prev) => prev.filter((tab) => tab.id !== currentTabId));
    router.push("/folder");
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
