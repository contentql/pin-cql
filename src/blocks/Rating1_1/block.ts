import { Block } from 'payload/types'

export const Rating1_1_Block: Block = {
  slug: 'rating1_1',
  imageURL: '/images/blocks/Rating1_1.jpg',
  labels: {
    singular: 'rating1_1 Block',
    plural: 'rating1_1 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'ratings',
      label: 'Ratings',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'light_theme_image',
          label: 'Light Theme Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Light Theme image',
          },
        },
        {
          name: 'dark_theme_image',
          label: 'Dark Theme Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Dark Theme image',
          },
        },
        {
          name: 'rating',
          label: 'Rating',
          type: 'number',
          required: true,
        },
        {
          name: 'rating_out_of',
          label: 'Rating Out Of',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}
