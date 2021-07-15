import React, { createContext, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

interface IAuthContextProps {
  logged: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider: React.FC = ({ children }): JSX.Element => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@minha-carteira:logged");

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === "valvesperricci@yahoo.com.br" && password === "123") {
      localStorage.setItem("@minha-carteira:logged", "true");
      setLogged(true);
    } else {
      alert("Senha e/ou usuário inválidos");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@minha-carteira:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextProps {
  const context = useContext(AuthContext);

  return context;
}
