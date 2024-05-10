import { Block } from 'payload/types'

export const Lnk1_10_Block: Block = {
  slug: 'lnk1_10',
  imageURL: '/images/blocks/Lnk1_10.jpg',
  labels: {
    singular: 'Lnk1_10 Block',
    plural: 'Lnk1_10 Blocks',
  },
  fields: [
    {
      name: 'caption',
      label: 'Caption',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'textarea',
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
        description: 'background image',
      },
    },
  ],
}
