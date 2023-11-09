import { useEffect, useState } from "react";

function useShowWarning() {
  const [warningActive, setWarningActive] = useState(false);
  const [positions, setPositions] = useState({ top: 0, left: 0 });

  function handleShowWarning(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setPositions({
      top: e.pageY - 20,
      left: e.pageX > window.innerWidth / 2 ? e.pageX - 200 : e.pageX + 20,
    });

    setWarningActive(true);
  }

  useEffect(() => {
    if (warningActive) {
      const id = setTimeout(() => setWarningActive(false), 1500);
      return () => clearTimeout(id);
    }
  }, [warningActive]);

  return { warningActive, positions, handleShowWarning };
}

export default useShowWarning;
