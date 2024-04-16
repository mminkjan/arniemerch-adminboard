"use client"
import styles from '@/app/ui/dashboard/crew/add/addcrew.module.css'
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const AddCrew = () => {
  const [date, setDate] = useState(new Date())
  const [telNum, setTelNum] = useState("")
  const [contract, setContract] = useState();
  const [loonheffingform, setLoonheffingform] = useState();
  const [address, setAddress] = useState({
    straat: "",
    huisnummer: "",
    postcode: "",
    plaats: ""
  })

  const validateIban = () => {
    var IBAN = require('iban')
    IBAN.isValid("sdasd");
  }

  const handleFileupload = (event) => {
    
    setContract(event.target.files[0]);
  }

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <div className='formside'>
          <input type='text' placeholder='Voornaam' name='voornaam' required/>
          <input type='text' placeholder='Achternaam' name='achternaam' required/>
          <input type='text' placeholder='E-mail' name="email" />
          <input type='text' placeholder='Bsn' name='bsn' />
          <ReactDatePicker selected={date} onChange={(date) => {setDate(date)}}/>
          <PhoneInput placeholder='Telefoon nummer' value={telNum} onChange={setTelNum}/>
        </div>
        <div className='formside'>
          <input type='text' placeholder='Straat' name="straat" />
          <input type='text' placeholder='Huisnummer' name="huisnummer" />
          <input type='text' placeholder='Postcode' name="postcode" />
          <input type='text' placeholder='Plaatsnaam' name='plaatsnaam'/>
          <input type='text' placeholder="IBAN Rekeningnummer" name="account" />
        </div>
        <input type='file' onChange={handleFileupload} name='contract'/> 
        <input type='file' onChange={handleFileupload} name='loonheffingform'/> 
      </form>
    </div>
  )
}

export default AddCrew;