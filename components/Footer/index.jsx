import styles from './footer.module.css';
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../../public/assets/Logo-white.svg'
import LiskLogo from '../../public/assets/LiskLogo.png'
import chainlink from '../../public/assets/Startup_With_Chainlink.png'
// en seccion 1 y seccion 4 es donde se debe descomentar la imagen y cambiar la imagen a chainlink usando este nombre del ultimo import 

const index = () => {
  return (
  <footer className={styles['footer__container']} id="Footer">

    {/* section 1 */}
    <section className={styles['socialNetworks__container']}>
      <Image src={Logo} 
        width={180}
        height={180}
        className={styles['footer__logo']}
      />
      <p className={styles['socialNetworks__text']}>Trade physical commodities from verified sustainable sources.</p>
      <ul className={styles['socialNetworks__social-icons']}>

        <li className={styles['socialNetworks__twitter']}>
          <Link href="/"><i className="fa-brands fa-twitter"></i></Link>
        </li>

        <li className={styles['socialNetworks__discord']}>
          <Link href="/"><i className="fa-brands fa-discord"></i></Link>
        </li>
        <li className={styles['socialNetworks__medium']}>
          <Link href="https://medium.com/@Bazar_Network"><i className="fa-brands fa-medium"></i></Link>
        </li>
      </ul>
      <div className={styles['socialNetworks__container-logos-partners']}>
        <div className={styles['socialNetwork__container__poweredBy-img-section1']}>
          <p className={styles['socialNetworks__text']}>Powered by</p>
          <Image src={LiskLogo}
            width={2280}
            height={2280}
            className={styles['footer__lisk']}
          />
        </div>
        <div className={styles['socialNetwork__container__poweredBy-img-section1']}>
          {/* descomentar para agregar imagen chainlink */}
          {/* <p className={styles['socialNetworks__text']}>A participant of</p>
          <Image src={chainlink}
          width={2280}
          height={2280}
          className={styles['footer__chainlink']}
          /> */}
        </div>
      </div>
    </section>

    {/* section 2 */}
    <section className={styles['info__use']}>
      <article>
        <h2>USE CASES</h2>
        <ul>
          <li>
            <Link href="/">eTrade</Link>
          </li>
          <li>
            <Link href="/">Shipping</Link>
          </li>
          <li>
            <Link href="/">Finance</Link>
          </li>
          <li>
            <Link href="/">Analytics</Link>
          </li>
          <li>
            <Link href="/">Carbon Mitigation</Link>
          </li>
        </ul>
      </article>

      <article>
        <h2>DEVELOPERS</h2>
        <ul>
          <li>
            <Link href="/">Developer Portal</Link>
          </li>
          <li>
            <Link href="/">API Documentation</Link>
          </li>
          <li>
            <Link href="/">API Tutorials</Link>
          </li>
          <li>
            {/* <Link href="/">EDI Documentation</Link> */}
          </li>
          <li>
            {/* <Link href="/">Community</Link> */}
          </li>
          <li>
            {/* <Link href="/">API Status</Link> */}
          </li>
          <li>
            {/* <Link href="/">Account</Link> */}
          </li>
        </ul>
      </article>
    </section>

    {/* section 3 */}
    <section className={styles['info__use']}>
    <article>
        <h2>RESOURCES</h2>
        <ul>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Market Updates</Link>
          </li>
          <li>
            <Link href="/">Documentation</Link>
          </li>
          <li>
            {/* <Link href="/">Videos and Webinars</Link> */}
          </li>
          <li>
            <Link href="/">E-Guides</Link>
          </li>
          <li>
            {/* <Link href="/">Help Center</Link> */}
          </li>
        </ul>
    </article>

      <article>
        <h2>COMPANY</h2>
        <ul>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            {/* <Link href="/">Customers</Link> */}
          </li>
          <li>
            <Link href="/">Newsroom</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Careers</Link>
          </li>
          <li>
            {/* <Link href="/">Global Network</Link> */}
          </li>
          <li>
            {/* <Link href="/">Events</Link> */}
          </li>
        </ul>
      </article>
    </section>

    {/* section 4 */}
    <section className={styles['poweredBy__partners-section-4']}>
      <div className={styles['socialNetwork__container-poweredBy-img']}>
        <p className={styles['socialNetworks__text']}>Powered by</p>
        <Image src={LiskLogo}
          width={2280}
          height={2280}
          className={styles['footer__lisk']}
        />
      </div>
      <div className={styles['socialNetwork__container-poweredBy-img']}>
        {/* <p className={styles['socialNetworks__text']}>A participant of</p>
        <Image src={chainlink}
          width={2280}
          height={2280}
          className={styles['footer__chainlink']}
        /> */}
      </div>
    </section>

  </footer>
  )
}

export default index