const About_3 = ({
  heading_1,
  paragraph,
  points,
  heading_2,
  paragraphs,
}: {
  heading_1?: string
  paragraph?: string
  points?: {
    point: string
    id?: string | null
  }[]
  heading_2?: string
  paragraphs?: {
    paragraph: string
    id?: string | null
  }[]
}) => {
  return (
    <div id='about-3' className='pt-100 about-section division'>
      <div className='container'>
        <div className='row'>
          {/* ABOUT-3 TEXT */}
          <div className='col-md-6'>
            <div id='a3-1' className='txt-block'>
              {/* Title */}
              <h5 className='s-24 w-700 mb-20'>{heading_1}</h5>
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
          {/* END ABOUT-3 TEXT */}
          {/* ABOUT-3 TEXT */}
          <div className='col-md-6'>
            <div id='a3-2' className='txt-block'>
              {/* Title */}
              <h5 className='s-24 w-700 mb-20'>{heading_2}</h5>
              {/* Text */}
              {paragraphs?.map((paragraph, index) => (
                <p key={paragraph?.id}>{paragraph?.paragraph}</p>
              ))}
              {/* Text */}
            </div>
          </div>{' '}
          {/* END ABOUT-3 TEXT */}
        </div>{' '}
        {/* End row */}
      </div>{' '}
      {/* End container */}
    </div>
  )
}

export default About_3
