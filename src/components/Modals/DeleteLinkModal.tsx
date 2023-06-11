import ModalContainer from "@/components/Modals/ModalContainer";
import SubmitButton from "@/presentation/Button/SubmitButton";

interface DeleteLinkModalProps {
  isDeleteLinkModalOpen: boolean;
  onClose: () => void;
  link: string;
}
const DeleteLinkModal = ({
  isDeleteLinkModalOpen,
  onClose,
  link,
}: DeleteLinkModalProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        <SubmitButton buttonType="red" buttonText="삭제하기" />
      </form>
    </ModalContainer>
  );
};

export default DeleteLinkModal;
