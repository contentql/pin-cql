import { Block } from 'payload/types'

export const Ct02_20_Block: Block = {
  slug: 'ct02_20',
  imageURL: '/images/blocks/Ct02_20.jpg',
  labels: {
    singular: 'Ct02_20 Block',
    plural: 'Ct02_20 Blocks',
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
      name: 'link_text',
      label: 'Link Text',
      type: 'text',
      required: true,
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
