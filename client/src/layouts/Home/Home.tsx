import useWidth from "../../Hooks/useWidth";
import { AllCards, AsideSuggestions, Stories } from "../../components";
import style from "./Home.module.scss";

const Home = () => {
  const { width } = useWidth();
  const breakpoint = width >= 1120;
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Stories />
        <AllCards />
      </div>
      {breakpoint && <AsideSuggestions />}
    </div>
  );
};

export default Home;
