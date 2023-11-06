import { useContext } from "react";
import { CurrentWarningContext } from "../../../App";
import style from "./CropMedia.module.scss";
import { MultipleMediaIcon, RatioIcon, ZoomIcon } from "../../../assets/svg";

const CropMedia = ({ media }: { media: string | undefined }) => {
  const warningContext = useContext(CurrentWarningContext);
  return (
    <div className={`${style.actionWrapper}`}>
      <img src={media} alt="" className={style.img} />

      <div className={style.imgActionsWrapper}>
        <div>
          <button
            className={`${style.btn}`}
            onClick={warningContext?.handleShowWarning}
          >
            <RatioIcon />
          </button>

          <button
            className={`${style.btn}`}
            onClick={warningContext?.handleShowWarning}
          >
            <ZoomIcon />
          </button>
        </div>

        <button
          className={`${style.btn}`}
          onClick={warningContext?.handleShowWarning}
        >
          <MultipleMediaIcon />
        </button>
      </div>
    </div>
  );
};

export default CropMedia;
