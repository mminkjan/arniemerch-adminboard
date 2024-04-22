import styles from './toggle.module.css'

const Toggle = ({name}) => {

  return (
    <div className={styles.toggleSwitch}>
      <input type='checkbox' className={styles.checkbox} name={name} id={name}  onChange={() => {}}></input>
      <label className={styles.label} htmlFor={name} id="label">
        <span className={styles.toggleSwitchInner}></span>
        <span className={styles.toggleSwitchOuter}></span>
      </label>
    </div>
  )
}

export default Toggle;