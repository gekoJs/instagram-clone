import React from "react";
import { PostCard } from "..";
import style from "./AllCards.module.scss";

const AllCards = () => {
  return (
    <div className={style.container}>
      {Array.from({ length: 4 }, () => {
        return (
          <>
            <PostCard />
            <hr className={style.hr}/>
          </>
        );
      })}
    </div>
  );
};

export default AllCards;
