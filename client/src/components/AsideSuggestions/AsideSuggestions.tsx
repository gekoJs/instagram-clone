import { Footer } from "..";
import { CurrentWarningContext } from "../../layouts/MainLayout/MainLayout";
import style from "./AsideSuggestions.module.scss";
import { useContext } from "react";

const AsideSuggestions = () => {
  const arr = [0, 1, 2, 3, 4];

  return (
    <div className={style.container}>
      <UserTag
        img="https://www.anmosugoi.com/wp-content/uploads/2023/09/Kanojo-Okarishimasu-Chizuru-Mizuhara-min-11.jpg"
        userName="User"
        name="Lorem ipsum"
        actionName="Switch"
        action={() => {}}
      />

      <div className={style.all_suggestions}>
        <h4>Suggested for you</h4>
        <button>See All</button>
      </div>

      <div className={style.users}>
        {arr.map((e) => (
          // <div key={e}>
          <UserTag
            key={e}
            img="https://www.anmosugoi.com/wp-content/uploads/2023/09/Kanojo-Okarishimasu-Chizuru-Mizuhara-min-11.jpg"
            userName="user"
            name={"user" + e}
            actionName="Follow"
            action={() => {}}
          />
          // </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

type UserTagProps = {
  img: string;
  userName: string;
  name: string;
  action: () => void;
  actionName: "Follow" | "Switch";
};

const UserTag = ({ img, userName, name, action, actionName }: UserTagProps) => {
  const warningContext = useContext(CurrentWarningContext);

  return (
    <div className={style.tag_container}>
      <div className={style.wrapper_data}>
        <div className={style.img_wrapper}>
          <img src={img} alt="" />
        </div>

        <div className={style.data_wrapper}>
          <h6>{userName}</h6>
          <p>{name}</p>
        </div>
      </div>

      <button
        className={`${style.btn} ${
          actionName === "Follow" ? `${style.btn_hov}` : ""
        }`}
        onClick={warningContext?.handleShowWarning}
      >
        {actionName}
      </button>
    </div>
  );
};

export default AsideSuggestions;
