"use client"
import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import { AiOutlineLogout } from "react-icons/ai";
import styles from "./logoutbutton.module.css";

const LogOutButton = ({}) => {
  return (
    <button className={styles.button} onClick={() => signOut(auth)} >
      <AiOutlineLogout />
      <label>Log uit</label>
    </button>
  
  )
}

export default LogOutButton;

