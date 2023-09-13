"use client";

import { createContext, useState, useContext } from "react";

export const ModelCOntext = createContext();

const ContextProvider = ({ children }) => {
  const [updateModel, setUpdateModel] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const value = {
    showModel,
    setShowModel,
    updateModel,
    setUpdateModel,
    loading,
    setLoading,
  };
  return (
    <ModelCOntext.Provider value={value}>{children}</ModelCOntext.Provider>
  );
};

export default ContextProvider;
