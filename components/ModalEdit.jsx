import Modal from "./Modal";

export default function ModalEdit({ folderName = "즐겨찾기", onClose }) {
  return (
    <Modal title="폴더 이름 변경" onClose={onClose}>
      <input type="text" placeholder={folderName} />
      <button type="button">변경하기</button>
    </Modal>
  );
}
// 모달의 onClose 어떻게 할지 생각하기
