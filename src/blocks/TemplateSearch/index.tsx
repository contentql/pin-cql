'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import CardSlider from '@/app/(app)/_components/slider/CardSlider'
import StorySlider from '@/app/(app)/_components/slider/StorySlider'

interface Template {
  id: number
  name: string
  backgroundImage: string
  design: string
  preview: string
  type: string
  category: string
}

function TemplateSearch({
  title,
  link1_text,
  link2_text,
  heading1,
  heading2,
  not_found_text,
}: {
  title?: string
  link1_text?: string
  link2_text?: string
  heading1?: string
  heading2?: string
  not_found_text?: string
}) {
  const [searchInput, setSearchInput] = useState('')

  const templates = [
    {
      id: 1,
      name: 'Template 1',
      backgroundImage: '/images/template/template-1.png',
      design:
        'https://cloud.contentql.io/projects/20156605/editor/page/4837646',
      preview: 'https://multiworkshop.resonateaes.com/',
      type: 'pro',
      category: 'Education',
    },
    {
      id: 2,
      name: 'Template 2',
      backgroundImage: '/images/template/template-2.png',
      design:
        'https://cloud.contentql.io/projects/20156900/editor/page/4837927',
      preview: 'https://podcastlanding.resonateaes.com/',
      type: 'pro',
      category: 'Eduction',
    },
    {
      id: 3,
      name: 'Template 3',
      backgroundImage: '/images/template/template-3.png',
      design:
        'https://cloud.contentql.io/projects/20156911/editor/page/4837944',
      preview: 'https://halbor.resonateaes.com/',
      type: 'pro',
      category: 'Free',
    },
    {
      id: 4,
      name: 'Template 4',
      backgroundImage: '/images/template/template-4.png',
      design:
        'https://cloud.contentql.io/projects/20156916/editor/page/4837953',
      preview: 'https://gymtrainer.resonateaes.com/',
      type: 'pro',
      category: 'Landing',
    },
    {
      id: 5,
      name: 'Template 5',
      backgroundImage: '/images/template/template-5.png',
      design:
        'https://cloud.contentql.io/projects/20156927/editor/page/4837964',
      preview: 'https://restauranttemp.resonateaes.com/',
      type: 'pro',
      category: 'Layouts',
    },
    {
      id: 6,
      name: 'Template 6',
      backgroundImage: '/images/template/template-6.png',
      design:
        'https://cloud.contentql.io/projects/20156965/editor/page/4838044',
      preview: 'https://subscriptionsales.resonateaes.com/',
      type: 'pro',
      category: 'Food',
    },
    {
      id: 7,
      name: 'Template 7',
      backgroundImage: '/images/template/template-7.png',
      design:
        'https://cloud.contentql.io/projects/20156973/editor/page/4838059',
      preview: 'https://saaslandingpages.resonateaes.com/',
      type: 'pro',
      category: 'Portfolio',
    },
    {
      id: 8,
      name: 'Template 8',
      backgroundImage: '/images/template/template-8.png',
      design:
        'https://cloud.contentql.io/projects/20156980/editor/page/4838077',
      preview: 'https://portfoliopage.resonateaes.com/',
      type: 'pro',
      category: 'Portfolio',
    },
    {
      id: 9,
      name: 'Template 9',
      backgroundImage: '/images/template/template-9.png',
      design:
        'https://cloud.contentql.io/projects/20156993/editor/page/4838089',
      preview: 'https://petstore3.resonateaes.com/',
      type: 'pro',
      category: 'Portfolio',
    },
    {
      id: 10,
      name: 'Template 10',
      backgroundImage: '/images/template/template-10.png',
      design:
        'https://cloud.contentql.io/projects/20157006/editor/page/4838120',
      preview: 'https://cleanorz.resonateaes.com/',
      type: 'pro',
      category: 'Portfolio',
    },
    {
      id: 11,
      name: 'Template 11',
      backgroundImage: '/images/template/template-11.png',
      design:
        'https://cloud.contentql.io/projects/20157023/editor/page/4838146',
      preview: 'https://musictutor.resonateaes.com/',
      type: 'pro',
      category: 'Portfolio',
    },
    {
      id: 12,
      name: 'Template 12',
      backgroundImage: '/images/template/template-12.png',
      design:
        'https://cloud.contentql.io/projects/20157027/editor/page/4838154',
      preview: 'https://lounchpodcast.resonateaes.com/',
      type: 'pro',
      category: 'Travel',
    },
    {
      id: 13,
      name: 'Template 13',
      backgroundImage: '/images/template/template-13.png',
      design:
        'https://cloud.contentql.io/projects/20157036/editor/page/4838162',
      preview: 'https://nursery.resonateaes.com/',
      type: 'pro',
      category: 'Travel',
    },
    {
      id: 14,
      name: 'Template 14',
      backgroundImage: '/images/template/template-14.png',
      design:
        'https://cloud.contentql.io/projects/20157044/editor/page/4838179',
      preview: 'https://dancetutor.resonateaes.com/',
      type: 'pro',
      category: 'Travel',
    },
    {
      id: 15,
      name: 'Template 15',
      backgroundImage: '/images/template/template-15.png',
      design:
        'https://cloud.contentql.io/projects/20157052/editor/page/4838187',
      preview: 'https://dojosensei.resonateaes.com/',
      type: 'pro',
      category: 'Arts',
    },
    {
      id: 16,
      name: 'Template 16',
      backgroundImage: '/images/template/template-16.png',
      design:
        'https://cloud.contentql.io/projects/20157062/editor/page/4838204',
      preview: 'https://linoor.resonateaes.com/',
      type: 'pro',
      category: 'Free',
    },
    {
      id: 17,
      name: 'Template 17',
      backgroundImage: '/images/template/template-17.png',
      design:
        'https://cloud.contentql.io/projects/20157077/editor/page/4838229',
      preview: 'https://growth2.resonateaes.com/',
      type: 'pro',
      category: 'Arts',
    },
    {
      id: 18,
      name: 'Template 18',
      backgroundImage: '/images/template/template-18.png',
      design:
        'https://cloud.contentql.io/projects/20157092/editor/page/4838244',
      preview: 'https://yoganew.resonateaes.com/',
      type: 'pro',
      category: 'Arts',
    },
    {
      id: 19,
      name: 'Template 19',
      backgroundImage: '/images/template/template-19.png',
      design:
        'https://cloud.contentql.io/projects/20157098/editor/page/4838252',
      preview: 'https://trefon.resonateaes.com/',
      type: 'pro',
      category: 'Sport & Health',
    },
    {
      id: 20,
      name: 'Template 20',
      backgroundImage: '/images/template/template-20.png',
      design:
        'https://cloud.contentql.io/projects/20157124/editor/page/4838280',
      preview: 'https://travely.resonateaes.com/',
      type: 'pro',
      category: 'Sport & Health',
    },
    {
      id: 21,
      name: 'Template 21',
      backgroundImage: '/images/template/template-21.png',
      design:
        'https://cloud.contentql.io/projects/20157403/editor/page/4838604',
      preview: 'https://telemed.resonateaes.com/',
      type: 'pro',
      category: 'Sport & Health',
    },
    {
      id: 22,
      name: 'Template 22',
      backgroundImage: '/images/template/template-22.png',
      design:
        'https://cloud.contentql.io/projects/20157423/editor/page/4838632',
      preview: 'https://tattooshop.resonateaes.com/',
      type: 'pro',
      category: 'Business',
    },
    {
      id: 23,
      name: 'Template 23',
      backgroundImage: '/images/template/template-23.png',
      design:
        'https://cloud.contentql.io/projects/20157439/editor/page/4838656',
      preview: 'https://sushi.resonateaes.com/',
      type: 'pro',
      category: 'Business',
    },
  ]

  const filterByName = (template: Template) => {
    const formattedSearchInput = searchInput.trim().toLowerCase()
    const formattedTemplateName = template.name.trim().toLowerCase()

    return formattedTemplateName.includes(formattedSearchInput)
  }

  return (
    <>
      <section id='lnk-2' className='pt-100 ws-wrapper content-section'>
        <div className='container'>
          <div className='template-wow '>
            <div className='template-heading'>
              <h2>{title}</h2>
              <input
                type='text'
                placeholder='Search for your template'
                className='search-input'
                onChange={e => {
                  setSearchInput(e.target.value)
                }}
              />
            </div>
            {searchInput.length > 0 && (
              <div id='page' className='page-wrapper'>
                <section
                  id='select'
                  className='bg-fixed select-section template-select'>
                  <div className='container'>
                    <div className='row'>
                      {/* LAYOUT-1 */}
                      {templates.filter(filterByName).length > 0 ? (
                        templates.filter(filterByName).map(template => (
                          <div
                            key={template.id}
                            id='l-1'
                            className='col-md-6 col-lg-4 select_link wow fadeInUp'
                            data-wow-delay='0.5s'>
                            <div className='hover-overlay card-view'>
                              <Image
                                className='img-fluid'
                                src={template.backgroundImage}
                                alt='layout-preview'
                                height={1000}
                                width={1000}
                              />
                              <div className='text-container'>
                                <div className='text-wow'>
                                  <Link href={template.design} target='_blank'>
                                    {link1_text}
                                  </Link>{' '}
                                </div>
                                <div className='text-wow'>
                                  <Link href={template.preview} target='_blank'>
                                    {link2_text}
                                  </Link>
                                </div>
                              </div>
                              <p className='payment-type'>{template.type}</p>
                            </div>
                            <h4> {template.name}</h4>
                          </div>
                        ))
                      ) : (
                        <div className='template-not-found'>
                          <p>{not_found_text}</p>
                        </div>
                      )}
                    </div>
                  </div>{' '}
                </section>{' '}
              </div>
            )}
            {searchInput.length === 0 && (
              <div className='template-group'>
                <div className='template-scroll'>
                  <h6>{heading1}</h6>
                  <CardSlider />
                </div>

                <div className='template-scroll'>
                  <h6>{heading2}</h6>
                  <StorySlider />
                </div>
              </div>
            )}
          </div>
          {/* End content wrapper */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}

export default TemplateSearch
