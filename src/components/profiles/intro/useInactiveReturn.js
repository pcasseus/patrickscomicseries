import { useEffect, useState } from "react";

export const useInactiveReturn = () => {
  const [inactiveReturn, setInactiveReturn] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        setInactiveReturn(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return inactiveReturn;
};
