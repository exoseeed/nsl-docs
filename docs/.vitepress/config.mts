import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-EN',
  title: "NSL Documentation",
  description: "A NSL documentation",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Manual', link: '/manual/' },
      { text: 'Scripting API', link: '/scripting/' }
    ],

    sidebar: {
      '/manual/': [
        {
          text: 'Manual',
          items: [
            { text: 'Create Vehicle From Scratch', link: '/manual/create_vehicle_from_scratch' },
            { text: 'Setup Vehicle', link: '/manual/setup_vehicle' }
          ]
        }
      ],
      '/scripting/': [
        {
          text: 'Scripting API',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
