import styles from "@/styles/hamburger-menu.module.css";
import { Dispatch, SetStateAction } from "react";

export default function HamburgerMenu({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  const activeClass = active ? styles.active : "";
  return (
    <svg
      className={`${styles.ham} ${styles.hamRotate} ${styles.ham8} ml-auto block size-12 sm:hidden ${activeClass}`}
      viewBox="0 0 100 100"
      onClick={() => setActive((prev: boolean) => !prev)}
    >
      <path
        className={`${styles.line} ${styles.top} ${activeClass} ${active && styles.activeLineColor}`}
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
      />
      <path
        className={`${styles.line} ${styles.middle} ${activeClass}`}
        d="m 30,50 h 40"
      />
      <path
        className={`${styles.line} ${styles.bottom} ${activeClass}`}
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
      />
    </svg>
  );
}
