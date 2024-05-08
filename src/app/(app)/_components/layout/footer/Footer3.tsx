import Image from 'next/image'
import Link from 'next/link'

import { Footer, Media } from '@/payload-types'

interface Props {
  footerData?: Footer
}

export default function Footer3({ footerData }: Props) {
  return (
    <>
      <footer id='footer-3' className='pt-100 footer ft-3-ntr'>
        <div className='container'>
          {/* FOOTER CONTENT */}
          <div className='row'>
            {/* FOOTER LOGO */}
            <div className='col-xl-3'>
              <div className='footer-info'>
                <Image
                  className='footer-logo'
                  src={(footerData?.logo_pink as Media)?.url || ''}
                  alt={(footerData?.logo_pink as Media)?.alt || ''}
                  height={500}
                  width={500}
                />
                <Image
                  className='footer-logo-dark'
                  src={(footerData?.logo_pink_white as Media)?.url || ''}
                  alt={(footerData?.logo_pink_white as Media)?.alt || ''}
                  height={500}
                  width={500}
                />
              </div>
            </div>
            {/* FOOTER LINKS */}
            <div className='col-sm-4 col-lg-3 col-xl-2'>
              <div className='footer-links fl-1'>
                {/* Title */}
                <h6 className='s-17 w-700'>{footerData?.footer_title1}</h6>
                {/* Links */}
                <ul className='foo-links clearfix'>
                  {footerData?.title1_links?.map(title1_link => (
                    <li key={title1_link?.id}>
                      <p>
                        <Link href={title1_link?.footer_path}>
                          {title1_link?.footer_name}
                        </Link>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>{' '}
            {/* END FOOTER LINKS */}
            {/* FOOTER LINKS */}
            <div className='col-sm-4 col-lg-2'>
              <div className='footer-links fl-2'>
                {/* Title */}
                <h6 className='s-17 w-700'>{footerData?.footer_title2}</h6>
                {/* Links */}
                <ul className='foo-links clearfix'>
                  {footerData?.title2_links?.map(title2_link => (
                    <li key={title2_link?.id}>
                      <p>
                        <Link href={title2_link?.footer_path}>
                          {title2_link?.footer_name}
                        </Link>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>{' '}
            {/* END FOOTER LINKS */}
            {/* FOOTER LINKS */}
            <div className='col-sm-4 col-lg-3 col-xl-2'>
              <div className='footer-links fl-3'>
                {/* Title */}
                <h6 className='s-17 w-700'>{footerData?.footer_title3}</h6>
                {/* Links */}
                <ul className='foo-links clearfix'>
                  {footerData?.title3_links?.map(title3_link => (
                    <li key={title3_link?.id}>
                      <p>
                        <Link href={title3_link?.footer_path}>
                          {title3_link?.footer_name}
                        </Link>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>{' '}
            {/* END FOOTER LINKS */}
            {/* FOOTER NEWSLETTER FORM */}
            <div className='col-sm-10 col-md-8 col-lg-4 col-xl-3'>
              <div className='footer-form'>
                {/* Title */}
                <h6 className='s-17 w-700'>{footerData?.newsletter_title}</h6>
                {/* Newsletter Form Input */}
                <form className='newsletter-form'>
                  <div className='input-group r-06'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email Address'
                      required
                      id='s-email'
                    />
                    <span className='input-group-btn ico-15'>
                      <button type='submit' className='btn color--theme'>
                        <span className='flaticon-right-arrow-1' />
                      </button>
                    </span>
                  </div>
                  {/* Newsletter Form Notification */}
                  <label htmlFor='s-email' className='form-notification' />
                </form>
              </div>
            </div>{' '}
            {/* END FOOTER NEWSLETTER FORM */}
          </div>{' '}
          {/* END FOOTER CONTENT */}
          <hr /> {/* FOOTER DIVIDER LINE */}
          {/* BOTTOM FOOTER */}
          <div className='bottom-footer'>
            <div className='row row-cols-1 row-cols-md-2 d-flex align-items-center'>
              {/* FOOTER COPYRIGHT */}
              <div className='col'>
                <div className='footer-copyright'>
                  <p className='p-sm'>{footerData?.copyright_description}</p>
                </div>
              </div>
              {/* FOOTER SOCIALS */}
              <div className='col'>
                <ul className='bottom-footer-socials ico-20 text-end'>
                  <li>
                    <Link href='#'>
                      <span className='flaticon-facebook' />
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <span className='flaticon-twitter' />
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <span className='flaticon-instagram' />
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <span className='flaticon-youtube' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END BOTTOM FOOTER */}
        </div>{' '}
        {/* End container */}
      </footer>
    </>
  )
}
