import {useRef} from "react"
import { PhotosAndVideosIcon } from "../../../assets/svg";
import style from "./ChoseMedia.module.scss"

const ChoseMedia = ({
  setMedia,
}: {
  setMedia: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const btnRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(URL.createObjectURL(file));
    }
  }

  return (
    <div className={style.modalWrapper}>
      <header>Create new post</header>
      <div className={style.actionWrapper}>
        <PhotosAndVideosIcon />
        <p>Drag photos and videos here</p>
        <input
          type="file"
          ref={btnRef}
          className={style.input}
          onChange={(e) => handleChange(e)}
          accept="image/*"
        />
        <button
          className={`${style.btn_search} ${style.btn}`}
          onClick={() => btnRef?.current?.click()}
        >
          Select from computer
        </button>
      </div>
    </div>
  );
};

export default ChoseMedia;
