// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);

// Provider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
