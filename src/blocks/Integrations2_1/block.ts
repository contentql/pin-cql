import { Block } from 'payload/types'

export const Integrations2_1_Block: Block = {
  slug: 'integrations2_1',
  imageURL: '/images/blocks/Integrations2_1.jpg',
  labels: {
    singular: 'Integrations2_1 Block',
    plural: 'Integrations2_1 Blocks',
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
      type: 'text',
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
          name: 'integration_image',
          label: 'Integration Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Integration image',
          },
        },
      ],
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
  ],
}
