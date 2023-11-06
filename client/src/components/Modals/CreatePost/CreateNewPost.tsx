import style from "./CreateNewPost.module.scss";
import { EmojiIcon, UpDownIcon } from "../../../assets/svg";
import LocationIcon from "../../../assets/svg/LocationIcon";
import { useContext, useState } from "react";
import { CurrentWarningContext } from "../../../App";
import Switch from "../../../assets/components/SwitchInput/Switch";

const CreateNewPost = ({ media }: { media: string | undefined }) => {
  const warningContext = useContext(CurrentWarningContext);

  const [dropDown, setDropDown] = useState({
    accessibility: false,
    settings: false,
  });

  const [values, setValues] = useState({
    caption: "",
    location: "",
  });

  const [toggleSwitch, setToggleSwitch] = useState({
    hideLike: false,
    offComments: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const name = e.currentTarget.name;
    const value = e.target.value;

    if (name === "caption" && e.target.value.length >= 2201) {
      const num = value.length - 2200;

      setValues((prev) => ({
        ...prev,
        [name]: value.slice(0, -num),
      }));

      return;
    }

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleDropDown(e: React.MouseEvent<HTMLButtonElement>) {
    const name = e.currentTarget.name;
    setDropDown((prev) => ({
      ...prev,
      [name]: !dropDown[name as keyof object],
    }));
  }
  function handleToggle(e: React.MouseEvent<HTMLButtonElement>) {
    const name = e.currentTarget.name;
    setToggleSwitch((prev) => ({
      ...prev,
      [name]: !toggleSwitch[name as keyof object],
    }));
    warningContext?.handleShowWarning(e);
  }
  return (
    <div className={`${style.actionWrapper} ${style.imgContainer}`}>
      <img src={media} alt="" className={style.img} />

      <div className={style.asideSection}>
        <div className={`${style.wrapperFlex} ${style.profileUser}`}>
          <img
            className={style.profileImg}
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
            }
            alt="User"
          />

          <p>user</p>
        </div>

        <div>
          <textarea
            maxLength={2200}
            value={values.caption}
            onChange={handleChange}
            name="caption"
            placeholder="Add a caption..."
            className={style.textArea}
          />
        </div>

        <div
          className={`${style.wrapperFlex} ${style.spaceBetween} ${style.emojiWrapper}`}
        >
          <button
            className={`${style.btn} ${style.emojiBtn}`}
            onClick={warningContext?.handleShowWarning}
          >
            <EmojiIcon />
          </button>
          <span>{values.caption.length}/2,200</span>
        </div>

        <div className={`${style.wrapperFlex} ${style.locationWrapper}`}>
          <input
            type="text"
            placeholder="Add location"
            onChange={handleChange}
          />
          <LocationIcon />
        </div>

        <button
          className={`${style.btn} ${style.wrapperFlex} ${style.spaceBetween} ${
            style.advancedSettings
          } ${dropDown.accessibility && style.active}`}
          onClick={handleDropDown}
          name="accessibility"
        >
          <p>Accessibility</p>
          <UpDownIcon />
        </button>

        {dropDown.accessibility && (
          <div className={style.accessibilitAct}>
            <p>
              Alt text describes your photos for people with visual impairments.
              Alt text will be automatically created for your photos or you can
              choose to write your own.
            </p>
            <div className={style.inputWrapper}>
              <img src={media} alt="" />
              <input type="text" placeholder="Write Alt text..." />
            </div>
          </div>
        )}

        <button
          className={`${style.btn} ${style.wrapperFlex} ${style.spaceBetween} ${
            style.advancedSettings
          } ${dropDown.settings && style.active}`}
          onClick={handleDropDown}
          name="settings"
        >
          <p>Advanced settings</p>
          <UpDownIcon />
        </button>
        {dropDown.settings && (
          <div className={style.configWrapper}>
            <div>
              <div className={style.wrapperFlexConfgTitle}>
                <p>Hide like and view counts on this post</p>
                <button
                  className={style.btn}
                  onClick={handleToggle}
                  name="hideLike"
                >
                  <Switch active={toggleSwitch.hideLike} />
                </button>
              </div>
              <p className={style.descripConfig}>
                Only you will see the total number of likes and views on this
                post. You can change this later by going to the ··· menu at the
                top of the post. To hide like counts on other people's posts, go
                to your account settings.
              </p>
              <a href="">Learn more</a>
            </div>
            <div>
              <div className={style.wrapperFlexConfgTitle}>
                <p>Turn off commenting</p>
                <button
                  className={style.btn}
                  onClick={handleToggle}
                  name="offComments"
                >
                  <Switch active={toggleSwitch.offComments} />
                </button>
              </div>
              <p className={style.descripConfig}>
                You can change this later by going to the ··· menu at the top of
                your post.
              </p>
              <a href="">Learn more</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNewPost;
