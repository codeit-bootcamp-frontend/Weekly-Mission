import React, { useContext, useRef } from "react";

import Input from "@/presentation/Input";
import SubmitButton from "@/presentation/Button/SubmitButton";
import ModalContainer from "@/components/Modals/ModalContainer";
import { fetchData } from "$/src/utils/fetchData";
import FolderTabsContext from "$/src/contexts/FolderTabsContext";
import { userId } from "$/src/utils/common.api";

interface EditFolderModalProps {
  isFolderEditModalOpen: boolean;
  onClose: () => void;
  currentFolderTitle: string;
  currentTabId?: number;
}

const EditFolderModal = ({
  currentTabId,
  isFolderEditModalOpen,
  onClose,
  currentFolderTitle,
}: EditFolderModalProps) => {
  const { tabs, setTabs } = useContext(FolderTabsContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();

    //TODO : inputRef.current.value 사용해 API 요청으로 변경
    if (!inputRef.current) {
      return;
    }

    const updatedName = inputRef.current.value;
    const updatedTabs = tabs.map((tab) => {
      if (tab.id === currentTabId) {
        return { ...tab, name: updatedName };
      }
      return tab;
    });

    await fetchData({
      url: `/api/folders/${currentTabId}`,
      method: "PUT",
      body: { name: updatedName, userId: userId },
    });

    setTabs(updatedTabs);
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
        <SubmitButton buttonType="blue" buttonText="변경하기" />
      </form>
    </ModalContainer>
  );
};

export default EditFolderModal;
