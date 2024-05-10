import { Block } from 'payload/types'

export const Statistic5_4_Block: Block = {
  slug: 'statistic5_4',
  imageURL: '/images/blocks/Statistic5_4.jpg',
  labels: {
    singular: 'Statistic5_4 Block',
    plural: 'Statistic5_4 Blocks',
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
