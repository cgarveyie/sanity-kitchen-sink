export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f369f7d469c29bc4d855ba5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hahe48a2',
                  apiId: '61320145-63ac-4696-82e1-9dfc878c8f24'
                },
                {
                  buildHookId: '5f369f7d9522449a6acc6de7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-t3f5feej',
                  apiId: 'a5118bb3-c58d-4825-aff1-7e7ac04aa31f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cgarveyie/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-t3f5feej.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
