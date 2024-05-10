import { Block } from 'payload/types'

export const Ct02_19_Block: Block = {
  slug: 'ct02_19',
  imageURL: '/images/blocks/Ct02_19.jpg',
  labels: {
    singular: 'Ct02_19 Block',
    plural: 'Ct02_19 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
      required: true,
    },
    {
      name: 'heading1',
      label: 'Heading1',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph1',
      label: 'Paragraph1',
      type: 'textarea',
      required: true,
    },
    {
      name: 'heading2',
      label: 'Heading2',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph2',
      label: 'Paragraph2',
      type: 'textarea',
      required: true,
    },
    {
      name: 'points',
      label: 'Points',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'point',
          label: 'Point',
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
