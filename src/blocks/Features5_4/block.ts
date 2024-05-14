import { Block } from 'payload/types'

export const Features5_4_Block: Block = {
  slug: 'features5_4',
  imageURL: '/images/blocks/Features5_4.jpg',
  labels: {
    singular: 'Features5_4 Block',
    plural: 'Features5_4 Blocks',
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
      type: 'textarea',
      required: true,
    },
    {
      name: 'feature1_title',
      label: 'Feature 1 Title',
      type: 'text',
      required: true,
    },
    {
      name: 'feature1_description',
      label: 'Feature 1 Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'feature1_image_light',
      label: 'Feature 1 Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'feature 1 image light',
      },
    },
    {
      name: 'feature1_image_dark',
      label: 'Feature 1 Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'feature 1 image dark',
      },
    },
    {
      name: 'feature2_title',
      label: 'Feature 2 Title',
      type: 'text',
      required: true,
    },
    {
      name: 'feature2_description',
      label: 'Feature 2 Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'feature2_image_light',
      label: 'Feature 2 Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'feature 2 image light',
      },
    },
    {
      name: 'feature2_image_dark',
      label: 'Feature 2 Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'feature 2 image dark',
      },
    },
  ],
}
