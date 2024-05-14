import { Block } from 'payload/types'

export const TemplatePlain_Block: Block = {
  slug: 'templatePlain',
  imageURL: '/images/blocks/TemplatePlain.jpg',
  labels: {
    singular: 'TemplatePlain Block',
    plural: 'TemplatePlain Blocks',
  },
  fields: [
    {
      name: 'link1_text',
      label: 'Link 1 Text',
      type: 'text',
      required: true,
    },
    {
      name: 'link2_text',
      label: 'Link 2 Text',
      type: 'text',
      required: true,
    },
    {
      name: 'link3_text',
      label: 'Link 3 Text',
      type: 'text',
      required: true,
    },
    {
      name: 'title1',
      label: 'Title1',
      type: 'text',
      required: true,
    },
    {
      name: 'title2',
      label: 'Title2',
      type: 'text',
      required: true,
    },
    {
      name: 'title3',
      label: 'Title13',
      type: 'text',
      required: true,
    },
  ],
}
