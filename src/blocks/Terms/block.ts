import { Block } from 'payload/types'

export const Terms_Block: Block = {
  slug: 'terms',
  imageURL: '/images/blocks/Terms.jpg',
  labels: {
    singular: 'Terms Block',
    plural: 'Terms Blocks',
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
      name: 'terms',
      label: 'Terms',
      required: true,
      type: 'array',
      fields: [
        {
          name: 's_number',
          label: 'S Number',
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
          name: 'descriptions',
          label: 'descriptions',
          required: true,
          type: 'array',
          fields: [
            {
              name: 'description',
              label: 'Description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
