import React from "react";
import Header from "@/components/Header";
import { useLayout } from "@/components/Layout/useLayout";
import styles from "./style.module.scss";
interface LayoutComponentInterface {
  children: React.ReactNode;
  title: string;
}
const LayoutComponent = ({ children, title }: LayoutComponentInterface) => {
  const { isDarkTheme, onChangeTheme } = useLayout();
  return (
    <div className={styles.layoutBlock}>
      <Header
        title={title}
        isDarkTheme={isDarkTheme}
        onChangeTheme={onChangeTheme}
      />
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
};
export default LayoutComponent;
