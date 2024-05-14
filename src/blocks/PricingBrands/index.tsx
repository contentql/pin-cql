import BrandSlider2 from '@/app/(app)/_components/slider/BrandSlider2'

const PricingBrands = ({ title }: { title?: string }) => {
  return (
    <div id='brands-1' className='pb-100 brands-section'>
      <div className='container'>
        {/* BRANDS TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='brands-title mb-50'>
              <h5 className='s-17'>{title}</h5>
            </div>
          </div>
        </div>
        {/* BRANDS CAROUSEL */}
        <div className='row'>
          <div className='col text-center'>
            <BrandSlider2 />
          </div>
        </div>{' '}
        {/* END BRANDS CAROUSEL */}
      </div>{' '}
      {/* End container */}
      <hr className='divider' />
    </div>
  )
}

export default PricingBrands
