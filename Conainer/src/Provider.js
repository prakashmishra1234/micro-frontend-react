import React, { createContext, useState, useEffect, useContext } from "react";
const StoreContext = createContext();

function StoreProvider(props) {
  const [state, setState] = useState({
    token: "skmfsvndnvdnvsdfnvdkvnfksdnvmnergkotrrjgnjrkngrngkjrngrntknrkgnt",
    name: "Prakash Mishra",
    userRole: "admin",
  });

  return (
    <StoreContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}

const Store = () => {
  const store = useContext(StoreContext);
  return store;
};

export { StoreProvider, Store };
