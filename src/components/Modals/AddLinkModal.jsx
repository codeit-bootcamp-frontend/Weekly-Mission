import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import SubmitButton from "@/presentation/Button/SubmitButton";
import AddLinkInFolderContent from "@/components/AddLinkInFolderList/AddLinkInFolderContent";

const AddLinkModal = ({
  isAddLinkModalOpen,
  onClose,
  link,
  tabs,
  clearInput,
}) => {
  const [checkedItemId, setCheckedItemId] = useState(null);

  useEffect(() => {
    setCheckedItemId(null);
  }, [isAddLinkModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkedItemId) return; //TODO: validation 추가
    onClose();
    clearInput();
  };

  return (
    <ModalContainer
      modalTitle="폴더에 추가"
      modalSubTitle={link}
      isOpen={isAddLinkModalOpen}
      onClose={onClose}
    >
      <AddLinkInFolderContent
        tabs={tabs}
        checkedItemId={checkedItemId}
        onCheckedItemId={setCheckedItemId}
      />
      <form onSubmit={handleSubmit}>
        <SubmitButton buttonType="blue" buttonText="추가하기" type="submit" />
      </form>
    </ModalContainer>
  );
};

export default AddLinkModal;
