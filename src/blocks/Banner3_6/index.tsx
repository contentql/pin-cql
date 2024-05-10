import Link from 'next/link'

export default function Banner3_6({
  title,
  sub_title,
  button_text,
  description,
}: {
  title?: string
  sub_title?: string
  button_text?: string
  description?: string
}) {
  return (
    <>
      <section id='banner-3' className='pt-100 banner-section'>
        <div className='container'>
          {/* BANNER-3 WRAPPER */}
          <div className='banner-3-wrapper bg--05 bg--scroll r-16'>
            <div className='banner-overlay'>
              <div className='row'>
                {/* BANNER-3 TEXT */}
                <div className='col'>
                  <div className='banner-3-txt color--white'>
                    {/* Title */}
                    <h2 className='s-48 w-700'>{title}</h2>
                    {/* Text */}
                    <p className='p-xl'>{sub_title}</p>
                    {/* Button */}
                    <Link
                      href='/signup-1'
                      className='btn r-04 btn--theme hover--tra-white'>
                      {button_text}
                    </Link>
                    {/* Button Text */}
                    <p className='p-sm btn-txt ico-15'>
                      <span className='flaticon-check' /> {description}
                    </p>
                  </div>
                </div>{' '}
                {/* END BANNER-3 TEXT */}
              </div>{' '}
              {/* End row */}
            </div>{' '}
            {/* End banner overlay */}
          </div>{' '}
          {/* END BANNER-3 WRAPPER */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
