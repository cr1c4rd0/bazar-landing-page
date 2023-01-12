import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import USP from '../components/USP'
import AnyTradePlatform from '../components/AnyTradePlatform'
import TradeWithFullControl from '../components/TradeWithFullControl'
import Sustainable from '../components/SustainableVerifiedBusinesses'
import Offering from '../components/Offering'
import News from '../components/News'
import Footer from '../components/Footer'

export default function Home() {
  // minimo width 226px
  return (
    <div className={styles.container}>
      <Head>
        <title> Bazar</title>
        <meta name="description" content="Bazar Network LLC" />
        <link rel="icon" href="assets/Logo.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"/>
        <link rel="stylesheet" href='../styles/globals.css'/>
      </Head>

      <Header/>
      <main>
        <USP/>
        <AnyTradePlatform/>
        <TradeWithFullControl/>
        <Sustainable/>
        <Offering/>
        {/* <News/> */}
        
      </main>
      <footer>
        <Footer/>
      </footer>
    
    </div>
  )
}
