import { Block } from 'payload/types'

export const Ct01_37_Block: Block = {
  slug: 'ct01_37',
  imageURL: '/images/blocks/Ct01_37.jpg',
  labels: {
    singular: 'Ct01_37 Block',
    plural: 'Ct01_37 Blocks',
  },
  fields: [
    {
      name: 'features',
      label: 'Features',
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
