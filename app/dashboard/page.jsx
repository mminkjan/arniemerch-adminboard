
import styles from '../ui/dashboard/dashboard.module.css'
import Card from "../ui/dashboard/card/card"
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'

const Dashboard = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
        </div>
        <Transactions />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard