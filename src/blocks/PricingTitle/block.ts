import { Block } from 'payload/types'

export const PricingTitle_Block: Block = {
  slug: 'pricingTitle',
  imageURL: '/images/blocks/PricingTitle.jpg',
  labels: {
    singular: 'PricingTitle Block',
    plural: 'PricingTitle Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'plan1_text',
      label: 'Plan 1 Text',
      type: 'text',
      required: true,
    },
    {
      name: 'plan2_text',
      label: 'Plan 2 Text',
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
