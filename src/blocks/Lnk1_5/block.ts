import { Block } from 'payload/types'

export const Lnk1_5_Block: Block = {
  slug: 'lnk1_5',
  imageURL: '/images/blocks/Lnk1_5.jpg',
  labels: {
    singular: 'Lnk1_5 Block',
    plural: 'Lnk1_5 Blocks',
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
      label: 'Subtitle',
      type: 'textarea',
      required: true,
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
