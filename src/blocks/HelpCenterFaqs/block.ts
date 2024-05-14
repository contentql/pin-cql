import { Block } from 'payload/types'

export const HelpCenterFaqs_Block: Block = {
  slug: 'helpCenterFaqs',
  imageURL: '/images/blocks/HelpCenterFaqs.jpg',
  labels: {
    singular: 'HelpCenterFaqs Block',
    plural: 'HelpCenterFaqs Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'links',
      label: 'Links',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'link_text',
          label: 'Link Text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'list_of_questions',
      label: 'List of Questions',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'questions',
          label: 'Questions',
          required: true,
          type: 'array',
          fields: [
            {
              name: 'question',
              label: 'Question',
              type: 'text',
              required: true,
            },
            {
              name: 'answer',
              label: 'Answer',
              type: 'array',
              required: true,
              fields: [
                {
                  name: 'answer_paragraph',
                  label: 'Answer Paragraph',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
