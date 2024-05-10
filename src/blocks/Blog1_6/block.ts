import { Block } from 'payload/types'

export const Blog1_6_Block: Block = {
  slug: 'blog1_6',
  imageURL: '/images/blocks/Blog1_6.jpg',
  labels: {
    singular: 'Blog1_6 Block',
    plural: 'Blog1_6 Blocks',
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
      name: 'blogs',
      label: 'Blogs',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'blog_image',
          label: 'Blog Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Blog image',
          },
        },
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
          name: 'description',
          label: 'Description',
          type: 'text',
          required: true,
        },
        {
          name: 'bloger_name',
          label: 'Bloger Name',
          type: 'text',
          required: true,
        },
        {
          name: 'date',
          label: 'Date',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
