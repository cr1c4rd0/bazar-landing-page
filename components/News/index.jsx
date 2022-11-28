import styles from './new.module.css'
import Image from 'next/image'
import medium1 from '../../public/assets/medium1.jpeg'
import medium2 from '../../public/assets/medium2.png'
import Link from 'next/link';


const index = () => {
  return (
    <section className={styles['news']} id="News">
      {/* titles */}
      <hr className={styles['hr']}/>
      <div className={styles['news__container-title']}>
        <h1 className={styles['news__title']}>Our Latest News</h1>
      </div>

      {/* cards */}
      <article className={styles['news__container-news']}>
        <Link 
          href='https://medium.com/@Bazar_Network/a-blockchain-network-for-trading-tokenized-sourced-commodities-bb6e7f146761' 
          className={styles['news__article']}
          target='_blank'
        >
          <div className={styles['news__container-image']}>
            <Image 
              className={styles['news__article-image']} 
              src={medium1}
              width={1180}
              height={1180}
            />
            <div className={styles['news__article-data']}> 14 April 2022</div>
          </div>
          
          <h2 className={styles['news__article-title']}>A blockchain network for trading tokenized sourced commodities</h2>
          <p className={styles['news__article-text']}>As the world goes through geopolitical shaking, new economic opportunities are being discovered to keep the “lights on”<br/> 
            <button className={styles['button-orange']}>Read more</button> 
          </p>
        </Link>


        <Link 
          href='https://medium.com/@Bazar_Network/our-defi-approach-for-trading-sourced-products-with-lisk-5e28af0bd2c1'
          className={styles['news__article']}
          target='_blank'
        >
          <div className={styles['news__container-image']}>
            <Image  
              className={styles['news__article-image']} 
              src={medium2}
              width={1180}
              height={1180}
              href='/'
            />
            <div className={styles['news__article-data']}>1 May 2022</div>
          </div>
          <h2 className={styles['news__article-title']}>Our approach for trading tokenized sourced products with lisk</h2>
          <p className={styles['news__article-text']}>Bazar aims to build a decentralized marketplace for buyers and sellers of sourced products such as <br/>
            <button className={styles['button-orange']}>Read more</button>
          </p>
        </Link>
      </article>
      
    </section>
  )
}

export default index
