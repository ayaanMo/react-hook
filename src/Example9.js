import React, { useState, useCallback, useEffect } from "react";
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }, []);
  useEffect(()=>{
      window.addEventListener("resize",onResize);
      return ()=>{
          window.removeEventListener("resize",onResize);
      }
  },[]) 
  return size;
}
function Example9() {
    const size = useWinSize();
    return (
        <>
            <p>{size.width}*{size.height}</p>
        </>
    )
}
export default Example9;
