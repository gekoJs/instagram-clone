import { AllCards, AsideSuggestions, Stories } from "../../components";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.container}>
      <div>
        <Stories />
        <AllCards />
      </div>
      <AsideSuggestions />
    </div>
  );
};

export default Home;
