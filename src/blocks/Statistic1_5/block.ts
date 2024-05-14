import { Block } from 'payload/types'

export const Statistic1_5_Block: Block = {
  slug: 'statistic1_5',
  imageURL: '/images/blocks/Statistic1_5.jpg',
  labels: {
    singular: 'Statistic1_5 Block',
    plural: 'Statistic1_5 Blocks',
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
