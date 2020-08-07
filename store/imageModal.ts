import {
  SET_IMAGE_MODAL_SRC,
  SET_IMAGE_MODAL_STATUS_SHOW,
  SET_IMAGE_MODAL_STATUS_CLOSE
} from '~/store/mutation-types'
import {
  CHANGE_IMAGE_MODAL_SRC,
  SHOW_IMAGE_MODAL,
  CLOSE_IMAGE_MODAL
} from '~/store/action-types'

interface State {
  src: string,
  imageModalStatus: string
}

const IMAGE_MODAL_STATUS_SHOW = 'IMAGE_MODAL_STATUS_SHOW'
const IMAGE_MODAL_STATUS_CLOSE = 'IMAGE_MODAL_STATUS_CLOSE'
const initialState: State = {
  src: '',
  imageModalStatus: IMAGE_MODAL_STATUS_CLOSE
}

export const state = () => initialState

export const mutations = {
  [SET_IMAGE_MODAL_SRC](state: State, src: string) {
    state.src = src
  },
  [SET_IMAGE_MODAL_STATUS_SHOW](state: State) {
    state.imageModalStatus = IMAGE_MODAL_STATUS_SHOW
  },
  [SET_IMAGE_MODAL_STATUS_CLOSE](state: State) {
    state.imageModalStatus = IMAGE_MODAL_STATUS_CLOSE
  }
}

export const actions = {
  [CHANGE_IMAGE_MODAL_SRC]({ commit }, src: string) {
    commit(SET_IMAGE_MODAL_SRC, src)
  },
  [SHOW_IMAGE_MODAL]({ commit }, src: string) {
    if (src) commit(SET_IMAGE_MODAL_SRC, src)
    commit(SET_IMAGE_MODAL_STATUS_SHOW)
  },
  [CLOSE_IMAGE_MODAL]({ commit }) {
    commit(SET_IMAGE_MODAL_STATUS_CLOSE)
  }
}

export const getters = {
  isShowImageModal(state: State) {
    return state.imageModalStatus === IMAGE_MODAL_STATUS_SHOW
  }
}
