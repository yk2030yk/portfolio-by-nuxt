import {
  SET_EDITOR_MESSAGE,
  CLEAR_EDITOR_MESSAGE,
  SET_HEADING_IMAGE_UPLOADER_STATUS_SHOW,
  SET_HEADING_IMAGE_UPLOADER_STATUS_HIDE
} from '~/store/mutation-types'
import {
  CHANGE_EDITOR_MESSAGE,
  SHOW_HEADING_IMAGE_UPLOADER,
  HIDE_HEADING_IMAGE_UPLOADER
} from '~/store/action-types'

interface State {
  editorMessage: string,
  headingImageUploaderStatus: string
}

const HEADING_IMAGE_UPLOADER_STATUS_SHOW = 'HEADING_IMAGE_UPLOADER_STATUS_SHOW'
const HEADING_IMAGE_UPLOADER_STATUS_HIDE = 'HEADING_IMAGE_UPLOADER_STATUS_HIDE'
const initialState: State = {
  editorMessage: '',
  headingImageUploaderStatus: HEADING_IMAGE_UPLOADER_STATUS_HIDE
}

export const state = () => initialState

export const mutations = {
  [SET_EDITOR_MESSAGE](state: State, message: string) {
    state.editorMessage = message
  },
  [CLEAR_EDITOR_MESSAGE](state: State) {
    state.editorMessage = ''
  },
  [SET_HEADING_IMAGE_UPLOADER_STATUS_SHOW](state: State) {
    state.headingImageUploaderStatus = HEADING_IMAGE_UPLOADER_STATUS_SHOW
  },
  [SET_HEADING_IMAGE_UPLOADER_STATUS_HIDE](state: State) {
    state.headingImageUploaderStatus = HEADING_IMAGE_UPLOADER_STATUS_HIDE
  }
}

const CLEAR_MESSAGE_TIME: number = 3000
let clearMessageTask
export const actions = {
  [CHANGE_EDITOR_MESSAGE]({ commit }, message: string) {
    commit(SET_EDITOR_MESSAGE, message)
    clearTimeout(clearMessageTask)
    clearMessageTask = setTimeout(() => {
      commit(CLEAR_EDITOR_MESSAGE)
    }, CLEAR_MESSAGE_TIME)
  },
  [SHOW_HEADING_IMAGE_UPLOADER]({ commit }) {
    commit(SET_HEADING_IMAGE_UPLOADER_STATUS_SHOW)
  },
  [HIDE_HEADING_IMAGE_UPLOADER]({ commit }) {
    commit(SET_HEADING_IMAGE_UPLOADER_STATUS_HIDE)
  }
}

export const getters = {
  isShowHeadingImageUploader(state: State) {
    return state.headingImageUploaderStatus === HEADING_IMAGE_UPLOADER_STATUS_SHOW
  }
}
