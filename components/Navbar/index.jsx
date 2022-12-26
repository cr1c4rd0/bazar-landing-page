import Link from 'next/link'
import Image from 'next/image';
import { useContext } from 'react';
import UseContext from '../../context/contexts'
import Button from '../Button'
import styles from './navbar.module.css'
import Logo from '../../public/assets/Logo.svg'

const navbar = () => {
  const { clicked, setClicked } = useContext(UseContext);
  const handleClicked = () => {
    setClicked(false);
  }

  return (
    <nav className={ styles['navbar']}>

        <Image src={Logo} 
          width={180}
          height={180}
          className={styles['navbar__logo']}
        />

        <ul className={ clicked ? styles['active'] : styles['navbar__list']}>

          <li className={styles['navbar__list-item']}>
            <Link href="#AnyTradePlatform" onClick={()=> handleClicked}>
              Why Bazar
            </Link>
          </li>

          <li className={styles['navbar__list-item']}>
            <Link href="#TradeWithFullControl" onClick = {()=> handleClicked}>
              Solutions
            </Link>
          </li>

          <li className={styles['navbar__list-item']}>
            <Link href="#Offering" onClick = {()=> handleClick}>
              News
            </Link>
          </li>
          
          {/* estos son los otros items del menu */}
          {/* <li className={styles['navbar__list-item']}>
            <Link href="/" onClick = {()=> handleClick}>
              Resources
            </Link>
          </li> */}
          
          {/* <li className={styles['navbar__list-item']}>
            <Link href="/" onClick = {()=> handleClick}>
              Company
            </Link>
          </li> */}
          
          {/* <li className={styles['navbar__list-item']}>
            <Link href="/" onClick = {()=> handleClick}>
              Support
            </Link>
          </li> */}

        </ul>

        <Button/>
    </nav>
  )
}

export default navbar