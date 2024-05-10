import CounterUp from '@/app/(app)/_components/elements/CounterUp'

export default function Statistic5_4({
  statistics,
}: {
  statistics?: {
    number: number
    fraction_number: number
    character: string
    title: string
    description: string
    id?: string | null
  }[]
}) {
  return (
    <>
      <div id='statistic-5' className='pt-100 statistic-section division'>
        <div className='container'>
          {/* STATISTIC-1 WRAPPER */}
          <div className='statistic-5-wrapper'>
            <div className='row row-cols-1 row-cols-md-3'>
              {/* STATISTIC BLOCK #1 */}
              {statistics?.map((statistic, index) => (
                <div key={statistic?.id} className='col'>
                  <div id={`sb-5-${index + 1}`} className='wow fadeInUp'>
                    <div className='statistic-block'>
                      {/* Digit */}
                      <div className='statistic-digit'>
                        <h2 className='s-44 w-700'>
                          <CounterUp end={statistic?.number} />.
                          <CounterUp end={statistic?.fraction_number} />
                          {statistic?.character}
                        </h2>
                      </div>
                      {/* Text */}
                      <div className='statistic-txt'>
                        <h5 className='s-19 w-700'>{statistic?.title}</h5>
                        <p>{statistic?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* END STATISTIC BLOCK #1 */}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END STATISTIC-5 WRAPPER */}
        </div>{' '}
        {/* End container */}
      </div>
    </>
  )
}
