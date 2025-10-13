
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
    'index.csr.html': {size: 5458, hash: '84e9b5b0b1540f70fc0a18e4b457570e9178f255a4289dc7ee69354fd73f4a3c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1078, hash: 'fc63c6de0bea57efcdc50bfcb9610e22125c34995c14daaf92b60d313d9ea241', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16352, hash: 'cbe9a682eb63e950f1afe315e976dc11cc1b8f041323186e409c7c72c2e004cc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 17114, hash: 'b82ec259c4012c89ea92f22d89aa103ad4af0eb40e316bc2fe1a2cb2e886de3f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 25354, hash: 'e89d0d22b8eebf7d175ffb871e3a5abfc759a42861abd9312beea19d116ebca7', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21051, hash: 'a94ce65f63d93318b833d05d1746c39cf72472d45458b750dded814dbe3b297f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-27VQMS7S.css': {size: 305101, hash: '9ANwlXI4yTA', text: () => import('./assets-chunks/styles-27VQMS7S_css.mjs').then(m => m.default)}
  },
};
