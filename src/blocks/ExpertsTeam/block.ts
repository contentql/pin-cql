import { Block } from 'payload/types'

export const ExpertsTeam_Block: Block = {
  slug: 'expertsTeam',
  imageURL: '/images/blocks/ExpertsTeam.jpg',
  labels: {
    singular: 'ExpertsTeam Block',
    plural: 'ExpertsTeam Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'team_cards',
      label: 'Team Cards',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'image',
          },
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
      ],
    },
  ],
}
