import React, { useState } from 'react';
import styles from './formDemo2-1.module.css';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import Swal from 'sweetalert2';
import axios from 'axios';

const contactUsDemo = 'https://h26589t53i.execute-api.us-east-2.amazonaws.com/contact/contactus';//process.env.REACT_BAZAR_CONTACT_US_URL;

const index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async ( data, e ) => {
    await axios.post(`${contactUsDemo}`,{
            name: data.name,
            email: data.email,
            industry: data.industry,
            country: data.country,
            estimated_quantity_to_buy_or_sell: data.quantity
        }).then(function (response) {            
            const dataResult = response;
            console.log(dataResult);
            if ( response.status == 200 ) {
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
            text: 'El registro no puede ser creado por ${e}. ¡Intentalo nuevamente',
            })
        console.log(`catch: ${e}`)
      })
  };

  const regExp = {
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    phone: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
  }

  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  

  return (
    <section className={styles['form__demo-container']}>
      <div>
        <h3 className={styles['form__demo-title']}>Contact us today to learn more and schedule a DEMO</h3>
        <p className={styles['form__demo-text']}>Thanks for your interest in our network. We are building a better future with people like you and thousands of businesses putting sustainability first</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <div className={styles['form__demo-form']}>

          <div className={styles['form__demo-container-input-name-email']}>
            {/* name */}
            <div className={styles['form__demo-container-name']}>
              <label className={styles['form__label-name']}>Name</label>
              <input className={styles['form__input-name']} placeholder='Enter name' {...register("name", {
                required: true, 
                minLength: 8,
              })}/>
            </div>
            {/* email */}
            <div className={styles['form__demo-container-email']}>
              <label className={styles['form__label-email']}>e-mail</label>
              <input className={styles['form__input-email']} placeholder='Enter e-mail' {...register("email", {
                required: true,
                pattern: regExp.email
              })}/>
            </div>
            {/* errors */}
          </div>
          {errors.name?.type === 'required' && <span className={styles['form__demo-error']}>⚠ Name is required</span>}
          {errors.name?.type === 'minLength' && <span className={styles['form__demo-error']}>⚠ min required length 8</span>}
          {errors.email?.type === 'required' && <span className={styles['form__demo-error']}>⚠ Email is required</span>}
          {errors.email?.type === 'pattern' && <span className={styles['form__demo-error']}>⚠ Must be valid email, example@yourdomain.com</span>}
          
          <div className={styles['form__demo-container-input-industry-country']}>
            <div className={styles['form__demo-container-industry']}>
              <label className={styles['form__label-industry']}>Industry</label>
              <select 
                className={styles['form__input-industry']}
                placeholder='description'
                {...register('industry')}
                >
                <option value="" disabled selected hidden>description</option>
                <option value="Agriculture">Agriculture</option> 
                <option value="Business Services">Business Services</option> 
                <option value="Construction">Construction</option> 
                <option value="Consumer Packaged Goods">Consumer Packaged Goods</option> 
                <option value="Consumer Manufacturing">Consumer Manufacturing</option> 
                <option value="Education">Education</option> 
                <option value="Energy">Energy</option> 
                <option value="Financial Services">Financial Services</option> 
                <option value="Food">Food</option> 
                <option value="Gas">Gas</option> 
                <option value="Healthcare">Healthcare</option> 
                <option value="Hospitality">Hospitality</option> 
                <option value="Industrial Manufacturing">Industrial Manufacturing</option> 
                <option value="Insurance">Insurance</option> 
                <option value="Leisure">Leisure</option> 
                <option value="Legal">Legal</option> 
                <option value="Life Sciences">Life Sciences</option> 
                <option value="Logistics">Logistics</option> 
                <option value="Media">Media</option> 
                <option value="Mining">Mining</option> 
                <option value="Oil">Oil</option> 
                <option value="Pharmaceutical">Pharmaceutical</option> 
                <option value="Public Sector">Public Sector</option> 
                <option value="Real State">Real State</option> 
                <option value="Retail">Retail</option> 
                <option value="Technology">Technology</option> 
                <option value="Telecommunications">Telecommunications</option> 
                <option value="Transport">Transport</option> 
                <option value="Travel">Travel</option> 
                <option value="Utilities">Utilities</option> 
                <option value="Other"></option> 
              </select>
            </div>
            <div className={styles['form__demo-container-country']}>
              <label className={styles['form__label-country']}>Country</label>
              
              <select 
                className={styles['form__input-country']}
                placeholder='description'
                {...register('country')}>
                <option value="" disabled selected hidden>Select Country</option>
                <option value="AL"> Albania </option>
                <option value="AF">Afghanistan    </option>
                <option value="DZ"> Algeria    </option>
                <option value="AS"> American Samoa     </option>
                <option value="AD"> Andorra    </option>
                <option value="AO"> Angola     </option>
                <option value="AI"> Anguilla   </option>
                <option value="AQ"> Antarctica     </option>
                <option value="AG"> Antigua &amp; Barbuda  </option>
                <option value="AR"> Argentina  </option>
                <option value="AM"> Armenia    </option>
                <option value="AW"> Aruba  </option>
                <option value="AC"> Ascension Island    </option>
                <option value="AU"> Australia  </option>
                <option value="AT"> Austria    </option>
                <option value="AZ"> Azerbaijan     </option>
                <option value="BS"> Bahamas    </option>
                <option value="BH"> Bahrain    </option>
                <option value="BD"> Bangladesh     </option>
                <option value="BB"> Barbados   </option>
                <option value="BY"> Belarus    </option>
                <option value="BE"> Belgium    </option>
                <option value="BZ"> Belize     </option>
                <option value="BJ"> Benin  </option>
                <option value="BM"> Bermuda    </option>
                <option value="BT"> Bhutan     </option>
                <option value="BO"> Bolivia    </option>
                <option value="BA"> Bosnia &amp; Herzegovina   </option>
                <option value="BW"> Botswana   </option>
                <option value="BR"> Brazil     </option>
                <option value="BN"> Brunei     </option>
                <option value="BG"> Bulgaria   </option>
                <option value="BF"> Burkina Faso   </option>
                <option value="BI"> Burundi    </option>
                <option value="KH"> Cambodia   </option>
                <option value="CM"> Cameroon   </option>
                <option value="CA"> Canada     </option>
                <option value="CV"> Cape Verde     </option>
                <option value="KY"> Cayman Islands     </option>
                <option value="CF"> Central African Republic   </option>
                <option value="TD"> Chad   </option>
                <option value="CL"> Chile  </option>
                <option value="CN"> China  </option>
                <option value="CX"> Christmas Island   </option>
                <option value="CC"> Cocos Islands  </option>
                <option value="CO"> Colombia   </option>
                <option value="KM"> Comoros    </option>
                <option value="CG"> Congo  </option>
                <option value="CD"> Congo (Dem Rep of)     </option>
                <option value="CK"> Cook Islands   </option>
                <option value="CR"> Costa Rica     </option>
                <option value="HR"> Croatia    </option>
                <option value="CU"> Cuba   </option>
                <option value="CY"> Cyprus     </option>
                <option value="CZ"> Czech Republic     </option>
                <option value="DK"> Denmark    </option>
                <option value="DJ"> Djibouti   </option>
                <option value="DM"> Dominica   </option>
                <option value="DO"> Dominican Republic     </option>
                <option value="TL"> East Timor     </option>
                <option value="EC"> Ecuador    </option>
                <option value="EG"> Egypt  </option>
                <option value="SV"> El Salvador    </option>
                <option value="GQ"> Equatorial Guinea  </option>
                <option value="ER"> Eritrea    </option>
                <option value="EE"> Estonia    </option>
                <option value="ET"> Ethiopia   </option>
                <option value="FK"> Falkland Islands   </option>
                <option value="FO"> Faroe Islands  </option>
                <option value="FJ"> Fiji   </option>
                <option value="FI"> Finland    </option>
                <option value="FR"> France     </option>
                <option value="GF"> French Guiana  </option>
                <option value="PF"> French Polynesia   </option>
                <option value="TF"> French Southern Territories    </option>
                <option value="GA"> Gabon  </option>
                <option value="GM"> Gambia     </option>
                <option value="GE"> Georgia    </option>
                <option value="DE"> Germany    </option>
                <option value="GH"> Ghana  </option>
                <option value="GI"> Gibraltar  </option>
                <option value="GR"> Greece     </option>
                <option value="GL"> Greenland  </option>
                <option value="GD"> Grenada    </option>
                <option value="GP"> Guadeloupe     </option>
                <option value="GU"> Guam   </option>
                <option value="GT"> Guatemala  </option>
                <option value="GN"> Guinea     </option>
                <option value="GW"> Guinea-Bissau  </option>
                <option value="GY"> Guyana     </option>
                <option value="HT"> Haiti  </option>
                <option value="HN"> Honduras   </option>
                <option value="HK"> Hong Kong  </option>
                <option value="HU"> Hungary    </option>
                <option value="IS"> Iceland    </option>
                <option value="IN"> India  </option>
                <option value="ID"> Indonesia  </option>
                <option value="IR"> Iran   </option>
                <option value="IQ"> Iraq   </option>
                <option value="IE"> Ireland    </option>
                <option value="IL"> Israel     </option>
                <option value="IT"> Italy  </option>
                <option value="CI"> Ivory Coast    </option>
                <option value="JM"> Jamaica    </option>
                <option value="JP"> Japan  </option>
                <option value="JO"> Jordan     </option>
                <option value="KZ"> Kazakhstan     </option>
                <option value="KE"> Kenya  </option>
                <option value="KI"> Kiribati   </option>
                <option value="KP"> Korea (North)  </option>
                <option value="KR"> Korea (South)  </option>
                <option value="KS"> Kosovo     </option>
                <option value="KW"> Kuwait     </option>
                <option value="KG"> Kyrgyzstan     </option>
                <option value="LA"> Laos   </option>
                <option value="LV"> Latvia     </option>
                <option value="LB"> Lebanon    </option>
                <option value="LS"> Lesotho    </option>
                <option value="LR"> Liberia    </option>
                <option value="LY"> Libya  </option>
                <option value="LI"> Liechtenstein  </option>
                <option value="LT"> Lithuania  </option>
                <option value="LU"> Luxembourg </option>
                <option value="MO"> Macao  </option>
                <option value="MK"> Macedonia  </option>
                <option value="MG"> Madagascar </option>
                <option value="MW"> Malawi </option>
                <option value="MY"> Malaysia   </option>
                <option value="MV"> Maldives   </option>
                <option value="ML"> Mali   </option>
                <option value="MT"> Malta  </option>
                <option value="MH"> Marshall Islands   </option>
                <option value="MQ"> Martinique </option>
                <option value="MR"> Mauritania </option>
                <option value="MU"> Mauritius  </option>
                <option value="YT"> Mayotte    </option>
                <option value="MX"> Mexico </option>
                <option value="FM"> Micronesia (Fed States of) </option>
                <option value="MD"> Moldova    </option>
                <option value="MC"> Monaco </option>
                <option value="MN"> Mongolia   </option>
                <option value="ME"> Montenegro </option>
                <option value="MS"> Montserrat </option>
                <option value="MA"> Morocco    </option>
                <option value="MZ"> Mozambique </option>
                <option value="MM"> Myanmar    </option>
                <option value="NA"> Namibia    </option>
                <option value="NR"> Nauru  </option>
                <option value="NP"> Nepal  </option>
                <option value="NL"> Netherlands    </option>
                <option value="AN"> Netherlands Antilles   </option>
                <option value="NC"> New Caledonia  </option>
                <option value="NZ"> New Zealand    </option>
                <option value="NI"> Nicaragua  </option>
                <option value="NE"> Niger  </option>
                <option value="NG"> Nigeria    </option>
                <option value="NU"> Niue   </option>
                <option value="NF"> Norfolk Island </option>
                <option value="MP"> Northern Mariana Islands   </option>
                <option value="NO"> Norway </option>
                <option value="OM"> Oman   </option>
                <option value="PK"> Pakistan   </option>
                <option value="PW"> Palau  </option>
                <option value="PS"> Palestinian Territory  </option>
                <option value="PA"> Panama </option>
                <option value="PG"> Papua New Guinea   </option>
                <option value="PY"> Paraguay   </option>
                <option value="PE"> Peru   </option>
                <option value="PH"> Philippines    </option>
                <option value="PL"> Poland </option>
                <option value="PT"> Portugal   </option>
                <option value="PR"> Puerto Rico    </option>
                <option value="QA"> Qatar  </option>
                <option value="RE"> Reunion    </option>
                <option value="RO"> Romania    </option>
                <option value="RU"> Russian Federation </option>
                <option value="RW"> Rwanda </option>
                <option value="WS"> Samoa  </option>
                <option value="ST"> Sao Tome &amp; Principe    </option>
                <option value="SA"> Saudi Arabia   </option>
                <option value="SN"> Senegal    </option>
                <option value="RS"> Serbia </option>
                <option value="SC"> Seychelles </option>
                <option value="SL"> Sierra Leone   </option>
                <option value="SG"> Singapore  </option>
                <option value="SK"> Slovakia   </option>
                <option value="SI"> Slovenia   </option>
                <option value="SB"> Solomon Islands    </option>
                <option value="SO"> Somalia    </option>
                <option value="ZA"> South Africa   </option>
                <option value="ES"> Spain  </option>
                <option value="LK"> Sri Lanka  </option>
                <option value="SH"> St Helena  </option>
                <option value="KN"> St Kitts &amp; Nevis   </option>
                <option value="LC"> St Lucia   </option>
                <option value="MF"> St Martin  </option>
                <option value="PM"> St Pierre &amp; Miquelon   </option>
                <option value="VC"> St Vincent &amp; the Grenadines    </option>
                <option value="SD"> Sudan  </option>
                <option value="SR"> Suriname   </option>
                <option value="SZ"> Swaziland  </option>
                <option value="SE"> Sweden </option>
                <option value="CH"> Switzerland    </option>
                <option value="SY"> Syria  </option>
                <option value="TW"> Taiwan </option>
                <option value="TJ"> Tajikistan </option>
                <option value="TZ"> Tanzania   </option>
                <option value="TH"> Thailand   </option>
                <option value="TG"> Togo   </option>
                <option value="TO"> Tonga  </option>
                <option value="TT"> Trinidad &amp; Tobago  </option>
                <option value="TA"> Tristan da Cunha   </option>
                <option value="TN"> Tunisia    </option>
                <option value="TR"> Turkey </option>
                <option value="TM"> Turkmenistan   </option>
                <option value="TC"> Turks &amp; Caicos Islands </option>
                <option value="TV"> Tuvalu </option>
                <option value="UG"> Uganda </option>
                <option value="UA"> Ukraine    </option>
                <option value="AE"> United Arab Emirates   </option>
                <option value="GB"> United Kingdom </option>
                <option value="US"> United States  </option>
                <option value="UY"> Uruguay    </option>
                <option value="UZ"> Uzbekistan </option>
                <option value="VU"> Vanuatu    </option>
                <option value="VE"> Venezuela  </option>
                <option value="VN"> Vietnam    </option>
                <option value="VG"> Virgin Islands (British)   </option>
                <option value="VI"> Virgin Islands (US)    </option>
                <option value="EH"> Western Sahara </option>
                <option value="YE"> Yemen  </option>
                <option value="ZM"> Zambia </option>
                <option value="ZW"> Zimbabwe   </option>
              </select>
            </div>
          </div>
          {errors.country?.type === 'required' && <span className={styles['form__demo-error']}>⚠ Country is required</span>}

          <div className={styles['form__demo-container-quantity']}>
            <label className={styles['form__label-quantity']}>Estimated quantity to buy or sell</label>
            <input 
              className={styles['form__input-quantity']} 
              placeholder='Enter quantity available'
              {...register("estimatedQuantity",{
                required: true
              })}/>
          </div>
          {errors.estimatedQuantity?.type === 'required' && <span className={styles['form__demo-error']}>⚠ Estimated quantity is required</span>}

        </div>

        <div className={styles['form__demo-container-support']}>
          <label className={styles['form__demo-support']}>Are you having problems with this method? please contact <br/> 
            <Link 
              href="mailto:support@bazar.com?
              Subject=Demo%20Request"
              className={styles['form__demo-support-link']}
            >
              support@bazar.com
            </Link>
          </label>
        </div>
        <div className={styles['form__demo-container-terms-of-use']}>
          <input 
            type='checkbox'
            className={styles['form__demo-terms-of-use-checkBox']} 
            {...register("privacyPolicy",{
              required: true
            })}
          />
          <label className={styles['form__demo-terms-of-use-text']}>A representative of Bazar may contact me based on the information I've provided above. I agree to the  
            <Link href='/terms-of-use' className={styles['form__demo-terms-of-use-link']}> Terms of Use </Link>
            and the 
            <Link href='/privacy-policy' className={styles['form__demo-terms-of-use-link']}> Bazar Website privacy Policy </Link>
          </label>
        </div>
        {errors.privacyPolicy?.type === 'required' && <span className={styles['form__demo-error']}>⚠ privacy policy is required</span>}

        <label className={styles['form__demo-terms-of-use-marketing']}>To opt-out of receivingg marketing or sales communications from Bazar after submitting this information, please
          <Link href="/opt-out" className={styles['form__demo-terms-of-use-link']}> visit this page </Link>
        </label>
        <input
          type='submit'
          value="Create"
          className={styles['form__button-create']} 
        />
      </form>

    </section>
  )
}

export default index