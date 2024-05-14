import { Block } from 'payload/types'

export const PricingTables_Block: Block = {
  slug: 'pricingTables',
  imageURL: '/images/blocks/PricingTables.jpg',
  labels: {
    singular: 'PricingTables Block',
    plural: 'PricingTables Blocks',
  },
  fields: [
    {
      name: 'plans',
      label: 'Plans',
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
          name: 'currency',
          label: 'Currency',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          label: 'Price',
          type: 'number',
          required: true,
        },
        {
          name: 'plan_text',
          label: 'Plan Text',
          type: 'text',
          required: true,
        },
        {
          name: 'description1',
          label: 'Description1',
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
          name: 'description2',
          label: 'Description2',
          type: 'text',
          required: true,
        },
        {
          name: 'points',
          label: 'Points',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'point',
              label: 'Point',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
