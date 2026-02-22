import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zyberix Strategic Resources",
  description: "Strategic Knowledge Repository",

  // Favicon section (Tab icon ke liye)
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],

  themeConfig: {
    // Branding: Official Logo update
    logo: '/logo.svg', 
    siteTitle: false, // Site tittle hide
    
    // ⬇️ SEARCH CONFIGURATION START ⬇️
    search: {
      provider: 'local'
    },
    // ⬆️ SEARCH CONFIGURATION END ⬆️

    nav:[
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Knowledge Base', link: '/' },
      { text: 'Documentation', link: '/' },
    ],

    sidebar: [
      {
    text: 'Introduction',
    items: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'How to use this KB', link: '/how-to-use' },
    ]
  },
  {
    text: 'Strategic Units',
    items: [
      { text: 'Operations Framework', link: '/onboarding' },
      { text: 'Financial Integrity', link: '/finance' },
      { text: 'Risk Management', link: '/risk' },
    ]
  }
],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zyberixconsultancyservices' }
    ], // Yahan comma (,) check karein

    // ⬇️ FOOTER SECTION START ⬇️
    footer: {
      message: '© 2024–2025 Zyberix Consultancy Services Pvt. Ltd.',
      copyright: 'All Rights Reserved. | ❤️ Corporate Excellence'
    }
    // ⬆️ FOOTER SECTION END ⬆️
  },
})
