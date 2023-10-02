import { Footer } from "..";
import style from "./AsideSuggestions.module.scss";

const AsideSuggestions = () => {
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
        {Array.from({ length: 5 }, (v, i) => {
          return (
            <UserTag
              img="https://www.anmosugoi.com/wp-content/uploads/2023/09/Kanojo-Okarishimasu-Chizuru-Mizuhara-min-11.jpg"
              userName="user"
              name={"user" + v + i}
              actionName="Follow"
              action={() => {}}
            />
          );
        })}
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
        onClick={action}
      >
        {actionName}
      </button>
    </div>
  );
};

export default AsideSuggestions;