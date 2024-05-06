"use client"
import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
// import styles from "./logoutbutton.module.css";

const LogOutButton = ({}) => {
  return (
    <button onClick={() => signOut(auth)} >
      {/* TO Do at logout icon */}
    </button>
  
  )
}

export default LogOutButton;

