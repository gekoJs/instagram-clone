import style from "./Footer.module.scss";

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
  return (
    <div className={style.container}>
      <div className={style.links_wrapper}>
        {links.map((link, i) => (
          <div key={link.text}>
            {i !== 0 && <div className={style.dot} />}
            <a href={link.to} className={style.a}>
              {link.text}
            </a>
          </div>
        ))}
      </div>
      <p>© 2023 INSTANEL FROM DANIEL ROA</p>
    </div>
  );
};

export default Footer;
