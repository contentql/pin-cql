import CounterUp from '@/app/(app)/_components/elements/CounterUp'

export default function Statistic1_1({
  statistics,
}: {
  statistics?: {
    integer: number
    character: string
    description: string
    id?: string | null
  }[]
}) {
  return (
    <>
      <div id='statistic-1' className='py-100 statistic-section division'>
        <div className='container'>
          {/* STATISTIC-1 WRAPPER */}
          <div className='statistic-1-wrapper'>
            <div className='row justify-content-md-center row-cols-1 row-cols-md-3'>
              {/* STATISTIC BLOCK #1 */}
              {statistics?.map((statistic, index) => (
                <div key={statistic?.id} className='col'>
                  <div id={`sb-1-${index + 1}`} className='wow fadeInUp'>
                    <div className='statistic-block'>
                      {/* Digit */}
                      <div className='statistic-block-digit text-center'>
                        <h2 className='s-46 statistic-number'>
                          <CounterUp end={statistic?.integer} />
                          {statistic?.character}
                        </h2>
                      </div>
                      {/* Text */}
                      <div className='statistic-block-txt color--grey'>
                        <p className='p-md'>{statistic?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* END STATISTIC BLOCK #1 */}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END STATISTIC-1 WRAPPER */}
        </div>{' '}
        {/* End container */}
      </div>
    </>
  )
}
