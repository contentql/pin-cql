import { Block } from 'payload/types'

export const TemplateSearch_Block: Block = {
  slug: 'templateSearch',
  imageURL: '/images/blocks/TemplateSearch.jpg',
  labels: {
    singular: 'TemplateSearch Block',
    plural: 'TemplateSearch Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
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
      name: 'heading1',
      label: 'Heading 1',
      type: 'text',
      required: true,
    },
    {
      name: 'heading2',
      label: 'Heading2',
      type: 'text',
      required: true,
    },
    {
      name: 'not_found_text',
      label: 'Not Found Text',
      type: 'text',
      required: true,
    },
  ],
}
