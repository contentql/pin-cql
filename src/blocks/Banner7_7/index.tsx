import Link from 'next/link'

export default function Banner7_7({
  title,
  description,
}: {
  title?: string
  description?: string
}) {
  return (
    <>
      <section id='banner-7' className='banner-section'>
        <div className='banner-overlay py-100'>
          <div className='container'>
            {/* BANNER-7 WRAPPER */}
            <div className='banner-7-wrapper'>
              <div className='row justify-content-center'>
                {/* BANNER-7 TEXT */}
                <div className='col-md-8'>
                  <div className='banner-7-txt text-center'>
                    {/* Title */}
                    <h2 className='s-50 w-700'>{title}</h2>
                    {/* Buttons */}
                    <div className='btns-group'>
                      <Link
                        href='/signup-1'
                        className='btn r-04 btn--theme hover--theme'>
                        Get srarted - it&apos;s free
                      </Link>
                      <Link
                        href='/pricing-1'
                        className='btn r-04 btn--tra-black hover--theme'>
                        Discover pricing
                      </Link>
                    </div>
                    {/* Button Text */}
                    <p className='btn-txt ico-15'>{description}</p>
                  </div>
                </div>
              </div>{' '}
              {/* End row */}
            </div>{' '}
            {/* END BANNER-7 WRAPPER */}
          </div>{' '}
          {/* End container */}
        </div>{' '}
        {/* End banner overlay */}
      </section>
      <hr className='divider' />
    </>
  )
}