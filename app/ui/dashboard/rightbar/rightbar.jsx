import ShowLink from '../showLink/showLink';
import styles from './rightbar.module.css';

const showItems = 
  {
    title: "Shows",
    list: [
      {
        title: "Keane",
        path: "/dashboard/shows/keane",
        date: "19/04/24",
        venue: "AFAS Live"
      },
      {
        title: "Dadju & Tayc",
        path: "/dashboard/shows/dadjeandtayc",
        date: "26/04/24",
        venue: "Ziggo Dome"
      },
      {
        title: "The Black Keys",
        path: "/dashboard/shows/theblackkeys",
        date: "05/04/24",
        venue: "Ziggo Dome"
      },
      {
        title: "J Balvin",
        path: "/dashboard/shows/jbalvin",
        date: "08/04/24",
        venue: "Ziggo Dome"
      }
    ]
  }

const Rightbar = () => {
  return (
    <div className={styles.container}>
       <h2 className={styles.title}>Upcomming Shows</h2>
      <ul className={styles.items}>
      {showItems.list.map((show) => (
        <ShowLink data={show} key={show.title}></ShowLink>
      ))}
      </ul>
    </div>
  )
}

export default Rightbar;