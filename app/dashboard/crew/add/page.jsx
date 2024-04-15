"use client"
import styles from '@/app/ui/dashboard/crew/add/addcrew.module.css'
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddCrew = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.from}>
        <input type='text' placeholder='Voornaam' name='voornaam' required/>
        <input type='text' placeholder='Achternaam' name='achternaam' required/>
        <input type=''/>
        <input type='text' placeholder='E-mail' name="email" />

      </form>
    </div>
  )
}

export default AddCrew;