import { Block } from 'payload/types'

export const Features7_5_Block: Block = {
  slug: 'features7_5',
  imageURL: '/images/blocks/Features7_5.jpg',
  labels: {
    singular: 'Features7_5 Block',
    plural: 'Features7_5 Blocks',
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
      name: 'features',
      label: 'Features',
      type: 'array',
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
      ],
    },
  ],
}
