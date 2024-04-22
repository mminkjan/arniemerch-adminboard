"use client"
import styles from '@/app/ui/dashboard/crew/add/addcrew.module.css'
import { use, useState } from 'react';
import Toggle from '@/app/ui/dashboard/toggle/toggle';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
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
    name: "",
    link: "",
  },
  loonheffing: "" ,
  loonheffingsform: {
    naam: "",
    link: "",
  },
  rol:"werknemer"
}


const AddCrew = () => {
  const [werknemer, setWerknemer] = useState(werknemerData);
  const [date, setDate] = useState(new Date())
  const [telNum, setTelNum] = useState("")
  const [contract, setContract] = useState();
  const [loonheffingform, setLoonheffingform] = useState();



  const validateIban = (iban) => {
    var IBAN = require('iban')
    if (IBAN.isValid(iban)){
      setWerknemer({...werknemer, IBAN: e.target.value})
    }
  }

  const changeLoonheffing  = (loonheffing) => {
    setWerknemer({...werknemer, loonheffing: loonheffing})
  }


  const handleContractupload = (event) => {
    
    // setContract(event.target.files[0])
    setWerknemer({...werknemer, contract: {...werknemer.contract, naam: e.target.value}})
  }
  

  const handleLoonheffin = () => {

  }

  const handleLoonheffingupload = (event) => {
    
    // setContract(event.target.files[0]);
    setWerknemer({...werknemer, contract: {...werknemer.loonheffingsform, naam: e.target.value}})
  }
  


  const handleSubmit = () => {
    setWerknemer({...werknemer, telefoon: telNum})
    setWerknemer({...werknemer, geboortedatum: date})
    console.log(telNum)
    console.log(date)
    console.log({werknemer})

  }


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Voeg werknemer toe</h3>
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
              onChange={(e) =>  setWerknemer({...werknemer, adres: {...werknemer.adres, plaats: e.target.value}})}
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
              onChange={(e) =>  validateIban(e.target.value)}
            />
            <div className={styles.loonheffing} onClick={() => handleLoonheffin()}>
              <p>Loonheffingskorting</p>
              <Toggle name="Loonheffing"/>
            </div>
          </div>
        </div>
        <div className={styles.contractBlock}>
          <div>
            <p className={styles.contractText}>Kopie Contract</p>
            <input type='file' onChange={(e) => handleContractupload(e)} name='contract'/> 
          </div>
          <div>
            <p className={styles.contractText}>Loonheffingsformulier</p>
            <input type='file' onChange={(e) => handleLoonheffingupload(e)} name='loonheffingform'/>
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