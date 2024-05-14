import { Block } from 'payload/types'

export const Careers_1_Block: Block = {
  slug: 'careers_1',
  imageURL: '/images/blocks/Careers_1.jpg',
  labels: {
    singular: 'Careers_1 Block',
    plural: 'Careers_1 Blocks',
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
      name: 'details',
      label: 'Details',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'department',
          label: 'Department',
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
          name: 'location',
          label: 'Location',
          type: 'text',
          required: true,
        },
        {
          name: 'working',
          label: 'Working',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
