import { config, fields, collection } from '@keystatic/core';

export default config({
  ui: {
    brand: {
      name: 'The Website Guy',
    },
  },
  storage: {
    kind: 'local' 
    // kind: 'github',
    // repo: 'TheWebsiteGuy/twg-astro'
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'src/assets/images/posts',
          publicPath: 'src/assets/images/posts/', 
        }),
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.date({ label: 'Published date' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '@assets/images/posts/'
            },
          },
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          // Labelling options
          {
            label: 'Tag',
            itemLabel: props => props.value
          }
        ),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'src/assets/images/projects',
          publicPath: 'src/assets/images/projects/', 
        }),
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.date({ label: 'Published date' }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/projects',
              publicPath: '@assets/images/projects/'
            },
          },
        }),
      },
    }),
  },
  

});
