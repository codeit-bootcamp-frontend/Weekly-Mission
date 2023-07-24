import classNames from "classnames/bind";
import Modal from "./Modal";
import Image from "next/image";
import styles from "@/styles/ModalShare.module.css";

interface Props {
  folderName: string;
  onClose: (isOpen: boolean) => void;
}

const cx = classNames.bind(styles);

export default function ModalShare({ folderName, onClose }: Props) {
  return (
    <Modal title="폴더 공유" onClose={onClose}>
      <p className={cx("folder-title")}>{folderName}</p>
      <div className={cx("share-box")}>
        <button className={cx("share-content")} type="button" onClick={() => console.log("카카오톡 공유")}>
          <Image src="/images/share_kakao.svg" alt="카카오톡" width={42} height={42} />
          <p className={cx("share-name")}>카카오톡</p>
        </button>
        <button className={cx("share-content")} type="button" onClick={() => console.log("페이스북 공유")}>
          <Image src="/images/share_facebook.svg" alt="페이스북" width={42} height={42} />
          <p className={cx("share-name")}>페이스북</p>
        </button>
        <button className={cx("share-content")} type="button" onClick={() => console.log("링크 공유")}>
          <Image src="/images/share_link.svg" alt="링크 공유" width={42} height={42} />
          <p className={cx("share-name")}>링크 복사</p>
        </button>
      </div>
    </Modal>
  );
}
