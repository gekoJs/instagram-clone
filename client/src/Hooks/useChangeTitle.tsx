import { useEffect } from "react";

function useChangeTitle(newTitle: string) {
  useEffect(() => {
    // const title = document.querySelector("title");
    // if (title) {
    //   title.innerText = newTitle;
    // }
    document.title = newTitle
  }, []);
}

export default useChangeTitle;
