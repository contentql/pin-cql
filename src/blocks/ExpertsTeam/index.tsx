import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

const ExpertsTeam = ({
  title,
  team_cards,
}: {
  title?: string
  team_cards?: {
    image: string | Media
    name: string
    designation: string
    id?: string | null
  }[]
}) => {
  return (
    <section
      id='team-2'
      className='gr--whitesmoke pb-40 inner-page-hero team-section'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-80'>
              <h2 className='s-52 w-700'>{title}</h2>
            </div>
          </div>
        </div>
        {/* TEAM MEMBERS WRAPPER */}
        <div className='team-members-wrapper'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
            {/* TEAM MEMBER #1 */}
            {team_cards?.map((team_card, index) => (
              <div key={team_card?.id} className='col'>
                <div
                  id={`tm-2-${index + 1}`}
                  className='team-member mb-60 wow fadeInUp'>
                  {/* Team Member Photo */}
                  <div className='team-member-photo r-14'>
                    <div className=''>
                      <Image
                        className='img-fluid'
                        src={(team_card?.image as Media)?.url || ''}
                        alt={(team_card?.image as Media)?.alt || ''}
                        height={1000}
                        width={1000}
                      />
                      <div className='item-overlay' />
                    </div>
                  </div>
                  {/* Team Member Data */}
                  <div className='team-member-data'>
                    {/* Data */}
                    <h6 className='s-20 color--black w-700'>
                      {team_card?.name}
                    </h6>
                    <p className='color--grey'>{team_card?.designation}</p>
                    {/* Social Links */}
                    <ul className='tm-social ico-20 clearfix'>
                      <li>
                        <Link href='#'>
                          <span className='flaticon-facebook' />
                        </Link>
                      </li>
                      <li>
                        <Link href='#'>
                          <span className='flaticon-twitter' />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            {/* END TEAM MEMBER #1 */}
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* TEAM MEMBERS WRAPPER */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default ExpertsTeam
