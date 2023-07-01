import Image from 'next/image'
import * as styles from './index.css'

const SearchBar = ({ className = '', placeholder = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder={placeholder}
      />
      <div className={styles.searchIcon}>
        <Image
          fill
          src="/search.svg"
          alt="Search Icon"
        />
      </div>
    </div>
  )
}

export default SearchBar
