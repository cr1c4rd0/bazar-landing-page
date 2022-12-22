import React from 'react'
import Head from 'next/head'
import styles from '../styles/terms_of_use.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'

const termsOfUse = () => {
  return (
    <div>
      <Head>
        <title> terms of use</title>
        <meta name="description" content="Bazar Network LLC" />
        <link rel="icon" href="assets/Logo.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"/>
      </Head>
        <section >
          <header className={styles['terms__container-header']}>
            Terms Of Use
          </header>
          <article className={styles['container__article-terms']}>
            <ol>

              <li>
                Who we are
                <ol className={styles['ol_sub-terms']}>
                  <li>This website is operated by Bazar Network Inc. ( “<b>Bazar Network</b>”, “<b>we</b>” or “<b>us</b>”). Our registered Identification Number is 900-401-634 and our registered address is Calle #132-5, Medellín, Colombia [Address updated September 2022]. We make certain software applications and platforms available to customers on our Site for the purposes of providing a business network and supporting the exchange of business documents between each customer (the <b>“Services”</b>).
                  </li>
                  <li>Our privacy policy and terms of use (respectively referred to from now on as the 
                  “<Link  className={styles['li__a-terms']} href='/privacy-policy'>Privacy Policy</Link>” 
                  and the 
                  “<Link className={styles['li__a-terms']} href='/terms-of-use'>Terms of Use</Link>”) apply when you use our website (Bazar Network.com) (“<b>our Site</b>”). Please read the Privacy Policy and Terms of Use carefully before you start to use our Site. By using our Site, you indicate that you accept the Privacy Policy and Terms of Use and that you agree to abide by them. If you do not agree to them, please refrain from using our Site.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Defined terms used in terms of use
                <ol className={styles['ol_sub-terms']}>
                  <li>“<b>Software</b>” means any software accessible on our Site for the use of Users (whether free or if payment is required).
                  </li>
                  <li>“<b>User</b>” means any person using our Site or the Software (whether that person has paid for such use or not) and “Users”, “you” and “your” shall be construed accordingly.
                  </li>
                  <li>“<b>the Act</b>” means the Data Protection Act 1998.</li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Access to our site
                <ol className={styles['ol_sub-terms']}>
                  <li>Access to our Site and to our Services is permitted on a temporary basis, and we reserve the right to withdraw or amend the content of our Site and any Software available on it without notice. From time to time, we may restrict access to some parts of our Site, or our entire Site. We will not be liable if for any reason our Site or our Services are unavailable at any time or for any period.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Prohibited Uses
                <ol className={styles['ol_sub-terms']}>
                  <li>You may use our Site only for lawful purposes. Including, but not limited to the following, you may not use our Site:
                  <ol className={styles['ol_sub-terms']}>
                    <li>in any way that breaches any applicable local, national or international law or regulation;</li>
                    <li>in any way which contravenes the virus and hacking provisions as set out in Clause 8 (Viruses, Hacking and Other Offences).
                    </li>
                    <li>to upload, post, email or otherwise transmit any content that is directed to inciting or producing imminent conduct that is unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libellous, invasive of another’s privacy, hateful, or racially, ethnically or otherwise objectionable and is likely to produce such conduct;
                    </li>
                    <li>to impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity;</li>
                    <li>to forge headers or otherwise manipulate identifiers in order to disguise the origin of any content transmitted through the system;
                    </li>
                    <li>to upload, post, email or otherwise transmit any content that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party;
                    </li>
                    <li>to upload, post, email or otherwise transmit any unsolicited or unauthorised advertising, promotional materials, “junk mail,” “spam,” “chain letters,” or “pyramid schemes”;
                    </li>
                    <li>to interfere with or disrupt our Site’s system or servers or networks connected to our Site’s system, or disobey any requirements, procedures, policies or regulations of networks connected to our Site’s system; or
                    </li>
                    <li>to collect or store personal data about other Users without their knowledge.
                    </li>
                  </ol>
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Intellectual property rights
                <ol className={styles['ol_sub-terms']}>
                  <li>We are the owner or the licensee of all intellectual property rights on our Site and nothing in these Terms of Use shall grant you any rights, title or interest in and to such intellectual property rights. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.
                  </li>
                  <li>You must not use any part of the materials on our Site or the Software for commercial purposes without obtaining a licence to do so from us or our licensors.
                  </li>
                  <li>If you print off, copy or download any part of our Site or of the Software in breach of these Terms of Use, your right to use our Site and the Services will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Reliance on information posted
                  <ol className={styles['ol_sub-terms']}>
                    <li>We are not responsible for commentary (for example User comments and forum posts) and other materials posted about our Site, or on our Site and we disclaim all liability and responsibility arising from any reliance placed on such materials by any User or visitor to our Site.
                    </li>
                  </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Information about you and your visits to our site
                <ol className={styles['ol_sub-terms']}>
                  <li>We process information about you in accordance with our Privacy Policy. By using our Site, you consent to such processing and you warrant that all data provided by you is accurate.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Viruses, hacking and other offences
                <ol className={styles['ol_sub-terms']}>
                  <li>You must not misuse our Site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful.
                  </li>
                  <li>You must not attempt to gain unauthorised access to, interfere with, damage or disrupt, our Site, the server, equipment or network on which our Site is stored, any software used in the provision of our Site or any server, computer or database connected to our Site. You must not attack our Site via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our Site will cease immediately.
                  </li>
                  <li>We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our Site or due to you downloading any Software or material posted on it, or on any website linked to it.
                  </li>
                  <li>You must not reproduce, duplicate, copy or re-sell any part of our Site or our Software in contravention of the provisions of these Terms of Use.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Suspension and termination
                <ol className={styles['ol_sub-terms']}>
                  <li>
                    We will determine, in our discretion, whether there has been a breach of these Terms of Use through your use of our Site or the Services. Failure to comply with these Terms of Use constitutes a material breach of the Terms of Use upon which you are permitted to use our Site and our Services, and may result in our taking all or any of the following actions:
                    <ol className={styles['ol_sub-terms']}>
                      <li>
                        immediate, temporary or permanent withdrawal of your right to use our Site and/or our Software with no refund;
                      </li>
                      <li>
                        immediate, temporary or permanent removal of any posting or material uploaded by you to our Site;
                      </li>
                      <li>
                        issue of a warning to you;
                      </li>
                      <li>
                        legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach;
                      </li>
                      <li>
                        further legal action against you; or
                      </li>
                      <li>
                        disclosure of such information to law enforcement authorities as we reasonably feel is necessary.
                      </li>
                    </ol>
                  </li>
                  <li>
                  The responses described in these Terms of Use are not limited, and we may take any other action we reasonably deem appropriate.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Our liability
                <ol className={styles['ol_sub-terms']}>
                  <li>
                    The material displayed on our Site and on any Software is provided without any guarantees, conditions or warranties as to its accuracy, quality or suitability for any particular purpose. All information contained on our Site has been compiled and obtained from sources believed to be reliable and credible but all such information, and the Software, is provided ‘as is’ without warranty of any kind. We hereby expressly exclude all conditions, warranties and other terms which might otherwise be implied by statute, common law or the law of equity and make no representation or warranty, express or implied, as to the accuracy or completeness or satisfactory quality or fitness for a particular purpose of the information on our Site or the Software. To the extent permitted by law, and subject to Clause 10.2, we hereby expressly exclude liability for:
                    <ol className={styles['ol_sub-terms']}>
                      <li>
                        all conditions, warranties and other terms which might otherwise be implied by statute, common law or the law of equity;
                      </li>
                      <li>
                        any direct, indirect or consequential loss or damage incurred by you or any User in connection with our Site and/or the Software, or in connection with the use, inability to use, or results of the use of our Site, any websites linked to it and any materials posted on it, including, without limitation any liability for loss of income or revenue, loss of business, loss of profits or contracts, loss of anticipated savings, loss of data, loss of goodwill, wasted management or office time, or for any other loss or damage of any kind, however arising and whether caused by tort (including negligence), breach of contract or otherwise, even if reasonably foreseeable, provided that this condition shall not prevent claims for loss of, or damage to, your tangible property.
                      </li>
                    </ol>
                  </li>
                  <li>
                    The provisions of this Clause 10 do not limit or exclude our liability for death or personal injury arising from our negligence, nor our liability for fraud or fraudulent misrepresentation or misrepresentation as to a fundamental matter, nor any other liability which cannot be excluded or limited under applicable law.</li>
                  <li>
                    Our liability under or in relation to our Site in respect of all claims (whether for negligence, breach of contract or otherwise) will be limited to £500.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Links from our site
                <ol className={styles['ol_sub-terms']}>
                  <li>
                    Where our Site contains links to other websites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources, and accept no responsibility or liability for them or for any loss or damage that may arise from your use of them.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Our right to vary these terms of use and privacy policy
                <ol className={styles['ol_sub-terms']}>
                  <li>
                    We may revise these Terms of Use or the Privacy Policy at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you. Some of the provisions contained in these Terms of Use may also be superseded by provisions or notices published elsewhere on our Site.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Jurisdiction and applicable law
                <ol className={styles['ol_sub-terms']}>
                  <li>
                    The English courts will have non-exclusive jurisdiction over any claim arising from, or related to, a visit to our Site.
                  </li>
                  <li>
                    These Terms of Use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Entire agreement
                <ol className={styles['ol_sub-terms']}>
                  <li>
                    These Terms of Use and any document expressly referred to in them constitute the whole agreement between us and supersede all previous discussions, correspondence, negotiations, previous arrangement, understanding or agreement between us relating to the subject matter of any contract.
                  </li>
                  <li>
                    Each of us agrees that our only liability in respect of those representations and warranties that are set out in these Terms of Use (whether made innocently or negligently) will be for breach of contract.
                  </li>
                </ol>
              </li>

              <li className={styles['li__primary-terms']}>
                Your concerns
                <ol className={styles['ol_sub-terms']}>
                  <li>
                    If you have any concerns about material which appears on our Site, please contact: 
                    <Link 
                      href="mailto:inquires@bazar.network?
                      Subject=Demo%20Request"
                      className={styles['li__a-terms']}
                    >   inquires@bazar.network
                    </Link>
                  </li>
                </ol>
              </li>

            </ol>
          </article>
        </section>
        <Footer/>
    </div>
  )
}

export default termsOfUse