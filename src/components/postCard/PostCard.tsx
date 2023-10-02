import { useState } from "react";
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

const PostCard = () => {
  useChangeTitle("Instanel");

  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className={style.container}>
      <div className={style.header}>
        <div className={style.header_wrapper}>
          <img
            src="https://www.anmosugoi.com/wp-content/uploads/2023/09/Kanojo-Okarishimasu-Chizuru-Mizuhara-min-11.jpg"
            alt=""
            className={style.user_img}
          />
          <h5>usuario</h5>
          <span className={style.dot} />
          <p>20h</p>
        </div>

        <MoreIcon />
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
          <button
            className={`${style.btn_svg} ${!like ? `${style.like_hov}` : ""}`}
            onClick={() => setLike((prev) => !prev)}
          >
            {like ? <UnlikeIcon /> : <LikeIcon />}
          </button>

          <button className={`${style.btn_svg} ${style.comment_hov}`}>
            <CommentIcon />
          </button>

          <button className={`${style.btn_svg} ${style.share_hov}`}>
            <ShareIcon />
          </button>
        </div>
        <button
          className={`${style.btn_svg} ${!saved ? `${style.share_hov}` : ""}`}
          onClick={() => setSaved((prev) => !prev)}
        >
          <BookmarkIcon />
        </button>
      </div>

      <p className={style.likes}>468.543 likes</p>

      <p className={style.history}>
        <span>userName</span> Lorem ipsum dolor sit amet consectetur,
        adipisicing elit.
      </p>

      <p className={style.view_comments}>View all 245 comments</p>

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
