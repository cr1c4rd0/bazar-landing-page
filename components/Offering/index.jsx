import styles from './offering.module.css'
import { useForm } from "react-hook-form";

const index = () => {
  const regExp = {
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    phone: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    // aqui ira el fetch de la DB para suscripciones a actualizaciones plataforma
    console.log(data);
  };
  
  return (
    <section className={styles["offering"]} id="Offering">
      <div className={styles['offering__container-title']}>
        <hr className={styles['hr']}/>
        <h1 className={styles['offering__title']}>Subscribe to receive updates about our platform launch</h1>
      </div>

      <div className={styles['offering__form']}>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className={styles['offering__container-input-name']}>
            <label className={styles['offering__form-label-name']}>Name</label>
            <input className={styles['offering__form-input-name']}  {...register("name",{
              required:true,
              minLength: 8,
            })} />
            {errors.name?.type === 'required' && <span className={styles['offering__form-error']}>⚠ This field is required</span>}
            {errors.name?.type === 'minLength' && <span className={styles['offering__form-error']}>⚠ min required length 8 characters</span>}
          </div>

          <div className={styles['offering__container-input-email-phone']}>
            {/* email */}
            <label className={styles['offering__form-label-email']}>Email</label>
            <input type="email" className={styles['offering__form-input-email']}  {...register("email",{
              required:true,
              pattern: regExp.email
            })} />
            {/* phone */}
            <label className={styles['offering__form-label-phone']}>Phone</label>
            <input type="number" className={styles['offering__form-input-phone']}  {...register("phone",{
              required:true,
              minLength: 7,
              pattern: regExp.phone
            })} />
            {errors.email?.type === 'required' && <span className={styles['offering__form-error']}>⚠ Email is required</span>}
            {errors.email?.type === 'pattern' && <span className={styles['offering__form-error']}>⚠ Format email is not validate</span>}
            {errors.phone?.type === 'required' && <span className={styles['offering__form-error']}> ⚠ Phone is required</span>}
            {errors.phone?.type === 'minLength' && <span className={styles['offering__form-error']}>⚠ min length phone is 7</span>}
          </div>
          


          <div className={styles['offering__container-input-phone']}>
          </div>


          <div className={styles['offering__container-input-textArea']}>
            <label className={styles['offering__form-label-textArea']}>Message</label>
            <textarea className={styles['offering__form-input-textArea']}  {...register("message")} />
          </div>
          
          
          <input type="submit" value="SUBSCRIBE TO OUR NEWS LETTER" className={styles['offering__form-submit']} />
        </form>
      </div>
    </section>
  )
}

export default index