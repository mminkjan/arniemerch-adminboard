"use client"
import styles from '@/app/ui/dashboard/crew/add/addcrew.module.css'
import { useEffect, useState } from 'react';
import Toggle from '@/app/ui/dashboard/toggle/toggle';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import CSVParserComponet from '@/app/ui/dashboard/parser/csvparser';

const werknemerData = {
  id: 0,
  voornaam: "",
  achternaam: "",
  uurloon: 0,
  geboortedatum: new Date(),
  email: "",
  adres: {
    straat: "",
    huisnummer: "",
    postcode: " ",
    woonplaats: "",
  },
  telefoon: "",
  IBAN: "",
  BSN: "",
  loonheffing: false ,
  contractDatum: new Date(),
  rol:"werknemer"
}


const AddCrew = () => {
  const router = useRouter();
  const [werknemer, setWerknemer] = useState(werknemerData);
  const [loonhef, setLoonhef] = useState(false);
  const [dateContract, setDateContract] = useState(new Date())
  const [dateBirth, setDateBirth] = useState(new Date())
  const [telNum, setTelNum] = useState("")
  const [error, setError] = useState('');


// can these 4 useEffects be written more efficient? Although this looks straightforward
  useEffect(() => {
    setWerknemer({...werknemer, loonheffing: loonhef})
  }, [loonhef])

  useEffect(() => {
    setWerknemer({...werknemer, contractDatum: dateContract})
  }, [dateContract])

  useEffect(() => {
    setWerknemer({...werknemer, geboortedatum: dateBirth})
  }, [dateBirth])

  useEffect(() => {
    setWerknemer({...werknemer, telefoon: telNum})
  }, [telNum])

  const validateIban = (iban) => {
    var IBAN = require('iban')
    if (!IBAN.isValid(iban)) {
      setError("IBAN is incorrect")
      return (false);    
    }
    return (true);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
     if (validateIban(werknemer.IBAN))
     {
       try {
          const werknemerRef = doc(collection(db, "werknemers"));
          const upDatedWerknemer = {...werknemer, id: werknemerRef.id}
          setWerknemer(upDatedWerknemer);
          await setDoc(werknemerRef, upDatedWerknemer);
          console.log("document werknemer writter with ID: ", werknemerRef);
          router.push()
        } catch (e) {
          console.error("Error adding document: ", e);
        }

     }
  };

  return (
    <>
    <div className={styles.container}>
     <CSVParserComponet />
    </div>
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Voeg werknemer toe</h3>
      </div>
      <div className={styles.error}>
        <p>{error}</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form} >
        <div className={styles.formRow}>
          <div className={styles.formside}>
            <input
              className={styles.inputField} 
              type='text' 
              placeholder='Voornaam' 
              name='voornaam' 
              required
              onChange={(e) => setWerknemer({...werknemer, voornaam: e.target.value})}
            />
            <input
              className={styles.inputField}
              required
              type='text' 
              placeholder='Straat' 
              name="straat"
              onChange={(e) =>  setWerknemer({...werknemer, adres: {...werknemer.adres, straat: e.target.value}})}
            />
            <input
              className={styles.inputField}
              required
              type='text'
              placeholder='Postcode'
              name="postcode"
              onChange={(e) =>  setWerknemer({...werknemer, adres: {...werknemer.adres, postcode: e.target.value}})}
            />
            <input
              className={styles.inputField}
              required
              type='text'
              placeholder='E-mail'
              name="email"
              onChange={(e) => setWerknemer({...werknemer, email: e.target.value})}
            />
            <PhoneInputWithCountrySelect
              defaultCountry='NL'
              className={styles.phoneInput} 
              placeholder='Telefoon nummer' 
              value={telNum} 
              onChange={setTelNum}
              required
            />
            <div className={styles.dateInput} >
              <label className={styles.dateText}>Geboortedatum</label>
              <label className={styles.dateText}>mm/dd/yyyy</label>
              <ReactDatePicker
                className={styles.dateInput}
                value={dateBirth}
                selected={dateBirth} 
                onChange={setDateBirth}
                required
                name='birth'
              />
            </div>
            <div className={styles.dateInput} >
              <label className={styles.dateText}>Start Contract</label>
              <label className={styles.dateText}>mm/dd/yyyy</label>
              <ReactDatePicker
                className={styles.dateInput}
                value={dateContract}
                selected={dateContract} 
                onChange={setDateContract}
                required
                name='contract'
              />
            </div>
          </div>
          <div className={styles.formside}>
          <input
              required
              className={styles.inputField} 
              type='text'
              placeholder='Achternaam'
              name='achternaam' 
              onChange={(e) => setWerknemer({...werknemer, achternaam: e.target.value})}
            />
            <input
              className={styles.inputField}
              required
              type='text'
              placeholder='Huisnummer'
              name="huisnummer"
              onChange={(e) =>  setWerknemer({...werknemer, adres: {...werknemer.adres, huisnummer: e.target.value}})}
            />
            <input
              className={styles.inputField}
              required
              type='text'
              placeholder='Plaatsnaam'
              name='plaatsnaam'
              onChange={(e) =>  setWerknemer({...werknemer, adres: {...werknemer.adres, woonplaats: e.target.value}})}
            />
            <input
              className={styles.inputField} 
              required
              type='text' 
              placeholder='Bsn' 
              name='bsn'
              onChange={(e) => setWerknemer({...werknemer, BSN: e.target.value})}
            />
            <input
              className={styles.inputField}
              required
              type='text'
              placeholder="IBAN Rekeningnummer"
              name="account"
              onChange={(e) => setWerknemer({...werknemer, IBAN: e.target.value})}
            />
            
              <div className={styles.loonheffing} >
                <label>Loonheffingskorting</label>
                <Toggle name="loonheffing" value={loonhef} setValue={setLoonhef}/>
              </div>
              <div className={styles.dateInput}>
                <label>Uurloon</label>
                <input
                  type='number'
                  step="0.01"
                  required
                  className={styles.looninput}
                  onChange={(e) => setWerknemer({...werknemer, uurloon: parseFloat(e.target.value)})}
                />
              </div>
          </div>
        </div>
      <div className={styles.submit}>
        <button type="submit" className={styles.submitButton}>Opslaan</button>
      </div>
      </form>
    </div>
    </>
  )
}

export default AddCrew;