import { Block } from 'payload/types'

export const Banner13_1_Block: Block = {
  slug: 'banner13_1',
  imageURL: '/images/blocks/Banner13_1.jpg',
  labels: {
    singular: 'Banner13_1 Block',
    plural: 'Banner13_1 Blocks',
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
      name: 'button_text',
      label: 'Button Text',
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
