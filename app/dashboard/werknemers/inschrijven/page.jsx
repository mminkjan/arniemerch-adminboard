"use client"
import styles from '@/app/ui/dashboard/crew/add/addcrew.module.css'
import { use, useEffect, useState } from 'react';
import Toggle from '@/app/ui/dashboard/toggle/toggle';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


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
  contract: {
    naam: "",
    link: "",
  },
  loonheffing: false ,
  loonheffingsform: {
    naam: "",
    link: "",
  },
  rol:"werknemer"
}


const AddCrew = () => {
  const [werknemer, setWerknemer] = useState(werknemerData);
  const [loonhef, setLoonhef] = useState(false);
  const [date, setDate] = useState(new Date())
  const [telNum, setTelNum] = useState("")
  const [error, setError] = useState('');

  useEffect(() => {
    console.log(werknemer);
  }, [werknemer])

  useEffect(() => {
    setWerknemer({...werknemer, loonheffing: loonhef})
  }, [loonhef])

  useEffect(() => {
    setWerknemer({...werknemer, geboortedatum: date})
  }, [date])

  useEffect(() => {
    setWerknemer({...werknemer, telefoon: telNum})
  }, [telNum])

  const validateIban = (iban) => {
    console.log(iban);
    var IBAN = require('iban')
    if (!IBAN.isValid(iban)) {
      setError("IBAN is incorrect")
      return (false);    
    }
    return (true);
  }

  const handleFileUpload = (e) => {
    const targetName = e.target.name;
    console.log(targetName);

    if (targetName === "contract") {
      setWerknemer({...werknemer, contract: {...werknemer.contract, naam: e.target.value}})
    }
    else if (targetName === "loonheffingsform"){
      setWerknemer({...werknemer, loonheffingsform: {...werknemer.loonheffingsform, naam: e.target.value}})
    }
  }

  const handleSubmit = () => {
    setError("");
    validateIban(werknemer.IBAN);
  }


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Voeg werknemer toe</h3>
      </div>
      <div className={styles.error}>
        <p>{error}</p>
      </div>
      <form  className={styles.form}>
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
              type='text' 
              placeholder='Straat' 
              name="straat"
              onChange={(e) =>  setWerknemer({...werknemer, adres: {...werknemer.adres, straat: e.target.value}})}
            />
            <input
              className={styles.inputField}
              type='text'
              placeholder='Postcode'
              name="postcode"
              onChange={(e) =>  setWerknemer({...werknemer, adres: {...werknemer.adres, postcode: e.target.value}})}
            />
            <input
              className={styles.inputField}
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
            />
            <div className={styles.birthdateInput} >
              <p className={styles.birthdateText}>Geboortedatum</p>
              <ReactDatePicker
                className={styles.dateInput}
                value={date}
                selected={date} 
                onChange={setDate}
              />
            </div>
          </div>
          <div className={styles.formside}>
          <input
              className={styles.inputField} 
              type='text'
              placeholder='Achternaam'
              name='achternaam' 
              required
              onChange={(e) => setWerknemer({...werknemer, achternaam: e.target.value})}
            />
            <input
              className={styles.inputField}
              type='text'
              placeholder='Huisnummer'
              name="huisnummer"
              onChange={(e) =>  setWerknemer({...werknemer, adres: {...werknemer.adres, huisnummer: e.target.value}})}
            />
            <input
              className={styles.inputField}
              type='text'
              placeholder='Plaatsnaam'
              name='plaatsnaam'
              onChange={(e) =>  setWerknemer({...werknemer, adres: {...werknemer.adres, woonplaats: e.target.value}})}
            />
            <input
              className={styles.inputField} 
              type='text' 
              placeholder='Bsn' 
              name='bsn'
              onChange={(e) => setWerknemer({...werknemer, BSN: e.target.value})}
            />
            <input
              className={styles.inputField}
              type='text'
              placeholder="IBAN Rekeningnummer"
              name="account"
              onChange={(e) => setWerknemer({...werknemer, IBAN: e.target.value})}
            />
            <div className={styles.loonheffing} >
              <p>Loonheffingskorting</p>
              <Toggle name="loonheffing" value={loonhef} setValue={setLoonhef}/>
            </div>
          </div>
        </div>
        <div className={styles.contractBlock}>
          <div>
            <p className={styles.contractText}>Kopie Contract</p>
            <input type='file' onChange={handleFileUpload} name='contract'/> 
          </div>
          <div>
            <p className={styles.contractText}>Loonheffingsformulier</p>
            <input type='file' onChange={handleFileUpload} name='loonheffingsform'/>
          </div>
        </div>
      </form>
      <div className={styles.submit}>
        <button className={styles.submitButton} onClick={() => handleSubmit()}>Opslaan</button>
      </div>
    </div>
  )
}

export default AddCrew;