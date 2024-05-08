import { GlobalConfig } from 'payload/types'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo_pink',
      label: 'Logo Pink',
      required: true,
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'header logoPink',
      },
    },
    {
      name: 'logo_pink_white',
      label: 'Logo Pink White',
      required: true,
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'header logoPinkWhite',
      },
    },
    {
      name: 'logo_white',
      label: 'Logo White',
      required: true,
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'header logoWhite',
      },
    },
    {
      name: 'product_links',
      label: 'Product Links',
      required: true,
      type: 'array',
      fields: [
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
          name: 'path',
          label: 'Path',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'explore_path',
      label: 'Explore Path',
      type: 'text',
      required: true,
    },
    {
      name: 'resources1_links',
      label: 'Resources1 Links',
      required: true,
      type: 'array',
      fields: [
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
          name: 'path',
          label: 'Path',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'resources2_links',
      label: 'Resources2 Links',
      required: true,
      type: 'array',
      fields: [
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
          name: 'path',
          label: 'Path',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'templates_path',
      label: 'Templates Path',
      type: 'text',
      required: true,
    },
    {
      name: 'pricing_path',
      label: 'Pricing Path',
      type: 'text',
      required: true,
    },
  ],
}
