import React, { useState, createContext } from "react";
export const Hooks = createContext({} as any);
const Index = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [temp, setTemp] = useState(null);
  const valx = {
    temp, setTemp
  };
  return <Hooks.Provider value={valx}>{props.children}</Hooks.Provider>;
};

export default Index;
