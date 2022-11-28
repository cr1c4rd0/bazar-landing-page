import Image from 'next/image'
import Map from '../../public/assets/Mapsincard.png'
import Card from '../../public/assets/CardProduct.png'
import styles from './mapchange.module.css'
// import styles from '../Header/header.module.css'


const index = () =>{
  return (
    <div className={styles['header__container-images']}>
      <Image
        src={Map}
        sizes ='100%'
        className={styles['header__image-global']}
        alt='commercial globe'
      />
      <Image
        src={Card}
        sizes='10%'
        className={styles['card']}
        alt='card product'
      />
      
    </div>
  )
}

export default index;

