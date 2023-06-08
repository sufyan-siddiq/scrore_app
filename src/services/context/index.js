import { createContext, useContext, useState } from "react";

export const Context = createContext();
export function useGlobal() {
  return useContext(Context);
}
export default function GlobalContext({ children }) {
  const [activeValue, setActiveValue] = useState();




  
  const data = { activeValue, setActiveValue };
  return <Context.Provider value={data}>{children}</Context.Provider>;
}
