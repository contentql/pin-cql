'use client'

import { useState } from 'react'

const listOfIcons = [
  { icon: 'flaticon-mechanics', key: 'flaticon-mechanics' },
  { icon: 'flaticon-suit', key: 'flaticon-suit' },
  { icon: 'flaticon-price-label', key: 'flaticon-price-label' },
  { icon: 'flaticon-screenplay', key: 'flaticon-screenplay' },
]

interface Props {
  title?: string
  links?: {
    link_text: string
    id?: string | null
  }[]
  list_of_questions?: {
    questions: {
      question: string
      answer: {
        answer_paragraph: string
        id?: string | null
      }[]
      id?: string | null
    }[]
    id?: string | null
  }[]
}

const HelpCenterFaqs = ({ title, links, list_of_questions }: Props) => {
  const [activeIndex, setActiveIndex] = useState(1)
  const handleOnClick = (index: number) => {
    setActiveIndex(index)
  }
  const [isActive, setIsActive] = useState<{
    status: boolean
    key?: number
  }>({
    status: false,
    key: 1,
  })

  const handleToggle = (key: number) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }

  return (
    <section
      id='faqs-4'
      className='gr--whitesmoke inner-page-hero pb-100 faqs-section division'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-lg-11 col-xl-10'>
            <div className='inner-page-title'>
              <h2 className='s-52 w-700'>{title}</h2>
            </div>
          </div>
        </div>
        {/* TABS NAVIGATION */}
        <div className='row'>
          <div className='col'>
            <div className='tabs-nav tabs--theme clearfix'>
              <ul className='tabs-1'>
                {/* TAB-1 LINK */}
                {links?.map((link, index) => (
                  <li
                    key={link?.id}
                    className={
                      activeIndex === index + 1
                        ? 'tab-link ico-45 r-16 current'
                        : 'tab-link ico-45 r-16'
                    }
                    onClick={() => handleOnClick(index + 1)}>
                    <div className='tab-link-ico'>
                      <span className={listOfIcons[index]?.icon} />
                    </div>
                    <p>{link?.link_text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>{' '}
        {/* END TABS NAVIGATION */}
        {/* TABS CONTENT */}
        <div className='tabs-content'>
          <div className='row justify-content-center'>
            <div className='col-xl-10'>
              {/* TAB-1 CONTENT */}
              <div id={`tab-${activeIndex}`} className={'tab-content current'}>
                <div className='accordion-wrapper'>
                  <ul className='accordion'>
                    {list_of_questions &&
                      list_of_questions
                        .at(activeIndex - 1)
                        ?.questions.map(({ id, answer, question }, index) => {
                          return (
                            <li
                              key={id}
                              className={
                                isActive.key == index + 1
                                  ? 'accordion-item is-active'
                                  : 'accordion-item'
                              }
                              onClick={() => handleToggle(index + 1)}>
                              {/* Question */}
                              <div className='accordion-thumb'>
                                <h5 className='s-22 w-700'>{question}</h5>
                              </div>
                              {/* Answer */}
                              <div
                                className='accordion-panel color--grey'
                                style={{
                                  display: `${isActive.key == index + 1 ? 'block' : 'none'}`,
                                }}>
                                {/* Text */}
                                {answer.map(ans => {
                                  return (
                                    <p key={ans?.id}>{ans.answer_paragraph}</p>
                                  )
                                })}
                              </div>
                            </li>
                          )
                        })}
                  </ul>
                </div>
              </div>{' '}
              {/* END TAB-1 CONTENT */}
            </div>
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* END TABS CONTENT */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default HelpCenterFaqs
