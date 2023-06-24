import Input from "@/presentation/Input";
import SubmitButton from "@/presentation/Button/SubmitButton";
import ModalContainer from "@/components/Modals/ModalContainer";

interface AddFolderModalProps {
  isAddFolderModalOpen: boolean;
  onClose: () => void;
}

const AddFolderModal = ({
  isAddFolderModalOpen,
  onClose,
}: AddFolderModalProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        <SubmitButton buttonType="blue" buttonText="추가하기" />
      </form>
    </ModalContainer>
  );
};

export default AddFolderModal;
