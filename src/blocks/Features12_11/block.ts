import { Block } from 'payload/types'

export const Features12_11_Block: Block = {
  slug: 'features12_11',
  imageURL: '/images/blocks/Features12_11.jpg',
  labels: {
    singular: 'Features12_11 Block',
    plural: 'Features12_11 Blocks',
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
      name: 'link_text',
      label: 'Link Text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'features',
      label: 'Features',
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
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
