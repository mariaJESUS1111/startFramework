
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/startFramework/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/startFramework"
  },
  {
    "renderMode": 2,
    "route": "/startFramework/about"
  },
  {
    "renderMode": 2,
    "route": "/startFramework/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/startFramework/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/startFramework",
    "route": "/startFramework/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5458, hash: 'e77e55bc1fd4f21d16f6bef3ea92def275e9d27165b978223ce568b77208151f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1078, hash: 'bb8de29b0c2438203165f9d5683f4e7023ed206f98aeae062e4205acfbe854d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 17104, hash: 'b765e94289c164bb5962cce094138dd3ce29a1a8e90bfc08a4526d4e5c7ece11', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16342, hash: 'c8bd67b1615acaea70c28be9010c87d37261c479c90b302db4b0a0475d947974', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 25344, hash: '49936caba31abb67d53d8db9e13b7ac0f2822e36800d561ccaaafdae197c3e29', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21041, hash: 'eb1b68c5c25dc8fdddd6a23af21bae64c35f2910612d37bc5ecea88d9e916612', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-27VQMS7S.css': {size: 305101, hash: '9ANwlXI4yTA', text: () => import('./assets-chunks/styles-27VQMS7S_css.mjs').then(m => m.default)}
  },
};
