import { Block } from 'payload/types'

export const Banner13_3_Block: Block = {
  slug: 'banner13_3',
  imageURL: '/images/blocks/Banner13_3.jpg',
  labels: {
    singular: 'Banner13_3 Block',
    plural: 'Banner13_3 Blocks',
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
