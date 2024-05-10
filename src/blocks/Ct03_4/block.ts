import { Block } from 'payload/types'

export const Ct03_4_Block: Block = {
  slug: 'ct03_4',
  imageURL: '/images/blocks/Ct03_4.jpg',
  labels: {
    singular: 'Ct03_4 Block',
    plural: 'Ct03_4 Blocks',
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
      name: 'points',
      label: 'Points',
      type: 'array',
      required: true,
      fields: [
        { name: 'point', label: 'Point', type: 'textarea', required: true },
      ],
    },
    {
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Background Image',
      },
    },
  ],
}
