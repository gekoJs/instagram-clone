import { useContext } from "react";
import BookmarkIcon from "../../../assets/svg/BookmarkIcon";
import DarkThemeIcon from "../../../assets/svg/DarkThemeIcon";
import SettingsIcon from "../../../assets/svg/SettingsIcon";
import LogOut from "../../../helpers/LogOut";
import style from "./MoreModal.module.scss";
import { CurrentWarningContext } from "../../../layouts/MainLayout/MainLayout";

const MoreModal = () => {
  const warningContext = useContext(CurrentWarningContext);

  const buttons = [
    {
      name: "Settings",
      icon: <SettingsIcon />,
      action: warningContext?.handleShowWarning,
    },
    {
      name: "Saved",
      icon: <BookmarkIcon />,
      action: warningContext?.handleShowWarning,
    },
    {
      name: "Swich appearance",
      icon: <DarkThemeIcon />,
      action: warningContext?.handleShowWarning,
    },
  ];
  
  return (
    <div className={style.container}>
      <div className={style.wrapperBtns}>
        {buttons.map((e) => (
          <button onClick={e.action}>
            {e.icon}
            {e.name}
          </button>
        ))}
      </div>
      <hr />
      <div className={style.wrapperBtns}>
        <button onClick={LogOut}>Log out</button>
      </div>
    </div>
  );
};

export default MoreModal;
