import { Block } from 'payload/types'

export const Banner3_6_Block: Block = {
  slug: 'banner3_6',
  imageURL: '/images/blocks/Banner3_6.jpg',
  labels: {
    singular: 'Banner3_6 Block',
    plural: 'Banner3_6 Blocks',
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
