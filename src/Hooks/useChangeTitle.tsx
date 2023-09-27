import { useEffect } from "react";

function useChangeTitle(newTitle: string) {
  useEffect(() => {
    const title = document.querySelector("title");
    if (title) {
      title.innerText = newTitle;
    }
  }, []);
}

export default useChangeTitle;
