const listOfIcons = [
  {
    icon: 'flaticon-layers-1',
    key: 'flaticon-layers-1',
  },
  {
    icon: 'flaticon-pay-per-click',
    key: 'flaticon-pay-per-click',
  },
  {
    icon: 'flaticon-tutorial',
    key: 'flaticon-tutorial',
  },
  {
    icon: 'flaticon-taxes',
    key: 'flaticon-taxes',
  },
]

export default function Features13_1({
  caption,
  title,
  paragraph,
  points,
  features,
}: {
  caption?: string
  title?: string
  paragraph?: string
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
  return (
    <>
      <section
        id='features-13'
        className='shape--bg shape--white-500 pt-100 features-section division'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            {/* FEATURES-13 WRAPPER */}
            <div className='col-md-7 order-last order-md-2'>
              <div className='fbox-13-wrapper wow fadeInRight'>
                <div className='row'>
                  {/* FEATURE BOX #1 */}
                  {features?.map((feature, index) => (
                    <div key={feature?.id} className='col-md-6'>
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
                          <h5 className='s-19 w-700'>{feature?.title}</h5>
                          <p>{feature?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>{' '}
              {/* End row */}
            </div>{' '}
            {/* END FEATURES-13 WRAPPER */}
            {/* TEXT BLOCK */}
            <div className='col-md-5 order-first order-md-2'>
              <div className='txt-block left-column wow fadeInLeft'>
                {/* Section ID */}
                <span className='section-id'>{caption}</span>
                {/* Title */}
                <h2 className='s-44 w-700'>{title}</h2>
                {/* Text */}
                <p>{paragraph}</p>
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
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
