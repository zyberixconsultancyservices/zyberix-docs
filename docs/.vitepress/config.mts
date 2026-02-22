import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zyberix Strategic Resources",
  description: "Demo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
    text: 'Introduction',
    items: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'How to use this KB', link: '/how-to-use' }
    ]
  },
  {
    text: 'Strategic Units',
    items: [
      { text: 'Operations Framework', link: '/onboarding' },
      { text: 'Financial Integrity', link: '/finance' },
      { text: 'Risk Management', link: '/risk' }
    ]
  }
]

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
