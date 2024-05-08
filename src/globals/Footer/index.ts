import { GlobalConfig } from 'payload/types'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo_pink',
      label: 'Logo Pink',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'upload logoPink',
      },
    },
    {
      name: 'logo_pink_white',
      label: 'Logo Pink White',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'upload logoPinkWhite',
      },
    },
    {
      name: 'footer_title1',
      label: 'Footer Title1',
      required: true,
      type: 'text',
    },
    {
      name: 'title1_links',
      label: 'Title1 Links',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'footer_name',
          label: 'Footer Name',
          type: 'text',
          required: true,
        },
        {
          name: 'footer_path',
          label: 'Footer Path',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'footer_title2',
      label: 'Footer Title2',
      required: true,
      type: 'text',
    },
    {
      name: 'title2_links',
      label: 'Title2 Links',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'footer_name',
          label: 'Footer Name',
          type: 'text',
          required: true,
        },
        {
          name: 'footer_path',
          label: 'Footer Path',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'footer_title3',
      label: 'Footer Title3',
      required: true,
      type: 'text',
    },
    {
      name: 'title3_links',
      label: 'Title3 Links',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'footer_name',
          label: 'Footer Name',
          type: 'text',
          required: true,
        },
        {
          name: 'footer_path',
          label: 'Footer Path',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'newsletter_title',
      label: 'Newsletter Title',
      type: 'text',
      required: true,
    },
    {
      name: 'copyright_description',
      label: 'Copyright Description',
      type: 'text',
      required: true,
    },
  ],
}
