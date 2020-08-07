import marked from 'marked'
import highlight from 'highlight.js'

marked.setOptions({
  langPrefix: 'lang-',
  breaks: true,
  gfm: true,
  sanitize: true,
  highlight: (code, lang) => {
    return highlight.highlightAuto(code, [lang]).value
  }
})
