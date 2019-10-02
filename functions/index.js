const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');

const nuxt = new Nuxt({
  buildDir: 'ssr', // ssrのためのコード格納先
  dev: false // buildしたものを使うので必要
});

exports.ssr = functions.https.onRequest(async (req, res) => {
  await nuxt.ready() // since nuxt 2.5
  return nuxt.render(req, res)
})
