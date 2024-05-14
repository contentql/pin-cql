import { Block } from 'payload/types'

export const HelpCenterBanner_Block: Block = {
  slug: 'helpCenterBanner',
  imageURL: '/images/blocks/HelpCenterBanner.jpg',
  labels: {
    singular: 'HelpCenterBanner Block',
    plural: 'HelpCenterBanner Blocks',
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
