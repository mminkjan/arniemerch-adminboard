import styles from "./sidebar.module.css"
import { AiOutlineDashboard, AiOutlineTeam, AiOutlineSchedule, AiOutlineFieldTime } from "react-icons/ai";
import MenuLink from "./menuLink/menulink.jsx"
import Image from "next/image";

const menuItems = 
  {
    title: "Pages",
    list: [
      {
        title: "Dasboard",
        path: "/dashboard",
        icon: <AiOutlineDashboard />
      },
      {
        title: "Personeel",
        path: "/dashboard/crew",
        icon: <AiOutlineTeam />
      },
      {
        title: "Shows",
        path: "/dashboard/shows",
        icon: <AiOutlineSchedule />
      },
      {
        title: "Betalingen",
        path: "/dashboard/payments",
        icon: <AiOutlineFieldTime />
      }
    ]
  }


const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
      <Image className={styles.userImage} src="/noavatar.png" width="50" height="50" />
      <div className={styles.userDetail}>
        <span className={styles.userName}>Arnoud Maas</span>
        <span className={styles.userTitle}>CEO</span>
      </div>
      </div>
      <ul className={styles.list}>
        {menuItems.list.map((item) => (
          <MenuLink item={item} key={item.title} />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;