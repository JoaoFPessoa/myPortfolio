import { RefObject, useCallback, useEffect } from "react";

function useClickOutside({ ref, onClickOutside }) {
  const handleClickOutside = useCallback(
    (event) => {
      const isSomeToastOpen = document.querySelector(".swal2-container");
      const isSomeMapInputOpen = document.querySelector(".input-style");
      if (isSomeToastOpen || isSomeMapInputOpen) return;
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    },
    [ref, onClickOutside]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);
}

export default useClickOutside;
