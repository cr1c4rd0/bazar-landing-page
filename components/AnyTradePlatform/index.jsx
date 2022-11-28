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
          {/* ellipse */}
          {/* <svg className={styles['anyTrade__ellipse']} width="618" height="618" viewBox="0 0 618 618" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.06" d="M464.2 464.2C316.74 611.66 127.679 661.679 41.9207 575.921C-43.8378 490.162 6.18123 301.101 153.641 153.641C301.101 6.18123 490.162 -43.8378 575.921 41.9207C661.679 127.679 611.66 316.74 464.2 464.2Z" fill="#FB8500"/>
          </svg> */}
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
            <li className={styles['anyTrade__item']}><strong>Transactions: </strong>manage payments, inventories, logistics, insurance, and finance and access a network of service suppliers.</li>
            <li className={styles['anyTrade__item']}><strong>Market Data: </strong> access to reliable market data with updated information on global commodity markets. </li>
            <li className={styles['anyTrade__item']}><strong>Traceability: </strong> connect information of containers, vessels, and trucks carrying your products.</li>
            <li className={styles['anyTrade__item']}><strong>Sustainability: </strong>connect with environmental certification agencies and carbon markets enablers.</li>
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