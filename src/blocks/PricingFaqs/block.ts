import { Block } from 'payload/types'

export const PricingFaqs_Block: Block = {
  slug: 'pricingFaqs',
  imageURL: '/images/blocks/PricingFaqs.jpg',
  labels: {
    singular: 'PricingFaqs Block',
    plural: 'PricingFaqs Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
      required: true,
    },
    {
      name: 'questions',
      label: 'Questions',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer_paragraphs',
          label: 'Answer Paragraphs',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'answer',
              label: 'Answer',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
