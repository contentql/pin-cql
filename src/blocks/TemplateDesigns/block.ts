import { Block } from 'payload/types'

export const TemplateDesigns_Block: Block = {
  slug: 'templateDesigns',
  imageURL: '/images/blocks/TemplateDesigns.jpg',
  labels: {
    singular: 'TemplateDesigns Block',
    plural: 'TemplateDesigns Blocks',
  },
  fields: [
    {
      name: 'link1',
      label: 'Link 1',
      type: 'text',
      required: true,
    },
    {
      name: 'link2',
      label: 'Link 2',
      type: 'text',
      required: true,
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
  ],
}
