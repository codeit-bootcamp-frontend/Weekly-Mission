import CardsContext from "$/src/contexts/CardsContext";
import { fetchData } from "$/src/utils/fetchData";
import ModalContainer from "@/components/Modals/ModalContainer";
import SubmitButton from "@/presentation/Button/SubmitButton";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface DeleteLinkModalProps {
  id: number;
  isDeleteLinkModalOpen: boolean;
  onClose: () => void;
  link: string;
}
const DeleteLinkModal = ({
  id,
  isDeleteLinkModalOpen,
  onClose,
  link,
}: DeleteLinkModalProps) => {
  const { cards, setCards } = useContext(CardsContext);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();

    await fetchData({
      url: `/api/links/${id}`,
      method: "DELETE",
    });

    setCards((prev) => prev.filter((link) => link.id !== id));
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
