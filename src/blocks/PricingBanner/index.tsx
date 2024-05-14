import Link from 'next/link'

const PricingBanner = ({
  title,
  sub_title,
  button_text,
  description,
}: {
  title?: string
  sub_title?: string
  button_text?: string
  description?: string
}) => {
  return (
    <section id='banner-1' className='pt-100 banner-section'>
      <div className='container'>
        {/* BANNER-1 WRAPPER */}
        <div className='banner-1-wrapper r-16'>
          <div className='banner-overlay bg--05 bg--fixed'>
            <div className='row'>
              {/* BANNER-1 TEXT */}
              <div className='col'>
                <div className='banner-1-txt color--white'>
                  {/* Title */}
                  <h2 className='s-45 w-700'>{title}</h2>
                  {/* Text */}
                  <p className='p-xl'>{sub_title}</p>
                  {/* Button */}
                  <Link
                    href='/signup-1'
                    className='btn r-04 btn--theme hover--tra-white'>
                    {button_text}
                  </Link>
                  {/* Button Text */}
                  <p className='p-sm btn-txt ico-15 o-85'>
                    <span className='flaticon-check' /> {description}
                  </p>
                </div>
              </div>{' '}
              {/* END BANNER-1 TEXT */}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* End banner overlay */}
        </div>{' '}
        {/* END BANNER-1 WRAPPER */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default PricingBanner
