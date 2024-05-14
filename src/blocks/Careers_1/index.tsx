import Link from 'next/link'

const Careers_1 = ({
  title,
  sub_title,
  details,
}: {
  title?: string
  sub_title?: string
  details?: {
    department: string
    designation: string
    location: string
    working: string
    id?: string | null
  }[]
}) => {
  return (
    <section id='careers-1' className='pt-100 pb-60 careers-section'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-70'>
              {/* Title */}
              <h2 className='s-52 w-700'>{title}</h2>
              {/* Text */}
              <p className='p-lg'>{sub_title}</p>
            </div>
          </div>
        </div>
        {/* OPEN ROLES */}
        <div className='row row-cols-1 row-cols-md-2'>
          {/* OPEN ROLE #1 */}
          {details?.map((detail, index) => (
            <div key={detail?.id} className='col'>
              <div className='role-box bg--white-300 r-10'>
                <Link href='/career-role'>
                  <span>{detail?.department}</span>
                  <h6 className='s-20 w-700'>{detail?.designation}</h6>
                  <p>
                    {detail?.location} / {detail?.working}
                  </p>
                </Link>
              </div>
            </div>
          ))}
          {/* END OPEN ROLE #1 */}
        </div>{' '}
        {/* END OPEN ROLES */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default Careers_1
