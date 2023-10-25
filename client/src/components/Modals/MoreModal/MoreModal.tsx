import BookmarkIcon from "../../../assets/svg/BookmarkIcon";
import DarkThemeIcon from "../../../assets/svg/DarkThemeIcon";
import SettingsIcon from "../../../assets/svg/SettingsIcon";
import LogOut from "../../../helpers/LogOut";
import style from "./MoreModal.module.scss";

const MoreModal = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapperBtns}>
        <button>
          <SettingsIcon />
          Settings
        </button>
        <button>
          <BookmarkIcon />
          Saved
        </button>
        <button>
          <DarkThemeIcon />
          Swich appearance
        </button>
      </div>
      <hr />
      <div className={style.wrapperBtns}>
        <button onClick={LogOut}>Log out</button>
      </div>
    </div>
  );
};

export default MoreModal;
