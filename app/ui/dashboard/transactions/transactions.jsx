import styles from './transactions.module.css';
import { mockDataTeam } from '@/mockdata';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recente Betalingen</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Naam</td>
            <td>Bedrag</td>
            <td>Rekening</td>
            <td>Datum</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{mockDataTeam[0].achternaam}</td>
            <td>€135,23</td>
            <td>{mockDataTeam[0].IBAN}</td>
            <td>14/04/24</td>
          </tr>
          <tr>
            <td>{mockDataTeam[1].achternaam}</td>
            <td>€175,45</td>
            <td>{mockDataTeam[0].IBAN}</td>
            <td>14/04/24</td>
          </tr>
          <tr>
            <td>{mockDataTeam[2].achternaam}</td>
            <td>€119,35</td>
            <td>{mockDataTeam[0].IBAN}</td>
            <td>14/04/24</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions;