import Link from 'next/link'
import styles from './button.module.css'
import { useContext } from 'react';
import UseContext from '../../context/contexts'


const index = () => {
  const { clicked, setClicked } = useContext(UseContext);
  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <li className={styles['navbar__list-item-buttons']}>
      <Link href='/demo'>
        <button className={styles['button-orange']}>REQUEST A DEMO</button>
      </Link>
      
      <div className={ styles['button-lines']} >
        <div className={styles['menu-icon-wrapper']} onClick={() => handleClick()}>
          <div className={styles["menu-icon-line-half-first"]}></div>
          <div className={styles["menu-icon-line"]}></div>
          <div className={styles["menu-icon-line-half-last"]}></div>
        </div>
      </div>
    </li>
  )
}

export default index