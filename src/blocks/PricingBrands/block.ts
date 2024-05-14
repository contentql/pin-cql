import { Block } from 'payload/types'

export const PricingBrands_Block: Block = {
  slug: 'pricingBrands',
  imageURL: '/images/blocks/PricingBrands.jpg',
  labels: {
    singular: 'PricingBrands Block',
    plural: 'PricingBrands Blocks',
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
