import React,{ createContext } from "react";

export const cardconttex=createContext();



const cardcontex = ({children}) => {
  return (
    <cardcontex.provider>
        {children}
    </cardcontex.provider>
  )
}

export default cardcontex
