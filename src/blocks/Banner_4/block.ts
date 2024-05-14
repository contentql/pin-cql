import { Block } from 'payload/types'

export const Banner_4_Block: Block = {
  slug: 'banner_4',
  imageURL: '/images/blocks/Banner_4.jpg',
  labels: {
    singular: 'Banner_4 Block',
    plural: 'Banner_4 Blocks',
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
