import { HomeIcon, LikeIcon, Logotipo, SearchIcon } from "../../assets/svg";
import BurguerMenuIcon from "../../assets/svg/BurguerMenuIcon";
import style from "./Nav.module.scss";

const Nav = () => {
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
    <div className={style.container}>
      <button className={`${style.nav_btn} ${style.logo}`}>
        <Logotipo />
      </button>

      <div className={style.main_btns_wrapper}>
        {mainBtns.map((btn) => (
          <button className={`${style.nav_btn} ${style.main_btns}`}>
            {btn.icon}
            <p>{btn.text}</p>
          </button>
        ))}
      </div>

      <button className={`${style.nav_btn} ${style.main_btns}`}>
        <BurguerMenuIcon />
        <p>
          More
        </p>
      </button>
    </div>
  );
};

export default Nav;
