import { Block } from 'payload/types'

export const Features11_14_Block: Block = {
  slug: 'features11_14',
  imageURL: '/images/blocks/Features11_14.jpg',
  labels: {
    singular: 'Features11_14 Block',
    plural: 'Features11_14 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'textarea',
      required: true,
    },
    {
      name: 'features',
      label: 'Features',
      required: true,
      type: 'array',
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
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
