import { AllCards, Stories } from "../../components";
import style from "./Home.module.scss"

const Home = () => {
  return (
    <div className={style.container}>
      <Stories/>
      <AllCards />
    </div>
  );
};

export default Home;
