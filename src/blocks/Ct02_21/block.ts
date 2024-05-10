import { Block } from 'payload/types'

export const Ct02_21_Block: Block = {
  slug: 'ct02_21',
  imageURL: '/images/blocks/Ct02_21.jpg',
  labels: {
    singular: 'Ct02_21 Block',
    plural: 'Ct02_21 Blocks',
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
