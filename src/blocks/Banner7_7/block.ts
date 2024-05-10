import { Block } from 'payload/types'

export const Banner7_7_Block: Block = {
  slug: 'banner7_7',
  imageURL: '/images/blocks/Banner7_7.jpg',
  labels: {
    singular: 'Banner7_7 Block',
    plural: 'Banner7_7 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
  ],
}
