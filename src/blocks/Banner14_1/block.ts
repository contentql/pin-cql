import { Block } from 'payload/types'

export const Banner14_1_Block: Block = {
  slug: 'banner14_1',
  imageURL: '/images/blocks/Banner14_1.jpg',
  labels: {
    singular: 'Banner14_1 Block',
    plural: 'Banner14_1 Blocks',
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
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
  ],
}
