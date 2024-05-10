import { Block } from 'payload/types'

export const Hero27_Block: Block = {
  slug: 'hero27',
  imageURL: '/images/blocks/Hero27.jpg',
  labels: {
    singular: 'Hero27 Block',
    plural: 'Hero27 Blocks',
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
      name: 'button1_text',
      label: 'Button1 Text',
      type: 'text',
      required: true,
    },
    {
      name: 'button2_text',
      label: 'Button2 Text',
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
      name: 'description3',
      label: 'Description3',
      type: 'text',
      required: true,
    },
  ],
}
