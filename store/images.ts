import { SET_IMAGES } from '~/store/mutation-types'
import { FETCH_IMAGES } from '~/store/action-types'
import imageService from '~/lib/service/image-service'
import { ImageServiceFetchOption } from '~/lib/service/image-service'

interface State {
  images: Array<string>
}

const initialState: State = {
  images: []
}

export const state = () => initialState

export const mutations = {
  [SET_IMAGES](state: State, images: Array<string>) {
    state.images = images
  }
}

export const actions = {
  async [FETCH_IMAGES]({ commit }, payload: ImageServiceFetchOption) {
    const images = await imageService.fetchImages(payload)
    commit(SET_IMAGES, images)
  }
}
