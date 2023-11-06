import { PostCard } from "..";
import useGetPosts from "../../Hooks/useGetPosts";
import PostCardSkeleton from "../PostCardSkeleton/PostCardSkeleton";
import style from "./AllCards.module.scss";

//-----------------------------------------------

const AllCards = () => {
  const { data, isLoading, isError } = useGetPosts();


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
      {arr.map((e) => (
        <div key={e}>
          <PostCard />
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
