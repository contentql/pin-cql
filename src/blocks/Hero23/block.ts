import { Block } from 'payload/types'

export const Hero23_Block: Block = {
  slug: 'hero23',
  imageURL: '/images/blocks/Hero23.jpg',
  labels: {
    singular: 'Hero23 Block',
    plural: 'Hero23 Blocks',
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Image',
      },
    },
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
