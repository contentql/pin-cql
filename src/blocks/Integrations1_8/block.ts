import { Block } from 'payload/types'

export const Integrations1_8_Block: Block = {
  slug: 'integrations1_8',
  imageURL: '/images/blocks/Integrations1_8.jpg',
  labels: {
    singular: 'Integrations1_8 Block',
    plural: 'Integrations1_8 Blocks',
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
      name: 'integrations',
      label: 'Integrations',
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
          name: 'subtitle',
          label: 'Subtitle',
          type: 'textarea',
          required: true,
        },
        {
          name: 'integration_image',
          label: 'Integration Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'integration image',
          },
        },
      ],
    },
  ],
}
