import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud', // Required for static hosting like GitHub Pages
  },
  cloud: {
    project: 'coshix-blog/coshix', // We will set this up in the next step
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Publish Date', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true }),
        authors: fields.array(fields.text({ label: 'Author' }), { label: 'Authors', itemLabel: props => props.value }),
        image: fields.image({
          label: 'Featured Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        categories: fields.array(fields.text({ label: 'Category' }), { label: 'Categories' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        body: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/posts',
            publicPath: '/images/posts/',
          },
        }),
      },
    }),
  },
});