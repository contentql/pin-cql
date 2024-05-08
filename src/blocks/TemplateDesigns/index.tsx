import template1 from '/public/images/template/template-1.png'
import template2 from '/public/images/template/template-2.png'
import template3 from '/public/images/template/template-3.png'
import Image from 'next/image'
import Link from 'next/link'

function TemplateDesigns() {
  const templates = [
    {
      id: 1,
      name: 'Template 1',
      backgroundImage: template1,
      design:
        'https://cloud.contentql.io/projects/20156605/editor/page/4837646',
      preview: 'https://multiworkshop.resonateaes.com/',
      type: 'pro',
    },
    {
      id: 2,
      name: 'Template 2',
      backgroundImage: template2,
      design:
        'https://cloud.contentql.io/projects/20156900/editor/page/4837927',
      preview: 'https://podcastlanding.resonateaes.com/',
      type: 'pro',
    },
    {
      id: 3,
      name: 'Template 3',
      backgroundImage: template3,
      design:
        'https://cloud.contentql.io/projects/20156911/editor/page/4837944',
      preview: 'https://halbor.resonateaes.com/',
      type: 'pro',
    },
  ]
  return (
    <div id='page' className='page-wrapper'>
      <section id='select' className='bg-fixed select-section'>
        <div className='container'>
          {/* SECTION TITLE */}
          {/* DEMOS WRAPPER */}
          <div className='row'>
            {/* LAYOUT-1 */}
            {templates.map(template => (
              <div
                key={template.id}
                id='l-1'
                className='col-md-6 col-lg-4 select_link wow fadeInUp'
                data-wow-delay='0.5s'>
                <div className='hover-overlay card-view'>
                  <Image
                    className='img-fluid'
                    src={template.backgroundImage}
                    alt='layout-preview'
                  />
                  <div className='text-container'>
                    <div className='text-wow'>
                      <Link href={template.design} target='_blank'>
                        Go with this design
                      </Link>{' '}
                    </div>
                    <div className='text-wow'>
                      <Link href={template.preview} target='_blank'>
                        preview Design
                      </Link>
                    </div>
                  </div>
                  <p className='payment-type'>{template.type}</p>
                </div>
                <h4> {template.name}</h4>
              </div>
            ))}
          </div>{' '}
          {/* END DEMOS WRAPPER */}
        </div>{' '}
        {/* End container */}
        <div className='row'>
          <div className='col'>
            <div className='more-btn text-center wow fadeInUp'>
              <Link
                href='/templates'
                className='btn btn--tra-black hover--theme'>
                View all Templates
              </Link>
            </div>
          </div>
        </div>
      </section>{' '}
      {/* END SELECT */}
      {/* BANNER-1
============================================= */}
    </div>
  )
}

export default TemplateDesigns
