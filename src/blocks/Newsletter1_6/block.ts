import { Block } from 'payload/types'

export const Newsletter1_6_Block: Block = {
  slug: 'newsletter1_6',
  imageURL: '/images/blocks/Newsletter1_6.jpg',
  labels: {
    singular: 'Newsletter1_6 Block',
    plural: 'Newsletter1_6 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
  ],
}
