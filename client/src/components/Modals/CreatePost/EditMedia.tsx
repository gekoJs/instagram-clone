import style from "./EditMedia.module.scss";
import ballon from "../../../assets/images/hotairballoon.jpg";
import { useContext, useState } from "react";
import { CurrentWarningContext } from "../../../App";

const EditMedia = ({ media }: { media: string | undefined }) => {
  const [btnActive, setBtnActive] = useState("filters");

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setBtnActive(e.currentTarget.name);
  }
  const componentToShow = {
    filters: <Filters />,
    adjustments: <Adjustments />,
  };
  return (
    <div className={`${style.actionWrapper} ${style.imgContainer}`}>
      <img src={media} alt="" className={style.img} />

      <div>
        <div className={style.mainBtnsConfg}>
          <button
            className={
              btnActive === "filters"
                ? `${style.btn} ${style.active}`
                : style.btn
            }
            onClick={(e) => handleClick(e)}
            name="filters"
          >
            Filters
          </button>
          <button
            className={
              btnActive === "adjustments"
                ? `${style.btn} ${style.active}`
                : style.btn
            }
            onClick={handleClick}
            name="adjustments"
          >
            Adjustmens
          </button>
        </div>

        {componentToShow[btnActive as keyof typeof componentToShow]}
      </div>
    </div>
  );
};

const Filters = () => {
  const warningContext = useContext(CurrentWarningContext);

  const filters = [
    "aden",
    "aden",
    "aden",
    "aden",
    "aden",
    "aden",
    "aden",
    "aden",
    "aden",
    "aden",
    "aden",
    "aden",
  ];
  return (
    <div className={style.filtersMedia}>
      {filters.map((e, i) => (
        <button
          onClick={warningContext?.handleShowWarning}
          className={`${style.btn} ${style.filterBtnWrapper}`}
          key={e + i}
        >
          <div className={style.imgWrapper}>
            <img src={ballon} alt="" />
          </div>
          <p>{e}</p>
        </button>
      ))}
    </div>
  );
};

const Adjustments = () => {
  const [values, setValues] = useState({
    Brightness: 0,
    Contrast: 0,
    Fade: 0,
    Saturation: 0,
    Temperature: 0,
    Vignette: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleReset(e: React.MouseEvent<HTMLButtonElement>) {
    const name = e.currentTarget.name;

    if (values[name as keyof object] !== 0) {
      setValues((prev) => ({
        ...prev,
        [name]: 0,
      }));
    }
    return;
  }

  return (
    <div className={style.adjustmentsContainer}>
      {Object.keys(values).map((e) => (
        <div className={style.wrapperAdjust} key={e}>
          <div className={style.wrappers}>
            <label htmlFor={e}>{e}</label>
            <button
              onClick={handleReset}
              className={`${style.btn} ${style.btn_reset}`}
              name={e}
            >
              Reset
            </button>
          </div>
          <div className={style.wrappers}>
            <input
              type="range"
              id={e}
              min={-100}
              max={100}
              onChange={handleChange}
              value={values[e as keyof object]}
            />
            <span>{values[e as keyof object]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default EditMedia;
