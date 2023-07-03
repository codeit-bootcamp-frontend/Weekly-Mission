import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import SubmitButton from "@/presentation/Button/SubmitButton";
import AddLinkInFolderContent from "@/components/AddLinkInFolderList/AddLinkInFolderContent";

interface AddLinkModalProps {
  isAddLinkModalOpen: boolean;
  onClose: () => void;
  link: string;
  folder_id?: number | null;
  clearInput?: () => void;
}

const AddLinkModal = ({
  isAddLinkModalOpen,
  onClose,
  link,
  folder_id,
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
        folder_id={folder_id}
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
