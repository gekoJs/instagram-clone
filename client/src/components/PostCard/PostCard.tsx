import { useState, useContext } from "react";
import useChangeTitle from "../../Hooks/useChangeTitle";
import {
  CommentIcon,
  LikeIcon,
  MoreIcon,
  UnlikeIcon,
  ShareIcon,
} from "../../assets/svg";
import BookmarkIcon from "../../assets/svg/BookmarkIcon";
import style from "./PostCard.module.scss";
import { CurrentWarningContext } from "../../App";

const PostCard = () => {
  const warningContext = useContext(CurrentWarningContext);
  useChangeTitle("Instanel");

  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  const buttons = [
    {
      icon: like ? <UnlikeIcon /> : <LikeIcon />,
      className: `${style.btn_svg} ${
        !like ? `${style.like_hov}` : `${style.like}`
      }`,
      action: warningContext?.handleShowWarning,
    },
    {
      icon: <CommentIcon />,
      className: `${style.btn_svg} ${style.comment_hov}`,
      action: warningContext?.handleShowWarning,
    },
    {
      icon: <ShareIcon />,
      className: `${style.btn_svg} ${style.share_hov}`,
      action: warningContext?.handleShowWarning,
    },
  ];
  return (
    <article className={style.container}>
      <div className={style.header}>
        <button
          className={`${style.header_wrapper} ${style.button}`}
          onClick={warningContext?.handleShowWarning}
        >
          <img
            src="https://www.anmosugoi.com/wp-content/uploads/2023/09/Kanojo-Okarishimasu-Chizuru-Mizuhara-min-11.jpg"
            alt=""
            className={style.user_img}
          />
          <h5>usuario</h5>
          <span className={style.dot} />
          <p>20h</p>
        </button>

        <button
          className={style.button}
          onClick={warningContext?.handleShowWarning}
        >
          <MoreIcon />
        </button>
      </div>

      <div className={style.imgPost_wrapper}>
        <img
          className={style.imgPost}
          src="https://www.anmosugoi.com/wp-content/uploads/2023/09/Kanojo-Okarishimasu-Chizuru-Mizuhara-min-11.jpg"
          alt="Foto"
        />
      </div>

      <div className={style.icon_wrapper}>
        <div>
          {buttons.map((e, i) => (
            <button className={e.className} onClick={e.action} key={i}>
              {e.icon}
            </button>
          ))}
        </div>
        <button
          className={`${style.btn_svg} ${
            !saved ? `${style.share_hov}` : `${style.saved}`
          }`}
          onClick={warningContext?.handleShowWarning}
        >
          <BookmarkIcon />
        </button>
      </div>

      <p className={style.likes}>468.543 likes</p>

      <p className={style.history}>
        <button
          className={style.button}
          onClick={warningContext?.handleShowWarning}
        >
          userName
        </button>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <button className={`${style.view_comments} ${style.button}`}>
        View all 245 comments
      </button>

      <form>
        <input
          type="text"
          placeholder="Add a comment..."
          className={style.input}
        />
      </form>
    </article>
  );
};

export default PostCard;
