import { Block } from 'payload/types'

export const Lnk2_5_Block: Block = {
  slug: 'lnk2_5',
  imageURL: '/images/blocks/Lnk2_5.jpg',
  labels: {
    singular: 'Lnk2_5 Block',
    plural: 'Lnk2_5 Blocks',
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
      label: 'P paragraphs',
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
