import { Block } from 'payload/types'

export const Ct01_28_Block: Block = {
  slug: 'ct01_28',
  imageURL: '/images/blocks/Ct01_28.jpg',
  labels: {
    singular: 'Ct01_28 Block',
    plural: 'Ct01_28 Blocks',
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
      name: 'paragraphs',
      label: 'Paragraphs',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'paragraph',
          label: 'Paragraph',
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
