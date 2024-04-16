"use client"
import styles from '@/app/ui/dashboard/crew/crew.module.css'
import Search from '@/app/ui/dashboard/search/search';
import Link from 'next/link';
import { mockDataTeam } from '@/mockdata';
import Pagination from '@/app/ui/dashboard/pagination/pagination';

import React from 'react';
import { useEffect } from 'react';


const CrewPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [crewLength, setCrewLength] = React.useState(0);

  useEffect(() => {
    const length = mockDataTeam.length;
    setCrewLength(length)
    return () => {};
  }, []);

  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - mockDataTeam.length) : 0;

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
          {(rowsPerPage  > 0 ?
          mockDataTeam.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : mockDataTeam).map((id) => (
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
          {emptyRows > 0 && (
              <tr style={{ height: 46.5 * emptyRows }}>
              <td colSpan={3} aria-hidden />
            </tr>
          )}
          </tbody>
        </table>
      </div>
      <table>
        <tbody>
          <tr>
            <Pagination 
              movePage={(newPage) => setPage(newPage)}
              setRows={(rows) => {
                setRowsPerPage(rows);
                setPage(0);
              }}
              page={page}
              rowsPerPage={rowsPerPage}
              crewLength={crewLength}
            />
          </tr>
        </tbody>
      </table>
    </div>
  )
}




export default CrewPage;