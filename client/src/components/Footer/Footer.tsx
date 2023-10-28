import { CurrentWarningContext } from "../../layouts/MainLayout/MainLayout";
import style from "./Footer.module.scss";
import { useContext } from "react";

const links = [
  { text: "About", to: "" },
  { text: "Help", to: "" },
  { text: "Press", to: "" },
  { text: "API", to: "" },
  { text: "Jobs" },
  { text: "Pravicy" },
  { text: "Terms", to: "" },
  { text: "locations", to: "" },
  { text: "Language", to: "" },
  { text: "Meta verified", to: "" },
];

const Footer = () => {
  const warningContext = useContext(CurrentWarningContext);

  return (
    <div className={style.container}>
      <div className={style.links_wrapper}>
        {links.map((link, i) => (
          <button onClick={warningContext?.handleShowWarning} key={link.text}>
            {i !== 0 && <div className={style.dot} />}
            <a  className={style.a}>
              {link.text}
            </a>
          </button>
        ))}
      </div>
      <p>© 2023 INSTANEL FROM DANIEL ROA</p>
    </div>
  );
};

export default Footer;
