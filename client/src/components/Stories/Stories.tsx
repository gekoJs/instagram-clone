import style from "./Stories.module.scss";

const Stories = () => {
  return (
    <div className={style.container}>
      {Array.from([0, 1, 2, 3, 4, 5, 6, 7]).map((e) => (
        <div key={e}>
          <StoryPost />
        </div>
      ))}
    </div>
  );
};

const StoryPost = () => {
  return (
    <div className={style.post_container}>
      <div className={style.wrapper_img}>
        <div className={style.post_img}>
          <img
            src="https://www.anmosugoi.com/wp-content/uploads/2023/09/Kanojo-Okarishimasu-Chizuru-Mizuhara-min-11.jpg"
            alt=""
          />
        </div>
      </div>
      <p>user</p>
    </div>
  );
};

export default Stories;
