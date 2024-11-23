export default function manifest() {
    return {
      name: 'Earnest Cards',
      short_name: 'Earnest',
      description: 'Questions for deeper conversations & personal growth',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#BEB3FF',
      screenshots: [
        {
         "src": "image.png",
          "sizes": "614x818",
          "type": "image/png",
          "form_factor": "wide",
          "label": "Earnest Cards"
        },
        {
            "src": "image.png",
             "sizes": "614x818",
             "type": "image/png",
             "label": "Earnest Cards"
           }
    ],
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }