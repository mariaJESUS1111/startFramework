
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
    'index.csr.html': {size: 5458, hash: '54a990fc368ec1f48d5aec2b3b8f44865559d257b338a38a8b0f83c2d7428116', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1078, hash: '2cc2c8af0677e8bf65868cdcf4b6b205f09e3cdde67dd88e4157fb3fff491bbe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 17114, hash: '12369baf25377b2f79d40ef511fca712e605764183c3e80fb3b1e83ecd6e91e4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 25354, hash: '59cab1a891b6a3c35df6fe04a70e65420586edee169cd74c423bcdca520fd455', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21051, hash: '47785ab3ec45e62cce2ddbbebe9b4c39d25da4ef66f821c6a3e235f3e7f20296', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16352, hash: '21e5b5331ecb14c1d935921f5fd441230d591d945be13bd708d6ae249b91872c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-I4VN2LKI.css': {size: 305101, hash: 'IND0ZDYC1JU', text: () => import('./assets-chunks/styles-I4VN2LKI_css.mjs').then(m => m.default)}
  },
};
