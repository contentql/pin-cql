import { Block } from 'payload/types'

export const Reviews2_7_Block: Block = {
  slug: 'reviews2_7',
  imageURL: '/images/blocks/Reviews2_7.jpg',
  labels: {
    singular: 'Reviews2_7 Block',
    plural: 'Reviews2_7 Blocks',
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
      name: 'reviews',
      label: 'Reviews',
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
