import React from "react";

export const Store = React.createContext();

export const Provider = ({ children }) => {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight - (10 * window.innerHeight) / 100);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <Store.Provider value={{ height }}>{children}</Store.Provider>;
};
