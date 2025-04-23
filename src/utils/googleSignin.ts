
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../services/firebase";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Giriş başarılı:", user);
    return user;
  } catch (error) {
    console.error("Google ile giriş hatası:", error);
    return null;
  }
};
