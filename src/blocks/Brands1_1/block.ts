import { Block } from 'payload/types'

export const Brands1_1_Block: Block = {
  slug: 'brands1_1',
  imageURL: '/images/blocks/Brands1_1.jpg',
  labels: {
    singular: 'Brands1_1 Block',
    plural: 'Brands1_1 Blocks',
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
