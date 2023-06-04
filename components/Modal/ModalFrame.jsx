"use client";

import classNames from "classnames/bind";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "./ModalFrame.module.scss";
import ModalPortal from "./ModalPortal";

import closeImage from "@/public/images/close.svg";

const cx = classNames.bind(styles);

export default function ModalFrame({ children }) {
  return (
    <ModalPortal>
      <div className={cx("overlay")}>
        <div className={cx("container")}>
          <button className={cx("closeButton")}>
            <Image width={24} height={24} src={closeImage} alt="close" />
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}

ModalFrame.propTypes = {
  children: PropTypes.node.isRequired,
};
