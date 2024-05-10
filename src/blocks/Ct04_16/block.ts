import { Block } from 'payload/types'

export const Ct04_16_Block: Block = {
  slug: 'ct04_16',
  imageURL: '/images/blocks/Ct04_16.jpg',
  labels: {
    singular: 'Ct04_16 Block',
    plural: 'Ct04_16 Blocks',
  },
  fields: [
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      required: true,
      fields: [
        {
          name: 's_no',
          label: 'S_No',
          type: 'number',
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
