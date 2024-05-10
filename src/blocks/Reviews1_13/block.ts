import { Block } from 'payload/types'

export const Reviews1_13_Block: Block = {
  slug: 'reviews1_13',
  imageURL: '/images/blocks/Reviews1_13.jpg',
  labels: {
    singular: 'Reviews1_13 Block',
    plural: 'Reviews1_13 Blocks',
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
