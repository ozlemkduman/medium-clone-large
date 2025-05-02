
import {  signInWithPopup } from "firebase/auth";
import { auth, providerGoogle, } from "../services/firebase";


const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, providerGoogle);
        const user = result.user
        console.log("google sign yapti");
        console.log(user.displayName);
        
        return user
    } catch (error: any) {

        console.error("Google ile giriş hatası:", error);

        return null;
    }
};



export { signInWithGoogle }