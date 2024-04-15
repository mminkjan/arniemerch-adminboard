import styles from './search.module.css'
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({placeholder}) => {
  return (
    <div className={styles.container}>
      <AiOutlineSearch />
      <input type='text' placeholder={placeholder} className={styles.input}/>
    </div>
  )
}

export default Search;