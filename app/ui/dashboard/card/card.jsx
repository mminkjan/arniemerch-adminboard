import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <span className={styles.title}>Openstaande Betalingen</span>
        <span className={styles.number}> 16 </span>
      </div>

    </div>
  )
}

export default Card;