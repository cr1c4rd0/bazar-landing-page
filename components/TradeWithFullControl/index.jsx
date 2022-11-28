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
            <p className={styles['tradeWFC__text']}>Give a truthful representation of the ownership of your assets in a reliable blockchain infrastructure.</p>
          </article>

          <article className={styles['tradeWFC__container-texts']}>
            <h2 className={styles['tradeWFC__subtitle']}>CONNECT</h2>
            <p className={styles['tradeWFC__text']}> Create transparent relations with sellers, buyers,logistic providers, insurance agencies, and financial institutions.</p>
          </article>

          <article className={styles['tradeWFC__container-texts']}>
            <h2 className={styles['tradeWFC__subtitle']}>TRADE</h2>
            <p className={styles['tradeWFC__text']}>Use crypto or fiat to buy from suppliers and pay for services within the network with real-time data from the commodity markets.</p>
          </article>

          <article className={styles['tradeWFC__container-texts']}>
            <h2 className={styles['tradeWFC__subtitle']}>SHIP</h2>
            <p className={styles['tradeWFC__text']}>Keep full traceability with our logistics partners or choose your own, integrate IoT devices data and external sources at your convenience.</p>
          </article>
        </article>
      </article>
    </section>
  )
}

export default index
