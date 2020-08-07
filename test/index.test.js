import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

// Nuxt への参照を保持します
// そうすればテスト終了時にサーバーをクローズできます
let nuxt = null

// Nuxt.js を初期化し localhost:4000 のリスニングを開始します
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  config.mode = 'spa' // Isomorphic application
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
})

// DOM チェックを経由してテストする例
test('Route / exits and render HTML with CSS applied', async t => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/test')
  const element = window.document.querySelector('.red')
  t.not(element, null)
  t.is(element.textContent, 'Hello world!')
  t.true(element.classList.contains('red'))
  t.is(window.getComputedStyle(element).color, '')
})

// Nuxt サーバーをクローズする
test.after('Closing server', t => {
  nuxt.close()
})