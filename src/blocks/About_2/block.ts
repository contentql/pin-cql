import { Block } from 'payload/types'

export const About_2_Block: Block = {
  slug: 'about_2',
  imageURL: '/images/blocks/About_2.jpg',
  labels: {
    singular: 'About_2 Block',
    plural: 'About_2 Blocks',
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
      name: 'image_1',
      label: 'Image 1',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Image 1',
      },
    },
    {
      name: 'image_2',
      label: 'Image 2',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Image 2',
      },
    },
    {
      name: 'image_3',
      label: 'Image 3',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Image 3',
      },
    },
    {
      name: 'image_4',
      label: 'Image 4',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Image 4',
      },
    },
    {
      name: 'text',
      label: 'Text',
      type: 'text',
      required: true,
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'designation',
      label: 'Designation',
      type: 'text',
      required: true,
    },
  ],
}
