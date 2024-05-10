import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

const Team_1 = ({
  title,
  sub_title,
  cards,
  button_text,
}: {
  title?: string
  sub_title?: string
  cards?: {
    name: string
    designation: string
    image: string | Media
    id?: string | null
  }[]
  button_text?: string
}) => {
  return (
    <section id='team-1' className='pt-100 team-section'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-80'>
              {/* Title */}
              <h2 className='s-50 w-700'>{title}</h2>
              {/* Text */}
              <p className='s-21 color--grey'>{sub_title}</p>
            </div>
          </div>
        </div>
        {/* TEAM MEMBERS WRAPPER */}
        <div className='team-members-wrapper'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
            {/* TEAM MEMBER #1 */}
            {cards?.map((card, index) => (
              <div key={card?.id} className='col'>
                <div className='team-member mb-50 wow fadeInUp'>
                  {/* Team Member Photo */}
                  <div className='team-member-photo r-14'>
                    <div className=''>
                      <Image
                        className='img-fluid'
                        src={(card?.image as Media)?.url || ''}
                        alt={(card?.image as Media)?.url || ''}
                        height={1000}
                        width={1000}
                      />
                      <div className='item-overlay' />
                    </div>
                  </div>
                  {/* Team Member Data */}
                  <div className='team-member-data'>
                    <h6 className='s-20 w-700 color--black'>{card?.name}</h6>
                    <p className='color--grey'>{card?.designation}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* END TEAM MEMBER #1 */}
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* TEAM MEMBERS WRAPPER */}
        {/* MORES BUTTON */}
        <div className='row'>
          <div className='col'>
            <div className='more-btn text-center mt-20 wow fadeInUp'>
              <Link href='/careers' className='btn btn--tra-black hover--theme'>
                {button_text}
              </Link>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default Team_1
