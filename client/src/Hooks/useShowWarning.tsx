import { useEffect, useState } from "react";

function useShowWarning() {
  const [warningActive, setWarningActive] = useState(false);
  const [positions, setPositions] = useState({ top: 0, left: 0 });

  function handleShowWarning(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {

    setPositions({
      top: e.clientY - 20,
      left:
        e.clientX > window.innerWidth / 2 ? e.clientX - 200 : e.clientX + 20,
    });

    setWarningActive(true);
  }

  useEffect(() => {
    if (warningActive) {
      const warningId = setTimeout(() => setWarningActive(false), 1500);
      return () => clearTimeout(warningId);
    }
  }, [warningActive]);

  return { warningActive, positions, handleShowWarning };
}

export default useShowWarning;
