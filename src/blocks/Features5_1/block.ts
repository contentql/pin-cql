import { Block } from 'payload/types'

export const Features5_1_Block: Block = {
  slug: 'features5_1',
  imageURL: '/images/blocks/Features5_1.jpg',
  labels: { singular: 'Features5_1 Block', plural: 'Features5_1 Blocks' },
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
      name: 'heading1',
      label: 'Heading 1',
      type: 'text',
      required: true,
    },
    {
      name: 'description1',
      label: 'Description 1',
      type: 'text',
      required: true,
    },
    {
      name: 'light_theme_image1',
      label: 'Light Theme Image 1',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Light Theme Image',
      },
    },
    {
      name: 'dark_theme_image1',
      label: 'Dark Theme Image 1',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Dark Theme Image',
      },
    },
    {
      name: 'heading2',
      label: 'Heading 2',
      type: 'text',
      required: true,
    },
    {
      name: 'description2',
      label: 'Description 2',
      type: 'text',
      required: true,
    },
    {
      name: 'light_theme_image2',
      label: 'Light Theme Image 2',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Light Theme Image',
      },
    },
    {
      name: 'dark_theme_image2',
      label: 'Dark Theme Image 2',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Dark Theme Image',
      },
    },
  ],
}
