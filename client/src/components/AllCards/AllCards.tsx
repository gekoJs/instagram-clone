import { PostCard } from "..";
import useGetPosts from "../../Hooks/useGetPosts";
import PostOptions from "../Modals/PostOptions/PostOptions";
import PostCardSkeleton from "../PostCardSkeleton/PostCardSkeleton";
import style from "./AllCards.module.scss";
import { useState } from "react";

//-----------------------------------------------

export type modalOpenProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

//-----------------------------------------------

const AllCards = () => {
  const { data, isLoading, isError } = useGetPosts();
  const [openModal, setOpenModal] = useState(false);

  if (isLoading) {
    return Array.from([0, 1, 2, 3]).map((e) => (
      <div key={e}>
        <PostCardSkeleton />;
      </div>
    ));
  }

  // if (isError) {
  //   return (
  //     <div className={style.error}>
  //       <p>Sorry, we are having problems :c</p>
  //     </div>
  //   );
  // }

  // if (data?.error) {
  //   return (
  //     <div className={style.error}>
  //       <p>{data.error}</p>
  //     </div>
  //   );
  // }

  const arr = [1, 2, 3, 4];
  return (
    <div className={style.container}>
      {openModal && (
        <PostOptions
          own={true}
          following={false}
          modalOpenProps={{ setOpenModal }}
        />
      )}

      {arr.map((e) => (
        <div key={e}>
          <PostCard modalOpenProps={{ setOpenModal }} />
          <hr className={style.hr} />
        </div>
      ))}

      {/* {data?.data?.map((e: any) => (
        <div key={e.id}>
          <PostCard />
          <hr className={style.hr} />
        </div>
      ))} */}
    </div>
  );
};

export default AllCards;
