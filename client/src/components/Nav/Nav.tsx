import { HomeIcon, LikeIcon, Logotipo, SearchIcon } from "../../assets/svg";
import BurguerMenuIcon from "../../assets/svg/BurguerMenuIcon";
import style from "./Nav.module.scss";
import IsotipoBWIcon from "../../assets/svg/IsotipoBWIcon";
import useWidth from "../../Hooks/useWidth";

const Nav = () => {
  const { width } = useWidth();
  const breakPoint = width >= 1264;

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
          <button className={`${style.nav_btn} ${style.main_btns}`}>
            {btn.icon}
            {breakPoint && <p>{btn.text}</p>}
          </button>
        ))}
      </div>

      <button className={`${style.nav_btn} ${style.main_btns}`}>
        <BurguerMenuIcon />
        {breakPoint && <p>More</p>}
      </button>
    </div>
  );
};

export default Nav;
