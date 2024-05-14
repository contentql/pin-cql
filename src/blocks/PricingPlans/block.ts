import { Block } from 'payload/types'

export const PricingPlans_Block: Block = {
  slug: 'pricingPlans',
  imageURL: '/images/blocks/PricingPlans.jpg',
  labels: {
    singular: 'PricingPlans Block',
    plural: 'PricingPlans Blocks',
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
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'payment_cards',
      label: 'Payment Cards',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'card_image',
          label: 'Card Image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Card image',
          },
        },
      ],
    },
    {
      name: 'details',
      label: 'Details',
      type: 'array',
      required: true,
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
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
