import { AlertIcon } from "../../assets/svg";
import style from "./NotAvailable.module.scss";

const NotAvailable = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <AlertIcon />
        <p>Sorry, this function is still unavailable :c</p>
      </div>
    </div>
  );
};

export default NotAvailable;
