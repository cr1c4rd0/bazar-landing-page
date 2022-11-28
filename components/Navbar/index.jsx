import Link from 'next/link'
import Image from 'next/image';
import { useContext } from 'react';
import UseContext from '../../context/contexts'
import Button from '../Button'
import styles from './navbar.module.css'
import Logo from '../../public/assets/Logo.svg'

const navbar = () => {
  const { clicked, setClicked } = useContext(UseContext);

  return (
    <nav className={ styles['navbar']}>

        <Image src={Logo} 
          width={180}
          height={180}
          className={styles['navbar__logo']}
        />

        <ul className={ clicked ? styles['active'] : styles['navbar__list']}>

          <li className={styles['navbar__list-item']}>
            <Link href="#AnyTradePlatform">
              Why Bazar
            </Link>
          </li>

          <li className={styles['navbar__list-item']}>
            <Link href="#TradeWithFullControl">
              Solutions
            </Link>
          </li>

          <li className={styles['navbar__list-item']}>
            <Link href="#Offering">
              News
            </Link>
          </li>
          
          {/* estos son los otros items del menu */}
          {/* <li className={styles['navbar__list-item']}>
            <Link href="/">
              Resources
            </Link>
          </li> */}
          
          {/* <li className={styles['navbar__list-item']}>
            <Link href="/">
              Company
            </Link>
          </li> */}
          
          {/* <li className={styles['navbar__list-item']}>
            <Link href="/">
              Support
            </Link>
          </li> */}

        </ul>

        <Button/>
    </nav>
  )
}

export default navbar