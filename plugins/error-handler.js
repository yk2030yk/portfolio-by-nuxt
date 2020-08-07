import Vue from 'vue'
import errorHandler from '~/lib/error-handler'

Vue.config.errorHandler = err => {
  errorHandler.log(err.message)
}
