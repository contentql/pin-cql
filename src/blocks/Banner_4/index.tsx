import Link from 'next/link'

const Banner_4 = ({
  title,
  button_text,
}: {
  title?: string
  button_text?: string
}) => {
  return (
    <>
      <section id='banner-4' className='banner-section'>
        <div className='banner-overlay pb-100'>
          <div className='container'>
            {/* BANNER-4 WRAPPER */}
            <div className='banner-4-wrapper'>
              <div className='row justify-content-center'>
                {/* BANNER-4 TEXT */}
                <div className='col-md-9'>
                  <div className='banner-4-txt text-center'>
                    {/* Title */}
                    <h2 className='s-46 w-700'>{title}</h2>
                    {/* Button */}
                    <Link
                      href='mailto:yourdomain@mail.com'
                      className='btn r-04 btn--theme hover--theme'>
                      {button_text}
                    </Link>
                  </div>
                </div>
              </div>{' '}
              {/* End row */}
            </div>{' '}
            {/* END BANNER-4 WRAPPER */}
          </div>{' '}
          {/* End container */}
        </div>{' '}
        {/* End banner overlay */}
      </section>
      <hr className='divider' />
    </>
  )
}

export default Banner_4
