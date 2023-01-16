import Image from 'next/image'
import Link from 'next/link'
// import dashboard from '../../public/assets/image.png'
import Platform from '../../public/assets/platform-img.png'
import styles from './anyTrade.module.css'

const index = () => {
  return (
    <section className={styles['anyTrade__container']} id="AnyTradePlatform">
      {/* image */}
      <div className={styles['anyTrade__block']}>
        <article className={styles['anyTrade__article']}>
          {/* platform */}
              <Image
                src={Platform}
                width={2120}
                height={2120}
                alt='dashboard'
                className={styles['anyTrade__dashboard']}
              />
        </article>
        {/* texts */}
        <article className={styles['anyTrade__article']}>
          <hr className={styles['hr']}/>
          <h1 className={styles['anyTrade__title']}>Connect All The Dots In One Platform</h1>
          {/* <p className={styles['anyTrade__text']}>Trade physical commodities from sustainable verified sources, with cryptographyc agreements, low cost fiat-crypto transactions and real time information about everything</p>, */}
          <ul className={styles['anyTrade__list']}>
            <li className={styles['anyTrade__item']}><strong>Transactions: </strong>manage payments, inventories, logistics, insurance, and finance, as well as access to a network of service suppliers.</li>
            <li className={styles['anyTrade__item']}><strong>Market Data: </strong> access to reliable, up-to-date information on global commodity markets. </li>
            <li className={styles['anyTrade__item']}><strong>Traceability: </strong> track the movement of containers, vessels, and trucks carrying your products.</li>
            <li className={styles['anyTrade__item']}><strong>Sustainability: </strong>connect with environmental certification agencies and carbon market enablers to promote your sustainable practices.</li>
          </ul>
          <Link href='/demo'>
            <button className={styles['button-orange']}>
              REQUEST A DEMO
            </button>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default index