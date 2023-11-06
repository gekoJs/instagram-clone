import style from "./Switch.module.scss";

const Switch = ({ active }: { active: boolean }) => {
  return (
    <div className={`${style.container}  ${active && style.active}`}>
      <div className={`${style.ball} ${active && style.active_btn}`} />
    </div>
  );
};

export default Switch;
