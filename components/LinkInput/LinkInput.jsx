"use client";

import styles from "./LinkInput.module.css";
import Image from "next/image";
import classNames from "classnames/bind";
import SimpleButton from "@/components/SimpleButton/SimpleButton";
import { useState } from "react";
import { postLink } from "@/api/instance";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

function LinkInput() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const addLink = async () => {
    const USERID = "64992eec930d7d6257c06f19";
    await postLink(inputValue, USERID);
    router.refresh();
  };

  return (
    <div className={cx("link-input")}>
      <Image
        src="/assets/link.svg"
        alt="link"
        width={18}
        height={18}
        className={cx("link-icon")}
      />
      <input
        type="text"
        placeholder="링크를 추가해 보세요"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className={cx("button-wrapper")}>
        <SimpleButton content="추가하기" color="blue" handleButton={addLink} />
      </div>
    </div>
  );
}

export default LinkInput;
