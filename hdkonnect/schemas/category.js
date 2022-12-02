import { BiCategory } from 'react-icons/bi'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BiCategory,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    }
  ]
}















// export default {
//   name: 'category',
//   title: 'Category',
//   type: 'document',
//   fields: [
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     },
//     {
//       name: 'parents',
//       title: 'Parent categories',
//       type: 'array',
//       of: [
//         {
//           type: 'reference',
//           to: [{type: 'category'}],
//         },
//       ],
//     },
//   ],
// }
