
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angularJESUS/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angularJESUS"
  },
  {
    "renderMode": 2,
    "route": "/angularJESUS/about"
  },
  {
    "renderMode": 2,
    "route": "/angularJESUS/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/angularJESUS/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angularJESUS",
    "route": "/angularJESUS/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5456, hash: '034d6c9d54c276ba183d4e1126ffd88f2dbc2ee4015b50035c9fb4627e95280f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '7afa9f507f64ae574e80456c84386d7e233a8f244e7b9c73f2c65b2f88459f5b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 17102, hash: '65c95b05755b48ea15a711e1af2bf402c4215b084f0cc8e622af138ac3853fef', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16340, hash: 'ae832b835280bfbb26769c9498083cea2204805bbd6a7fe5ac9c0bd697795095', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21039, hash: 'd019e111386cb01327f8bfb835281745044fbdd49a26562ec501682134317968', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 25342, hash: '1f4ea92456820de57f85e723021026b3a33274bac42a477512637ba26dda55c9', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-I4VN2LKI.css': {size: 305101, hash: 'IND0ZDYC1JU', text: () => import('./assets-chunks/styles-I4VN2LKI_css.mjs').then(m => m.default)}
  },
};
