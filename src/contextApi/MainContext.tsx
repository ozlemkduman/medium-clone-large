import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

// Tip tanımı — şimdilik location ve örnek bir global state ekledik
type MainContextType = {
  location: ReturnType<typeof useLocation>;
  user: string;
  setUser: (value: string) => void;
};

const MainContextAll = createContext<MainContextType | undefined>(undefined);

// Provider bileşeni
export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [user, setUser] = useState("Guest");

  return (
    <MainContextAll.Provider value={{ location, user, setUser }}>
      {children}
    </MainContextAll.Provider>
  );
};

// Custom hook
export const useMainContext = () => {
  const context = useContext(MainContextAll);
  if (!context) {
    throw new Error("useMainContext must be used within MainContextProvider");
  }
  return context;
};
