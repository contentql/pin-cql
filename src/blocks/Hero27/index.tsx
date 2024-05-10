import Link from 'next/link'

import VideoPopup from '@/app/(app)/_components/elements/VidepPopup'

export default function Hero27({
  title,
  sub_title,
  button1_text,
  button2_text,
  description1,
  description2,
  description3,
}: {
  title?: string
  sub_title?: string
  button1_text?: string
  button2_text?: string
  description1?: string
  description2?: string
  description3?: string
}) {
  return (
    <>
      <section id='hero-27' className='gr--whitesmoke hero-section'>
        <div className='hero-overlay bg--fixed'>
          <div className='container text-center'>
            {/* HERO TEXT */}
            <div className='row justify-content-center'>
              <div className='col-md-10 col-lg-9'>
                <div className='hero-27-txt wow fadeInUp'>
                  {/* Title */}
                  <h2 className='s-60 w-700'>{title}</h2>
                  {/* Text */}
                  <p className='s-20'>{sub_title}</p>
                  {/* Buttons */}
                  <div className='btns-group'>
                    <Link
                      href='#banner-3'
                      className='btn r-04 btn--theme hover--theme'>
                      {button1_text}
                    </Link>
                    <VideoPopup buttonText={button2_text} style={5} />
                  </div>
                  {/* Advantages List */}
                  <ul className='advantages ico-15 mt-25 clearfix'>
                    <li>
                      <p>{description1}</p>
                    </li>
                    <li className='advantages-links-divider'>
                      <p>
                        <span className='flaticon-minus' />
                      </p>
                    </li>
                    <li>
                      <p>{description2}</p>
                    </li>
                    <li className='advantages-links-divider'>
                      <p>
                        <span className='flaticon-minus' />
                      </p>
                    </li>
                    <li>
                      <p>{description3}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END HERO TEXT */}
          </div>{' '}
          {/* End container */}
        </div>{' '}
        {/* End hero-overlay */}
      </section>
    </>
  )
}
