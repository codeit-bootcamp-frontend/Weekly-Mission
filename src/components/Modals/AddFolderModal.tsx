import Input from "@/presentation/Input";
import SubmitButton from "@/presentation/Button/SubmitButton";
import ModalContainer from "@/components/Modals/ModalContainer";
import { fetchData } from "$/src/utils/fetchData";
import { userId } from "$/src/utils/common.api";
import { useContext, useRef } from "react";
import FolderTabsContext from "$/src/contexts/FolderTabsContext";
import { Folder } from "$/types";
import { useRouter } from "next/navigation";

interface AddFolderModalProps {
  isAddFolderModalOpen: boolean;
  onClose: () => void;
}

const AddFolderModal = ({
  isAddFolderModalOpen,
  onClose,
}: AddFolderModalProps) => {
  const { tabs, setTabs } = useContext(FolderTabsContext);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    if (!InputRef.current) {
      return;
    }
    const res: Folder[] = await fetchData({
      url: "/api/folders",
      method: "POST",
      body: { name: InputRef.current.value, userId: userId },
    });
    router.push(`/folder/${res[0].id}`);
    setTabs((prev) => [...prev, res[0]]);
  };

  const InputRef = useRef<HTMLInputElement>(null);

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
          <input placeholder="내용 추가" ref={InputRef} />
        </Input>
        <SubmitButton buttonType="blue" buttonText="추가하기" />
      </form>
    </ModalContainer>
  );
};

export default AddFolderModal;
