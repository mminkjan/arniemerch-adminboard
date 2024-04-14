"use client"
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import { AiOutlineSearch, AiOutlineUser, AiOutlineNotification} from "react-icons/ai";


const Navbar = () => {

  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <AiOutlineSearch />
          <input type='text'  placeholder='Search...' className={styles.input}/>
        </div>
        <div className={styles.icons}>
          <AiOutlineNotification size={20} />
          <button className={styles.button}>
            <AiOutlineUser size={20}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;