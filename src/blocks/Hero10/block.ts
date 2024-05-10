import { Block } from 'payload/types'

export const Hero10_Block: Block = {
  slug: 'hero10',
  imageURL: '/images/blocks/Hero10.jpg',
  labels: {
    singular: 'Hero10 Block',
    plural: 'Hero10 Blocks',
  },
  fields: [
    { name: 'title', label: 'Title', type: 'text', required: true },
    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
      required: true,
    },
    {
      name: 'button1_text',
      label: 'Button 1 Text',
      type: 'text',
      required: true,
    },
    {
      name: 'button2_text',
      label: 'Button 2 Text',
      type: 'text',
      required: true,
    },

    {
      name: 'description1',
      label: 'Description1',
      type: 'text',
      required: true,
    },
    {
      name: 'description2',
      label: 'Description2',
      type: 'text',
      required: true,
    },
    {
      name: 'link_text',
      label: 'Link Text',
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
