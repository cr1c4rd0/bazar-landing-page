import Image from 'next/image'
import bazar from '../../public/assets/traceability-Illustration.png'
import styles from './tradeWFC.module.css'

const index = () => {
  return (
    <section className={styles['tradeWFC']} id="TradeWithFullControl">
      {/* titles */}
      <hr className={styles['hr']}/>
      <div className={styles['tradeWFC__container-title']}>
        <h1 className={styles['tradeWFC__title']}>Trade With Full Control & Traceability Of Your Assets</h1>
      </div>

      {/* image & texts */}
      {/* image */}
      <article className={styles['tradeWFC__block']}>
        <div className={styles['tradeWFC__article']}>
          <Image 
            src={bazar}
            width={400}
            height={400}
            alt='bazar'
            className={styles['tradeWFC__bazar']}
          />
        </div>
        {/* texts */}
        <article className={styles['tradeWFC__article']}>
          <article className={styles['tradeWFC__container-texts']}>
            <h2 className={styles['tradeWFC__subtitle']}>TOKENIZE</h2>
            <p className={styles['tradeWFC__text']}>tokenize assets and provide a reliable and transparent representation of ownership of your products on a blockchain infrastructure.</p>
          </article>

          <article className={styles['tradeWFC__container-texts']}>
            <h2 className={styles['tradeWFC__subtitle']}>CONNECT</h2>
            <p className={styles['tradeWFC__text']}> establish transparent relationships with sellers, buyers, logistics providers, insurance agencies, and financial institutions.</p>
          </article>

          <article className={styles['tradeWFC__container-texts']}>
            <h2 className={styles['tradeWFC__subtitle']}>TRADE</h2>
            <p className={styles['tradeWFC__text']}>use crypto or fiat currency to purchase from suppliers and pay for services within the network, with access to real-time commodity market data.</p>
          </article>

          <article className={styles['tradeWFC__container-texts']}>
            <h2 className={styles['tradeWFC__subtitle']}>SHIP</h2>
            <p className={styles['tradeWFC__text']}>maintain full traceability of your products through our logistics partners or by choosing your own, with the option to integrate IoT device data and external sources.</p>
          </article>
        </article>
      </article>
    </section>
  )
}

export default index
