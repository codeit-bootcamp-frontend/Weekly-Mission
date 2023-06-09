import ModalContainer from "@/components/Modals/ModalContainer";
import SubmitButton from "@/presentation/Button/SubmitButton";

const DeleteLinkModal = ({ isDeleteLinkModalOpen, onClose, link }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <ModalContainer
      modalTitle="링크 삭제"
      modalSubTitle={link}
      isOpen={isDeleteLinkModalOpen}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit}>
        <SubmitButton buttonType="red" buttonText="삭제하기" type="submit" />
      </form>
    </ModalContainer>
  );
};

export default DeleteLinkModal;
