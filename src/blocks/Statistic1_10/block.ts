import { Block } from 'payload/types'

export const Statistic1_10_Block: Block = {
  slug: 'statistic1_10',
  imageURL: '/images/blocks/Statistic1_10.jpg',
  labels: {
    singular: 'Statistic1_10 Block',
    plural: 'Statistic1_10 Blocks',
  },
  fields: [
    {
      name: 'statistics',
      label: 'Statistics',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'integer',
          label: 'Integer',
          type: 'number',
          required: true,
        },
        {
          name: 'character',
          label: 'Character',
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
    },
  ],
}
