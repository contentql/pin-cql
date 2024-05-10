import { Block } from 'payload/types'

export const About_3_Block: Block = {
  slug: 'about_3',
  imageURL: '/images/blocks/About_3.jpg',
  labels: {
    singular: 'About_3 Block',
    plural: 'About_3 Blocks',
  },
  fields: [
    {
      name: 'heading_1',
      label: 'Heading 1',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph',
      label: 'Paragraph',
      type: 'textarea',
      required: true,
    },
    {
      name: 'points',
      label: 'Points',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'point',
          label: 'Point',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'heading_2',
      label: 'Heading 2',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraphs',
      label: 'Paragraphs',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'paragraph',
          label: 'Paragraph',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
