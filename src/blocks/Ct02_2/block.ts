import { Block } from 'payload/types'

export const Ct02_2_Block: Block = {
  slug: 'ct02_2',
  imageURL: '/images/blocks/Ct02_2.jpg',
  labels: {
    singular: 'Ct02_2 Block',
    plural: 'Ct02_2 Blocks',
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
