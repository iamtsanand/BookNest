import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Define the AuthProvider component
export default function AuthProvider({ children }) {
  // Retrieve the initial user from localStorage
  const initialAuthUser = localStorage.getItem("Users");

  // State for authenticated user
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );

  // Provide the authUser and setAuthUser as an array
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context; // Return as an array
};