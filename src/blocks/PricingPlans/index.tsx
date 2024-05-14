import { Media } from '@payload-types'
import Image from 'next/image'

const PricingPlans = ({
  title,
  sub_title,
  heading,
  payment_cards,
  details,
}: {
  title?: string
  sub_title?: string
  heading?: string
  payment_cards?: {
    card_image?: string | Media | null
    id?: string | null
  }[]
  details?: {
    title: string
    description: string
    id?: string | null
  }[]
}) => {
  return (
    <section id='comp-table' className='pt-100 pb-60 pricing-section division'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-70'>
              {/* Title */}
              <h2 className='s-52 w-700'>{title}</h2>
              {/* Text */}
              <p className='p-xl'>{sub_title}</p>
            </div>
          </div>
        </div>
        {/* PRICING COMPARE */}
        <div className='comp-table wow fadeInUp'>
          <div className='row'>
            <div className='col'>
              {/* Table */}
              <div className='table-responsive mb-50'>
                <table className='table text-center'>
                  <thead>
                    <tr>
                      <th style={{ width: '34%' }} />
                      <th style={{ width: '22%' }}>Starter</th>
                      <th style={{ width: '22%' }}>Basic</th>
                      <th style={{ width: '22%' }}>Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row' className='text-start'>
                        Available Projects
                      </th>
                      <td className='color--black'>Up to 2</td>
                      <td className='color--black'>Up to 250</td>
                      <td className='color--black'>Unlimited</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Available Storage
                      </th>
                      <td className='color--black'>2Gb</td>
                      <td className='color--black'>50Gb</td>
                      <td className='color--black'>350Gb</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Private Cloud Hosting
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        User Permissions
                      </th>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Direct Integrations
                      </th>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Reusable Components
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Data Backup
                      </th>
                      <td className='color--black'>Weekly</td>
                      <td className='color--black'>Daily</td>
                      <td className='color--black'>Daily</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        No Ads. No Trackers
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Advanced Security
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Shared Team Workspace
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Team Management
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr className='table-last-tr'>
                      <th scope='row' className='text-start'>
                        Customer Support
                      </th>
                      <td className='color--black'>Limited</td>
                      <td className='color--black'>Basic</td>
                      <td className='color--black'>Priority</td>
                    </tr>
                  </tbody>
                </table>
              </div>{' '}
              {/* End Table */}
            </div>
          </div>
        </div>{' '}
        {/* END PRICING COMPARE */}
        {/* PRICING COMPARE PAYMENT */}
        <div className='comp-table-payment'>
          <div className='row row-cols-1 row-cols-md-3'>
            {/* Payment Methods */}
            <div className='col col-lg-5'>
              <div id='pbox-1' className='pbox mb-40 wow fadeInUp'>
                {/* Title */}
                <h6 className='s-18 w-700'>{heading}</h6>
                {/* Payment Icons */}
                <ul className='payment-icons ico-45 mt-25'>
                  {payment_cards?.map((card, index) => (
                    <li key={card?.id}>
                      <Image
                        src={(card?.card_image as Media)?.url || ''}
                        alt={(card?.card_image as Media)?.alt || ''}
                        height={500}
                        width={500}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Payment Guarantee */}
            {details?.map((detail, index) => (
              <div key={detail?.id} className={`col col-lg-${4 - index}`}>
                <div
                  id={`pbox-${2 + index}`}
                  className='pbox mb-40 wow fadeInUp'>
                  {/* Title */}
                  <h6 className='s-18 w-700'>{detail?.title}</h6>
                  {/* Text */}
                  <p>{detail?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>{' '}
        {/* END PRICING COMPARE PAYMENT */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default PricingPlans
