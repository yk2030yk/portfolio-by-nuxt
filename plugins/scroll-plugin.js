import Vue from 'vue'
import lodash from 'lodash'

const ScrollPlugins = {
  install(Vue) {
    /* set image lazyLoad
     * ex1) v-lazyload="src"
     * ex2) v-lazyload="{ src: src, onload: func }"
     * ex3) v-lazyload="func"
     */
    Vue.directive('lazyload', {
      inserted: function(el, binding) {
        const func = lodash.throttle(() => {
          if (window.scrollY + window.innerHeight > el.offsetTop) {
            const v = binding.value
            switch (typeof v) {
              case 'string':
                el.setAttribute('src', v)
                break
              case 'object':
                if (v.onload)
                  el.addEventListener('load', () => {
                    v.onload(el)
                  })
                if (v.src) el.setAttribute('src', v.src)
                break
              case 'function':
                v(el)
                break
            }
            window.removeEventListener('scroll', func)
          }
        }, 25)
        window.addEventListener('scroll', func)
        func()
      }
    })

    /* set scroll event
     * ex) v-scroll="func"
     */
    Vue.directive('scroll', {
      inserted: function(el, binding) {
        const func = lodash.throttle(evt => {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', func)
          }
        }, 25)
        window.addEventListener('scroll', func)
        func()
      }
    })

    /* set scroll event
     * ex) @click="$smoothScroll(id)"
     */
    Vue.prototype.$smoothScroll = (id, dist = 0) => {
      let target = document.getElementById(id)
      if (!target) return

      let top = target.offsetTop + dist
      top = top < 0 ? 0 : top
      let y = window.scrollY
      let move = (top - y) / 10
      let count = 0
      const pid = setInterval(() => {
        count++
        y += move
        window.scrollTo(0, y)
        if (count > 10) clearInterval(pid)
      }, 20)
    }
  }
}

Vue.use(ScrollPlugins)
