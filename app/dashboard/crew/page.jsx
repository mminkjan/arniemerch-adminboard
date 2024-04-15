
import styles from '@/app/ui/dashboard/crew/crew.module.css'
import Search from '@/app/ui/dashboard/search/search';
import Link from 'next/link';
import { mockDataTeam } from '@/mockdata';
import Pagination from '@/app/ui/dashboard/pagination/pagination';


const CrewPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search crew member"/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Voeg toe</button>
        </Link>
      </div>
      <div className={styles.tablecontainer}>
        <table className={styles.mtable}>
          <thead>
            <tr>
              <td>Voornaam</td>
              <td>Achternaam</td>
              <td>Uurloon</td>
              <td>Leeftijd</td>
              <td>Geboortedatum</td>
              <td className={styles.emailhead}>Email</td>
              <td>Adres</td>
              <td>Telefoon</td>
              <td>IBAN</td>
              <td>BSN</td>
              <td>Contract</td>
              <td>Loonheffing</td>
              <td>Loonheffings Formulier</td>
            </tr>
          </thead>
          <tbody>
          {mockDataTeam.map((id) => (
            <tr key={id.id}>
              <td className={styles.voornaam}>{id.voornaam}</td>
              <td className={styles.achternaam}>{id.achternaam}</td>
              <td className={styles.uurloon}>{id.uurloon}</td>
              <td className={styles.leeftijd}>{id.leeftijd}</td>
              <td className={styles.gbdatum}>{id.geboortedatum}</td>
              <td className={styles.email}>{id.email}</td>
              <td className={styles.adres}>{id.adres}</td>
              <td className={styles.telefoon}>{id.telefoon}</td>
              <td className={styles.iban}>{id.IBAN}</td>
              <td className={styles.bsn}>{id.BSN}</td>
              <td className={styles.contract}>
                <Link href={id.contract.link}>
                  {id.contract.name}
                </Link></td>
              <td className={styles.loonheffing}>
                <button className={`${styles.button} ${id.loonheffing === "aan" && styles.active}`}>
                  {id.loonheffing}
                </button>
              </td>
              <td className={styles.loonheffingform}>
                <Link href={id.loonheffingsform.link}>
                  {id.loonheffingsform.name}
                </Link>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <table>
        <tbody>
          <tr>
            <Pagination />
          </tr>
        </tbody>
      </table>
    </div>
  )
}




export default CrewPage;