import { Block } from 'payload/types'

export const Statistic5_3_Block: Block = {
  slug: 'statistic5_3',
  imageURL: '/images/blocks/Statistic5_3.jpg',
  labels: {
    singular: 'Statistic5_3 Block',
    plural: 'Statistic5_3 Blocks',
  },
  fields: [
    {
      name: 'statistics',
      label: 'Statistics',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'number',
          label: 'Number',
          type: 'number',
          required: true,
        },
        {
          name: 'fraction_number',
          label: 'Fraction Number',
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
    },
  ],
}
