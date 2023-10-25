import {
  CommentIcon,
  LikeIcon,
  MoreIcon,
  ShareIcon,
  UnlikeIcon,
} from "../../assets/svg";
import BookmarkIcon from "../../assets/svg/BookmarkIcon";
import style from "./PostCardSkeleton.module.scss";

const PostCardSkeleton = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.wrapper}>
          <div className={style.userImg} />
          <div className={style.userName} />
        </div>
        <MoreIcon />
      </div>

      <div className={style.img} />

      <div className={style.actions}>
        <div className={style.wrapper}>
          <div>
            <UnlikeIcon />
          </div>
          <div className={style.icon2}>
            <CommentIcon />
          </div>
          <div className={style.icon2}>
            <ShareIcon />
          </div>
        </div>

        <div className={style.icon2}>
          <BookmarkIcon />
        </div>
      </div>

      <div className={style.wrapperVert}>
        <div className={style.likes} />
        <div className={style.descriptionWrapper}>
          <div className={style.description} />
          <div className={style.description2} />
        </div>
        <div className={style.comments} />
      </div>
    </div>
  );
};

export default PostCardSkeleton;
