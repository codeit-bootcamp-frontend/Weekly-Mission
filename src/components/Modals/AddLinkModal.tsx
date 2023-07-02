import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import SubmitButton from "@/presentation/Button/SubmitButton";
import AddLinkInFolderContent from "@/components/AddLinkInFolderList/AddLinkInFolderContent";
import { Folder } from "$/types";

interface AddLinkModalProps {
  isAddLinkModalOpen: boolean;
  onClose: () => void;
  link: string;
  clearInput?: () => void;
}

const AddLinkModal = ({
  isAddLinkModalOpen,
  onClose,
  link,
  clearInput,
}: AddLinkModalProps) => {
  const [checkedItemId, setCheckedItemId] = useState<number | null>(null);

  useEffect(() => {
    setCheckedItemId(null);
  }, [isAddLinkModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkedItemId) return; // TODO: Add validation
    onClose();
    if (clearInput) {
      clearInput();
    }
  };

  return (
    <ModalContainer
      modalTitle="폴더에 추가"
      modalSubTitle={link}
      isOpen={isAddLinkModalOpen}
      onClose={onClose}
    >
      <AddLinkInFolderContent
        checkedItemId={checkedItemId}
        onCheckedItemId={setCheckedItemId}
      />
      <form onSubmit={handleSubmit}>
        <SubmitButton buttonType="blue" buttonText="추가하기" />
      </form>
    </ModalContainer>
  );
};

export default AddLinkModal;
