import { Block } from 'payload/types'

export const Cookies_Block: Block = {
  slug: 'cookies',
  imageURL: '/images/blocks/Cookies.jpg',
  labels: {
    singular: 'Cookies Block',
    plural: 'Cookies Blocks',
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
      name: 'descriptions',
      label: 'Descriptions',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
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
