export default function Newsletter1_2({
  title,
  button_text,
}: {
  title?: string
  button_text?: string
}) {
  return (
    <>
      <section id='newsletter-1' className='newsletter-section'>
        <div className='newsletter-overlay'>
          <div className='container'>
            <div className='row d-flex align-items-center row-cols-1 row-cols-lg-2'>
              {/* NEWSLETTER TEXT */}
              <div className='col'>
                <div className='newsletter-txt'>
                  <h4 className='s-34 w-700'>{title}</h4>
                </div>
              </div>
              {/* NEWSLETTER FORM */}
              <div className='col'>
                <form className='newsletter-form'>
                  <div className='input-group'>
                    <input
                      type='email'
                      autoComplete='off'
                      className='form-control'
                      placeholder='Your email address'
                      required
                      id='s-email'
                    />
                    <span className='input-group-btn'>
                      <button
                        type='submit'
                        className='btn btn--theme hover--theme'>
                        {button_text}
                      </button>
                    </span>
                  </div>
                  {/* Newsletter Form Notification */}
                  <label htmlFor='s-email' className='form-notification' />
                </form>
              </div>{' '}
              {/* END NEWSLETTER FORM */}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* End container */}
        </div>{' '}
        {/* End newsletter-overlay */}
      </section>
      <hr className='divider' />
    </>
  )
}
