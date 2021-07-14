import React, { createContext, useContext, useEffect, useState } from "react";
import {loadMisc,loadFlapFlop, loadVow, loadBase} from '../services'
const MainContext = createContext();

function MainContextProvider({...props}) {
  const [state, setState] = useState(null);

  const loadData = async () => {
    
    const [baseData,miscData, flapFlowData, vowData] = await Promise.all([
      loadBase(),
      loadMisc(),
      loadFlapFlop(),
      loadVow(),
    ]);
  
    setState({
      ...baseData,
      ...miscData,
      ...flapFlowData,
      ...vowData,
    });
  };

  
  useEffect(() => {
    loadData();
  }, []);

  return <MainContext.Provider value={{ state }} {...props} />;
}

function useMainContext() {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error("useMainContext must be used within a MainContextProvider");
  }

  const state = context.state;
  return { state };
}

export { MainContextProvider, useMainContext };