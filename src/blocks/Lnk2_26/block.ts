import { Block } from 'payload/types'

export const Lnk2_26_Block: Block = {
  slug: 'lnk2_26',
  imageURL: '/images/blocks/Lnk2_26.jpg',
  labels: {
    singular: 'Lnk2_26 Block',
    plural: 'Lnk2_26 Blocks',
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
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Background Image',
      },
    },
  ],
}
