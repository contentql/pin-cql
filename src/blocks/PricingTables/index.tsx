import Link from 'next/link'
import { useState } from 'react'

const PricingTables = ({
  plans,
}: {
  plans?: {
    title: string
    currency: string
    price: number
    plan_text: string
    description1: string
    button_text: string
    description2: string
    points: {
      point: string
      id?: string | null
    }[]
    id?: string | null
  }[]
}) => {
  const [isPricing, setPricing] = useState(false)

  return (
    <section id='pricing-1' className='gr--whitesmoke pb-40  pricing-section'>
      <div className='container'>
        <div className='pricing-1-wrapper'>
          <div className='row row-cols-1 row-cols-md-3'>
            {/* STARTER PLAN */}
            {plans?.map((plan, index) => (
              <div key={plan?.id} className='col'>
                <div
                  id={`pt-1-${index + 1}`}
                  className='p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp'>
                  {/* TABLE HEADER */}
                  <div className='pricing-table-header'>
                    {/* Title */}
                    <h5 className='s-24 w-700'>{plan?.title}</h5>
                    {/* Price */}
                    <div className='price'>
                      <sup className='color--black'>{plan?.currency}</sup>
                      <span className='color--black'>{plan?.price}</span>
                      <sup className='validity color--grey'>
                        / {plan?.plan_text}
                      </sup>
                      <p className='color--grey'>{plan?.description1}</p>
                    </div>
                    {/* Button */}
                    <Link
                      href='#'
                      className='pt-btn btn r-04 btn--theme hover--theme'>
                      {plan?.button_text}
                    </Link>
                    <p className='p-sm btn-txt text-center color--grey'>
                      {plan?.description2}
                    </p>
                  </div>{' '}
                  {/* END TABLE HEADER */}
                  {/* PRICING FEATURES */}
                  <ul className='pricing-features color--black ico-10 ico--green mt-25'>
                    {plan?.points?.map((point, index) => (
                      <li key={point?.id}>
                        <p>
                          <span className='flaticon-check' /> {point?.point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* END STARTER PLAN */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingTables
