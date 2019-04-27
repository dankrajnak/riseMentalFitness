// @flow
import { useEffect, useState } from "react";

/**
 * Returns the current width and height of the window in pixels.
 */
const useFullScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    const listener = window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", listener);
  });
  return [width, height];
};

export default useFullScreen;
