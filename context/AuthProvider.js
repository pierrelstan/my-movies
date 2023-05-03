import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    // Call your API to authenticate the user
    // Set the isLoggedIn state to true if successful
    if (email === "test@example.com" && password === "12345678") {
      setIsLoggedIn(true);
      setIsLoading(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const signup = async (email, password) => {
    // Call your API to create a new user
    // Set the isLoggedIn state to true if successful
    if (email !== null && password !== null) {
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, signup, logout, isLoading, setIsLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
