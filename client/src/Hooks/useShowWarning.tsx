import { useEffect, useState } from "react";

function useShowWarning() {
  const [warningActive, setWarningActive] = useState(false);

  useEffect(() => {
    if (warningActive) {
      setTimeout(() => setWarningActive(false), 2000);
    }
  }, [warningActive]);

  return { warningActive, setWarningActive };
}

export default useShowWarning;
