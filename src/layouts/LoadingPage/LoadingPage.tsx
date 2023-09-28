import { Geko, Isotipo } from "../../assets/svg";
import style from "./Loading.module.scss";

const LoadingPage = () => {
  return (
    <section className={style.container}>
      <main className={style.wrapper}>
        <Isotipo />

        <div className={style.div}>
          <p className={style.from}>From</p>
          <p>
            <Geko />
            Daniel
          </p>
        </div>
      </main>
    </section>
  );
};

export default LoadingPage;
