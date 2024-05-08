import { Block } from 'payload/types'

export const Faqs3_1_Block: Block = {
  slug: 'faqs3_1',
  imageURL: '/images/blocks/Faqs3_1.jpg',
  labels: {
    singular: 'Faqs3_1 Block',
    plural: 'Faqs3_1 Blocks',
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
