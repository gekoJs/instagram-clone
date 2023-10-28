import { AlertIcon } from "../../assets/svg";
import { CurrentWarningContext } from "../../layouts/MainLayout/MainLayout";
import style from "./NotAvailable.module.scss";
import { useContext } from "react";

type props = {
  top: number;
  left: number;
};
const NotAvailable = ({ top, left }: props) => {
  const warningContext = useContext(CurrentWarningContext);
  return (
    <div
      className={
        warningContext?.warningActive
          ? `${style.container} ${style.animation}`
          : style.container
      }
      style={{ top, left }}
    >
      <AlertIcon />
      <p>Function unavailable</p>
    </div>
  );
};

export default NotAvailable;
