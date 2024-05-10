import { Block } from 'payload/types'

export const Brands1_12_Block: Block = {
  slug: 'brands1_12',
  imageURL: '/images/blocks/Brands1_12.jpg',
  labels: {
    singular: 'Brands1_12 Block',
    plural: 'Brands1_12 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
  ],
}
