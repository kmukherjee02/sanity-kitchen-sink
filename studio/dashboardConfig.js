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
                  buildHookId: '62fa4f660d269952f7423386',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-d8tn2eip',
                  apiId: '04945d79-2e21-47d5-b9be-d040d82e17f0'
                },
                {
                  buildHookId: '62fa4f67eb22375088c2b105',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yhyivpk3',
                  apiId: 'a37e76df-f495-4d0b-8f57-1c49c9d17496'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmukherjee02/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yhyivpk3.netlify.app', category: 'apps'}
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
