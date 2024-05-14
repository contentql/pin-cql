import { useState } from 'react'

const PricingTitle = ({
  title,
  plan1_text,
  plan2_text,
  description,
}: {
  title?: string
  plan1_text?: string
  plan2_text?: string
  description?: string
}) => {
  const [isPricing, setPricing] = useState(false)
  const handlePricing = () => setPricing(!isPricing)

  return (
    <section
      id='pricing-1'
      className='gr--whitesmoke inner-page-hero pricing-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-8'>
            <div className='section-title mb-70'>
              {/* Title */}
              <h2 className='s-52 w-700'>{title}</h2>
              {/* TOGGLE BUTTON */}
              <div className='toggle-btn ext-toggle-btn toggle-btn-md mt-30'>
                <span className='toggler-txt'>{plan1_text}</span>
                <label className='switch-wrap'>
                  <input type='checkbox' id='checbox' onClick={handlePricing} />
                  <span className='switcher bg--grey switcher--theme'>
                    <span className='show-annual' />
                    <span className='show-monthly' />
                  </span>
                </label>
                <span className='toggler-txt'>{plan2_text}</span>
                {/* Text */}
                <p className='color--theme'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingTitle
