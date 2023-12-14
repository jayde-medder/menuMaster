import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className="img-container">
          <Link to="/">
            <img
              src="/images/menuMaster/menuMaster-white.png"
              alt="menumaster-logo"
              className="logo"
            ></img>
          </Link>
        </div>
        <h2>recipe editor for hospitality</h2>
      </div>
    </>
  )
}

export default Header
