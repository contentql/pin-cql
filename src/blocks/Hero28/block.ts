import { Block } from 'payload/types'

export const Hero28_Block: Block = {
  slug: 'hero28',
  imageURL: '/images/blocks/Hero28.jpg',
  labels: {
    singular: 'Hero28 Block',
    plural: 'Hero28 Blocks',
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
