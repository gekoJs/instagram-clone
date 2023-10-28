import { HomeIcon, LikeIcon, Logotipo, SearchIcon } from "../../assets/svg";
import BurguerMenuIcon from "../../assets/svg/BurguerMenuIcon";
import style from "./Nav.module.scss";
import IsotipoBWIcon from "../../assets/svg/IsotipoBWIcon";
import useWidth from "../../Hooks/useWidth";
import { useState } from "react";
import MoreModal from "../Modals/MoreModal/MoreModal";
import useShowWarning from "../../Hooks/useShowWarning";
import { useContext } from "react";
import { CurrentWarningContext } from "../../layouts/MainLayout/MainLayout";

const Nav = () => {
  const { width } = useWidth();

  // const { handleShowWarning } = useShowWarning();

  const breakPoint = width >= 1264;

  const [openModal, setOpenModal] = useState(false);

  const mainBtns = [
    { icon: <HomeIcon />, text: "Home", action: () => {} },
    {
      icon: <SearchIcon />,
      text: "Search",
      action: () => {},
    },

    {
      icon: <LikeIcon />,
      text: "Notifications",
      action: () => {},
    },
  ];

  const warningContext = useContext(CurrentWarningContext);

  return (
    <div
      className={`${style.container} ${
        breakPoint ? `${style.container_resp}` : ""
      }`}
    >
      <button className={`${style.nav_btn} ${style.logo}`}>
        {!breakPoint ? <IsotipoBWIcon /> : <Logotipo />}
      </button>

      <div className={style.main_btns_wrapper}>
        {mainBtns.map((btn) => (
          <button
            className={`${style.nav_btn} ${style.main_btns}`}
            key={btn.text}
            onClick={warningContext?.handleShowWarning}
          >
            {btn.icon}
            {breakPoint && <p>{btn.text}</p>}
          </button>
        ))}
      </div>

      <div className={style.wrapperMore}>
        {openModal && (
          <div
            className={style.modalContainer}
            onMouseLeave={() => setOpenModal(false)}
          >
            <MoreModal />
          </div>
        )}
        <button
          className={`${style.nav_btn} ${style.main_btns}`}
          onClick={() => setOpenModal(!openModal)}
        >
          <BurguerMenuIcon />
          {breakPoint && <p>More</p>}
        </button>
      </div>
    </div>
  );
};

export default Nav;
