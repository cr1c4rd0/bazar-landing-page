import styles from './offering.module.css'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import axios from 'axios';

const subscribeUpdates = 'https://h26589t53i.execute-api.us-east-2.amazonaws.com/contact/subscribe-updates';//process.env.REACT_BAZAR_SUBSCRIBE_UPDATES_URL;

const index = () => {
  const regExp = {
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    phone: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
  }
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async ( data, e ) => {
    await axios.post(`${subscribeUpdates}`, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
        }).then(function (response){
            const dataResult = response;
            console.log(dataResult);
            if (dataResult.status == 200){
                Swal.fire({
                    icon: `success`,
                    title: `fine!`,
                    text: `¡The record has been successfully stored`,
                    showConfirmButton: false,
                    timer: 7000
                });
            }
        }).catch(function (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `El registro no puede ser creado por ${e}. ¡Intentalo nuevamente`,
              })
            console.log(err)
            console.log(` catch: ${JSON.stringify(data)}`);
        })
    // aqui ira el fetch de la DB para suscripciones a actualizaciones plataforma
  };
  
  return (
    <section className={styles["offering"]} id="Offering">
      <div className={styles['offering__container-title']}>
        <hr className={styles['hr']}/>
        <h1 className={styles['offering__title']}>Sign up to receive updates on the launch of our platform.</h1>
      </div>

      <div className={styles['offering__form']}>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className={styles['offering__container-input-name']}>
            <label className={styles['offering__form-label-name']}>Name</label>
            <input type='text' className={styles['offering__form-input-name']}  {...register("name",{
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
            <input type='text' className={styles['offering__form-input-phone']}  {...register("phone",{
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
            <textarea type='text' className={styles['offering__form-input-textArea']}  {...register("message")} />
          </div>
          
          
          <input type="submit" value="SUBSCRIBE TO OUR NEWS LETTER" className={styles['offering__form-submit']} />
        </form>
      </div>
    </section>
  )
}

export default index