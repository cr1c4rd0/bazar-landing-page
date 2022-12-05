import styles from '../styles/form_demo.module.css'
import Image from 'next/image'
import coffee from '../public/assets/cafe.svg'
import Logo from '../public/assets/Logo-white.svg'
import FormDemo from '../components/FormDemo2-1'

const demo = () => {
  return (
    <section className={styles['form__demo-container']}>
    {/* left form */}
      <article className={styles['form__demo-article']}>
        <FormDemo/>
      </article>
      {/* rigth images */}
      <div className={styles['form__demo-images']}>
      <Image src={Logo} 
        width={705}
        height={751}
        className={styles['form__logo']}
      />
        <Image
          src={coffee}
          width={800}
          height={800}
          className={styles['form__background-coffee']}
        />
        
      </div>

    </section>
  )
}

export default demo