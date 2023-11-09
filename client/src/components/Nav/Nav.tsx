import {
  CreateIcon,
  HomeIcon,
  LikeIcon,
  Logotipo,
  SearchIcon,
} from "../../assets/svg";
import BurguerMenuIcon from "../../assets/svg/BurguerMenuIcon";
import style from "./Nav.module.scss";
import IsotipoBWIcon from "../../assets/svg/IsotipoBWIcon";
import useWidth from "../../Hooks/useWidth";
import MoreModal from "../Modals/MoreModal/MoreModal";
import { useContext } from "react";
import { CurrentWarningContext } from "../../App";
import { stateOpenModals } from "../../layouts/MainLayout/MainLayout";

type Props = {
  openModal: stateOpenModals;
  setOpenModal: React.Dispatch<React.SetStateAction<stateOpenModals>>;
};

const Nav = ({ openModal, setOpenModal }: Props) => {
  const warningContext = useContext(CurrentWarningContext);
  const { width } = useWidth();

  const breakPoint = width >= 1264;

  const mainBtns = [
    {
      icon: <HomeIcon />,
      text: "Home",
      action: warningContext?.handleShowWarning,
    },
    {
      icon: <SearchIcon />,
      text: "Search",
      action: warningContext?.handleShowWarning,
    },

    {
      icon: <LikeIcon />,
      text: "Notifications",
      action: warningContext?.handleShowWarning,
    },
    {
      icon: <CreateIcon />,
      text: "Create",
      action: () =>
        setOpenModal((prev) => ({ ...prev, create: !openModal.create })),
    },
  ];

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
            onClick={btn.action}
          >
            {btn.icon}
            {breakPoint && <p>{btn.text}</p>}
          </button>
        ))}
      </div>

      <div className={style.wrapperMore}>
        {openModal.more && (
          <div
            className={style.modalContainer}
            onMouseLeave={() =>
              setOpenModal((prev) => ({ ...prev, more: false }))
            }
          >
            <MoreModal />
          </div>
        )}
        <button
          className={`${style.nav_btn} ${style.main_btns}`}
          onClick={() =>
            setOpenModal((prev) => ({ ...prev, more: !openModal.more }))
          }
        >
          <BurguerMenuIcon />
          {breakPoint && <p>More</p>}
        </button>
      </div>
    </div>
  );
};

export default Nav;
