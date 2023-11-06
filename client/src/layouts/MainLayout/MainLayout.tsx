import { useState, useEffect } from "react";
import { Nav } from "../../components";
import style from "./MainLayout.module.scss";
import CreatePost from "../../components/Modals/CreatePost/CreatePost";

//-----------------------------------------------

type Props = {
  children: React.ReactNode;
};

//-----------------------------------------------

const MainLayout = ({ children }: Props) => {
  const [openModal, setOpenModal] = useState({
    more: false,
    create: false,
  });

  useEffect(() => {
    if (openModal.create) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  return (
    <div className={style.container}>
      <Nav openModal={openModal} setOpenModal={setOpenModal} />
      {children}

      {openModal.create && <CreatePost setOpenModal={setOpenModal} />}
    </div>
  );
};

export default MainLayout;
