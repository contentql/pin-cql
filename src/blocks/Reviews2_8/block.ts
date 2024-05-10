import { Block } from 'payload/types'

export const Reviews2_8_Block: Block = {
  slug: 'reviews2_8',
  imageURL: '/images/blocks/Reviews2_8.jpg',
  labels: {
    singular: 'Reviews2_8 Block',
    plural: 'Reviews2_8 Blocks',
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
      name: 'reviews',
      label: 'Reviews',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'review',
          label: 'Review',
          type: 'textarea',
          required: true,
        },
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'designation',
          label: 'Designation',
          type: 'text',
          required: true,
        },
        {
          name: 'reviewer_image',
          label: 'Reviewer Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'reviewer image',
          },
        },
      ],
    },
  ],
}
