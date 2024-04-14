import styles from './transactions.module.css';
import { mockDataTeam } from '@/mockdata';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Payments</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Amount</td>
            <td>Bank Account</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{mockDataTeam[0].name}</td>
            <td>€135,23</td>
            <td>{mockDataTeam[0].bankaccount}</td>
            <td>14/04/24</td>
          </tr>
          <tr>
            <td>{mockDataTeam[1].name}</td>
            <td>€175,45</td>
            <td>{mockDataTeam[0].bankaccount}</td>
            <td>14/04/24</td>
          </tr>
          <tr>
            <td>{mockDataTeam[2].name}</td>
            <td>€119,35</td>
            <td>{mockDataTeam[0].bankaccount}</td>
            <td>14/04/24</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions;