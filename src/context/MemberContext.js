import React, { createContext, useReducer } from "react";

const initialState = {
    members: []
}

export const MemberContext = createContext();

export const memberReducer = (state, action) =>{
    switch(action.type) {
        case "ADD_MEMBER":
            return{
                ...state,
                members: action.payload
            }
        case "GET_MEMBER": 
            return {
                ...state,
                members: action.payload
            }
    }
}


export const MemberContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(memberReducer, initialState);

  return (
    <MemberContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MemberContext.Provider>
  );
};
