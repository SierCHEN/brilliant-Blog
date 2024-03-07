module.exports = {
  lang: 'zh-CN',
  title: 'Brilliant Brain',
  description: 'Thanks for reading my doc:)',
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/intro.md',
      },
      {
        text: '前端',
        items: [
          {
            text: '语言基础',
            items: [
              { text: 'CSS', link: '/web/language/css.md' },
              { text: 'JavaScript', link: '/web/language/javascript.md' }
            ],
          },
          {
            text: '开发框架',
            items: [
              { text: 'vue2', link: '/web/framework/vue2.md' },
              { text: 'vue3', link: '/web/framework/vue3.md' }
            ],
          },
          {
            text: '关于浏览器',
            items: [
              { text: '浏览器渲染', link: '/web/browser/browser-rendering.md' }
            ]
          }
        ],
      },
      {
        text: '原理',
        items: [
          { text: '信息论', link: '/theory/Informatics.md'},
          { text: '计算机组成原理', link: '/theory/computer-organization.md' }
        ]
      },
      {
        text: '项目',
        items: [
          { text: '代码规范配置项目', link: '/project/normalizeConfig.md' }
        ]
      }
    ],
    sidebar: [
      {
        title: '指南',
        path: '/guide/',
        sidebarDepth: 2,
        collapsable: true,
        children: [
          '/guide/intro.md'
        ]
      },
      {
        title: '前端',
        sidebarDepth: 2,
        collapsable: true,
        children: [
          {
            title: '语言基础',
            sidebarDepth: 3,
            collapsible: true,
            children: [
              '/web/language/css.md',
              '/web/language/javascript.md'
            ],
          },
          {
            title: '开发框架',
            collapsible: true,
            children: [
              '/web/framework/vue2.md',
              '/web/framework/vue3.md',
              '/web/framework/react-native.md'
            ],
          },
          {
            title: '关于浏览器',
            collapsible: true,
            children: [
              '/web/browser/browser-work.md',
              '/web/browser/browser-rendering.md'
            ],
          },
        ]
      },
      {
        title: '原理',
        sidebarDepth: 2,
        collapsable: true,
        children: [
          {
            title: '信息论',
            sidebarDepth: 3,
            collapsible: true,
            children: [
              '/theory/Informatics.md'
            ],
          },
          {
            title: '计算机组成原理',
            collapsible: true,
            children: [
              '/theory/computer-organization.md'
            ],
          },
        ]
      },
      {
        title: '项目',
        sidebarDepth: 2,
        collapsable: true,
        children: [
          {
            title: '代码规范配置项目',
            sidebarDepth: 3,
            collapsible: true,
            children: [
              '/project/normalizeConfig.md'
            ],
          }
        ]
      }
    ],
    smoothScroll: true,
  },
  plugins: ['@vuepress/back-to-top'],
  extendMarkdown(md) {
    md.set({ html: true });
    md.use(require("markdown-it-katex"));
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../assets/img'
      }
    }
  }
}