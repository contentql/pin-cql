import { Block } from 'payload/types'

export const Newsletter1_2_Block: Block = {
  slug: 'newsletter1_2',
  imageURL: '/images/blocks/Newsletter1_2.jpg',
  labels: {
    singular: 'Newsletter1_2 Block',
    plural: 'Newsletter1_2 Blocks',
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
