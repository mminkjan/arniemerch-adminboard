import Link from 'next/link'
import styles from './showLink.module.css'

const ShowLink = ({data}) => {
  return (
    <Link className={styles.container} href={data.path}>
      <div className={styles.text}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.date}>{data.date}</span>
        <span className={styles.venue}>{data.venue}</span>
      </div>
    </Link>
  )
}

export default ShowLink;