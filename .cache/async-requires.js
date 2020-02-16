// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-product-js": () => import("./../src/templates/product.js" /* webpackChunkName: "component---src-templates-product-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contacts-js": () => import("./../src/pages/contacts.js" /* webpackChunkName: "component---src-pages-contacts-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}
