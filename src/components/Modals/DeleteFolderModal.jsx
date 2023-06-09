import ModalContainer from "@/components/Modals/ModalContainer";
import InputBox from "@/presentation/Input";
import SubmitButton from "@/presentation/Button/SubmitButton";
const DeleteFolderModal = ({
  isFolderDeleteModalOpen,
  onClose,
  currentFolderTitle,
}) => {
  const handleSubmit = (e) => {
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
        <SubmitButton buttonType="red" buttonText="삭제하기" type="submit" />
      </form>
    </ModalContainer>
  );
};

export default DeleteFolderModal;
