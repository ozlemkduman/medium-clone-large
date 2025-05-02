import { createContext, use, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { signInWithGoogle } from "../utils/googleSignin";


// Tip tanımı — şimdilik location ve örnek bir global state ekledik
type MainContextType = {
  location: ReturnType<typeof useLocation>;
  isModalSigninOpen: boolean;
  isModalSignupOpen: boolean;
  setIsModalSigninOpen: (value: boolean) => void;
  setIsModalSignupOpen: (value: boolean) => void;
  userName: string | null;
  setUserName: (value: string) => void;
  handleGoogleSignin: () => void;
  handleGoogleSignup: () => void;
};

const MainContextAll = createContext<MainContextType | undefined>(undefined);

// Provider bileşeni
export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const [isModalSigninOpen, setIsModalSigninOpen] = useState(false);
  const [isModalSignupOpen, setIsModalSignupOpen] = useState(false);

  const [userName, setUserName] = useState<string | null>("")

  const handleGoogleSignin = async () => {
   const user = await signInWithGoogle();
   if(user){
    setUserName(user.displayName)
   }

  };
  const handleGoogleSignup = async () => {
    const user = await signInWithGoogle();
   if(user){
    setUserName(user.displayName)
   }
  };
  

  return (
    <MainContextAll.Provider value={{ location, isModalSigninOpen, setIsModalSigninOpen, isModalSignupOpen, setIsModalSignupOpen, handleGoogleSignin, handleGoogleSignup, userName, setUserName }}>
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

