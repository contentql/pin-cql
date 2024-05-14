import { Block } from 'payload/types'

export const Ct05_1_Block: Block = {
  slug: 'ct05_1',
  imageURL: '/images/blocks/Ct05_1.jpg',
  labels: {
    singular: 'Ct05_1 Block',
    plural: 'Ct05_1 Blocks',
  },
  fields: [
    {
      name: 'caption',
      label: 'Caption',
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
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'points',
      label: 'Points',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'point',
          label: 'Point',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'background image',
      },
    },
  ],
}
