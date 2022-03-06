import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    //register window resize event
    window.addEventListener("resize", handleResize);
    //return a function to unregister the event
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return { value, onChange: handleChange };
}

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}
