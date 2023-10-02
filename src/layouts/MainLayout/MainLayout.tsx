import React from "react";
import { Nav } from "../../components";
import style from "./MainLayout.module.scss";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className={style.container}>
        <Nav />
      {children}
    </div>
  );
};

export default MainLayout;
