export default function Features12_10({
  caption,
  title,
  subtitle,
  points,
  features,
}: {
  caption?: string
  title?: string
  subtitle?: string
  points?: {
    point: string
    id?: string | null
  }[]
  features?: {
    title: string
    description: string
    id?: string | null
  }[]
}) {
  const listOfIcons = [
    { icon: 'flaticon-layers-1', key: 'flaticon-layers-1' },
    { icon: 'flaticon-click-1', key: 'flaticon-click-1' },
    { icon: 'flaticon-prioritize', key: 'flaticon-prioritize' },
    { icon: 'flaticon-analytics', key: 'flaticon-analytics' },
  ]

  return (
    <>
      <section
        id='features-12'
        className='shape--bg shape--white-400 pt-100 features-section division'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            {/* TEXT BLOCK */}
            <div className='col-md-5'>
              <div className='txt-block left-column wow fadeInRight'>
                {/* Section ID */}
                <span className='section-id'>{caption}</span>
                {/* Title */}
                <h2 className='s-46 w-700'>{title}</h2>
                {/* Text */}
                <p>{subtitle}</p>
                {/* List */}
                <ul className='simple-list'>
                  {points?.map((point, index) => (
                    <li key={point?.id} className='list-item'>
                      <p>{point?.point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>{' '}
            {/* END TEXT BLOCK */}
            {/* FEATURES-12 WRAPPER */}
            <div className='col-md-7'>
              <div className='fbox-12-wrapper wow fadeInLeft'>
                <div className='row'>
                  {features?.map((feature, index) => (
                    <div key={feature?.id} className='col-md-6'>
                      {/* FEATURE BOX #1 */}
                      <div
                        id={`fb-12-${index + 1}`}
                        className='fbox-12 bg--white-100 block-shadow r-12 mb-30'>
                        {/* Icon */}
                        <div className='fbox-ico ico-50'>
                          <div className='shape-ico color--theme'>
                            {/* Vector Icon */}
                            <span className={listOfIcons[index]?.icon} />
                            {/* Shape */}
                            <svg
                              viewBox='0 0 200 200'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z'
                                transform='translate(100 100)'
                              />
                            </svg>
                          </div>
                        </div>{' '}
                        {/* End Icon */}
                        {/* Text */}
                        <div className='fbox-txt'>
                          <h5 className='s-20 w-700'>{feature?.title}</h5>
                          <p>{feature?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>{' '}
              {/* End row */}
            </div>{' '}
            {/* END FEATURES-12 WRAPPER */}
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
