import { Block } from 'payload/types'

export const PricingBanner_Block: Block = {
  slug: 'pricingBanner',
  imageURL: '/images/blocks/PricingBanner.jpg',
  labels: {
    singular: 'PricingBanner Block',
    plural: 'PricingBanner Blocks',
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
