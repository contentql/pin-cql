import logoBlack from '/public/images/logo-black.png'
import logoWhite from '/public/images/logo-white.png'
import Image from 'next/image'

export default function Footer1() {
  return (
    <>
      <footer id='footer-10' className='pt-50 footer'>
        <div className='container text-center'>
          <div className='row justify-content-center'>
            <div className='col-xl-10'>
              {/* FOOTER LOGO */}
              <div className='footer-info'>
                <Image
                  className='footer-logo'
                  src={logoBlack}
                  alt='footer-logo'
                />
                <Image
                  className='footer-logo-dark'
                  src={logoWhite}
                  alt='footer-logo'
                />
              </div>
              {/* FOOTER LINKS */}
              <div className='footer-links'>
                <ul className='foo-links clearfix'>
                  <li>
                    <p>
                      <a href='about.html'>About</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='blog-listing.html'>Blog</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='privacy.html'>Privacy Policy</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='cookies.html'>Cookie Policy</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href='contacts.html'>Contact Us</a>
                    </p>
                  </li>
                </ul>
              </div>
              {/* FOOTER SOCIALS */}
              <ul className='bottom-footer-socials ico-25'>
                <li>
                  <a href='#'>
                    <span className='flaticon-facebook' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='flaticon-twitter' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='flaticon-instagram' />
                  </a>
                </li>
              </ul>
            </div>
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* End container */}
      </footer>
    </>
  )
}
