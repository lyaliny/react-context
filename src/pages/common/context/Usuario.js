import { createContext, useState } from "react";
import { Componente } from "react-dom";

export const UsuarioContext = createContext();
UsuarioContext.displayName = "Usuário";

//Componente.contextType = UsuarioContext;

export const UsuarioProvider = ({ children }) => {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);
  return (
    <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
      {children}
    </UsuarioContext.Provider>
  );
};
