import styles from './header.module.css'
import Link from 'next/link'
import Navbar from '../Navbar'
// import Map from '../../public/assets/Map.png'
// import Image from 'next/image'
import MapChange from '../MapChange'

const index = () => {
  return (
    <header className={styles['header']} id="Header">
      <Navbar/>

      {/* espacio vacio */}
      <div className={styles['navbar__space']}></div>

        <section className={styles['section__header']}>
          <div>
            <div className={styles['container__texts']}>
              <hr className={styles['hr']}/>
              <h1 className={styles['header__title']}>TRADE, SHIP, <br/>PROTECT</h1>
              <h4 className={styles['header__subtitle']}>Trade physical commodities from sustainable verified sources,with cryptography grade agreements, low-cost transactions, and real-time information about everything</h4>
              <Link href="/demo" >
                <button className={styles['button-orange']}>
                  REQUEST A DEMO
                </button>
              </Link>
            </div>
          </div>

          <div className={styles['container__header-image']}>
            {/* no eliminar componente hasta confirmar que el diseño quedo bien */}
            {/* <Image 
              src={Map}
              sizes= "100%"
              className={styles['header__image-global']} 
              alt="commercial globe"
            /> */}
            <MapChange/>
          </div>
        </section>
    </header>
  )
}

export default index