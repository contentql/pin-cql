import { Block } from 'payload/types'

export const Hero15_Block: Block = {
  slug: 'hero15',
  imageURL: '/images/blocks/Hero15.jpg',
  labels: {
    singular: 'Hero15 Block',
    plural: 'Hero15 Block',
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
    { name: 'description', label: 'Description', type: 'text', required: true },
    {
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
