const listOfIcons = [
  { icon: 'flaticon-search-engine-1', key: 'search-engine' },
  { icon: 'flaticon-click', key: 'click' },
  { icon: 'flaticon-hierarchical-structure', key: 'hierarchical' },
  { icon: 'flaticon-data-copy', key: 'data-copy' },
  { icon: 'flaticon-rotate', key: 'flaticon-rotate' },
  { icon: 'flaticon-hosting', key: 'flaticon-hosting' },
]

export default function Features11_15({
  title,
  sub_title,
  features,
}: {
  title?: string
  sub_title?: string
  features?: {
    title: string
    description: string
    id?: string | null
  }[]
}) {
  return (
    <>
      <section id='features-11' className='pt-100 features-section division'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9'>
              <div className='section-title mb-70'>
                {/* Title */}
                <h2 className='s-48 w-700'>{title}</h2>
                {/* Text */}
                <p className='s-21 color--grey'>{sub_title}</p>
              </div>
            </div>
          </div>
          {/* FEATURES-11 WRAPPER */}
          <div className='fbox-wrapper'>
            <div className='row row-cols-1 row-cols-md-2 rows-3'>
              {/* FEATURE BOX #1 */}
              {features?.map((feature, index) => (
                <div key={feature?.id} className='col'>
                  <div className={`fbox-11 fb-${index + 1} wow fadeInUp`}>
                    {/* Icon */}
                    <div className='fbox-ico-wrap'>
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
                      </div>
                    </div>{' '}
                    {/* End Icon */}
                    {/* Text */}
                    <div className='fbox-txt'>
                      <h6 className='s-22 w-700'>{feature?.title}</h6>
                      <p>{feature?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* END FEATURE BOX #1 */}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END FEATURES-11 WRAPPER */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
