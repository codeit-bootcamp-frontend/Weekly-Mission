import { useContext, useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import SubmitButton from "@/presentation/Button/SubmitButton";
import AddLinkInFolderContent from "@/components/AddLinkInFolderList/AddLinkInFolderContent";
import { Link } from "$/types";
import { userId } from "$/src/utils/common.api";
import { fetchData } from "$/src/utils/fetchData";
import { useRouter } from "next/navigation";
import CardsContext from "$/src/contexts/CardsContext";

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
  const { cards, setCards } = useContext(CardsContext);

  const router = useRouter();

  useEffect(() => {
    setCheckedItemId(null);
  }, [isAddLinkModalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkedItemId) return; // TODO: Add validation
    onClose();
    if (clearInput) {
      clearInput();
    }
    const res: Link[] = await fetchData({
      url: "/api/links",
      method: "POST",
      body: { url: link, userId: userId, folderId: checkedItemId },
    });
    router.push(`/folder/${checkedItemId}`);
    setCards((prev) => [...prev, res[0]]);
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
