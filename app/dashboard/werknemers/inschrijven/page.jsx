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
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { useRouter } from 'next/navigation';

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
  contract: File,
  loonheffing: false ,
  loonheffingsform: File,
  rol:"werknemer"
}


const AddCrew = () => {
  const router = useRouter();
  const [werknemer, setWerknemer] = useState(werknemerData);
  const [loonhef, setLoonhef] = useState(false);
  const [date, setDate] = useState(new Date())
  const [telNum, setTelNum] = useState("")
  const [error, setError] = useState('');


// can these 3 useEffects be written more efficient? Although this looks straightforward
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
    var IBAN = require('iban')
    if (!IBAN.isValid(iban)) {
      setError("IBAN is incorrect")
      return (false);    
    }
    return (true);
  }

  const handleFileUpload = (e) => {
    const targetName = e.target.name;

    if (targetName === "contract") {
      setWerknemer({...werknemer, contract: e.target.files[0]})
    }
    else if (targetName === "loonheffingsform"){
      setWerknemer({...werknemer, loonheffingsform: e.target.files[0]})
    }
  }

  const uploadFiles = (id) => {
    const storage = getStorage();
    if (werknemer.contract) {
      const contractRef = ref(storage, `contracts/${id}`);
      uploadBytes(contractRef, werknemer.contract).then((snapshot) => {
        console.log("Uploaded contract");
      })
    }
    if (werknemer.loonheffingsform) {
      const loonheffingRef = ref(storage, `loonheffing/${id}`);
      uploadBytes(loonheffingRef, werknemer.loonheffingsform).then((snapshot) => {
        console.log("Uploaded loonheffingsformulier");
      })
    }
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
     if (validateIban(werknemer.IBAN))
     {
       try {
          const werknemerRef = doc(collection(db, "werknemers"));
          uploadFiles(werknemerRef.id);
          const upDatedWerknemer = {...werknemer, id: werknemerRef.id}
          setWerknemer(upDatedWerknemer);
          // await setDoc(werknemerRef, upDatedWerknemer);
          // console.log("document werknemer writter with ID: ", werknemerRef);
          // router.push()
        } catch (e) {
          console.error("Error adding document: ", e);
        }

     }
  }


  return (
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
            <div className={styles.birthdateInput} >
              <p className={styles.birthdateText}>Geboortedatum</p>
              <ReactDatePicker
                className={styles.dateInput}
                value={date}
                selected={date} 
                onChange={setDate}
                required
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
            <div className={styles.loon}>
              <div className={styles.loonheffing} >
                <label>Loonheffingskorting</label>
                <Toggle name="loonheffing" value={loonhef} setValue={setLoonhef}/>
              </div>
              <div>
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
      <div className={styles.submit}>
        <button type="submit" className={styles.submitButton}>Opslaan</button>
      </div>
      </form>
    </div>
  )
}

export default AddCrew;