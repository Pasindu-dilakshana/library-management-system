import { createContext, useEffect, useState } from "react";
import api from "../lib/api";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("library_token"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bootstrapAuth = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await api.get("/auth/me");
        setUser(data.data.user);
      } catch {
        localStorage.removeItem("library_token");
        setToken(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapAuth();
  }, [token]);

  const login = async (payload) => {
    const { data } = await api.post("/auth/login", payload);
    localStorage.setItem("library_token", data.data.token);
    setToken(data.data.token);
    setUser(data.data.user);
    return data.data.user;
  };

  const register = async (payload) => {
    const { data } = await api.post("/auth/register", payload);
    localStorage.setItem("library_token", data.data.token);
    setToken(data.data.token);
    setUser(data.data.user);
    return data.data.user;
  };

  const logout = () => {
    localStorage.removeItem("library_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated: Boolean(token && user),
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
