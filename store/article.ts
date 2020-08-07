import {
  SET_ARTICLE,
  SET_INITIAL_ARTICLE,
  SET_CREATE_STATUS_NOT_CREATED,
  SET_CREATE_STATUS_CREATED,
  SET_ARTICLE_STATUS_REGISTERED,
  SET_ARTICLE_STATUS_EDITTING,
} from '~/store/mutation-types'
import {
  FETCH_ARTICLE,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  CHANGE_ARTICLE_VALUES
} from '~/store/action-types'
import articleService from '~/lib/service/article-service'
import Article from '~/lib/Article'

const NOT_CREATED = 'NOT_CREATED'
const CREATED = 'CREATED'
const ARTICLE_STATUS_REGISTERED = 'ARTICLE_STATUS_REGISTERED'
const ARTICLE_STATUS_EDITTING = 'ARTICLE_STATUS_EDITTING'

interface State {
  article: Article,
  createStatus: string,
  articleStatus: string
}

export interface FetchPayload {
  id: string
}

const initialState: State = {
  article: {
    id: "",
    title: "",
    content: "",
    headingImage: "",
    createdAt: 0,
    updatedAt: 0
  },
  createStatus: NOT_CREATED,
  articleStatus: ARTICLE_STATUS_REGISTERED
}

export const state = () => Object.assign({}, initialState)

export const mutations = {
  [SET_ARTICLE](state: State, article: Article) {
    state.article = article
  },
  [SET_INITIAL_ARTICLE](state: State) {
    const init = Object.assign({}, initialState)
    state.article = init.article
    state.createStatus = init.createStatus
    state.articleStatus = init.articleStatus
  },
  [SET_CREATE_STATUS_NOT_CREATED](state: State) {
    state.createStatus = NOT_CREATED
  },
  [SET_CREATE_STATUS_CREATED](state: State) {
    state.createStatus = CREATED
  },
  [SET_ARTICLE_STATUS_REGISTERED](state: State) {
    state.articleStatus = ARTICLE_STATUS_REGISTERED
  },
  [SET_ARTICLE_STATUS_EDITTING](state: State) {
    state.articleStatus = ARTICLE_STATUS_EDITTING
  }
}

export const actions = {
  async [FETCH_ARTICLE]({ commit }: { commit: any }, payload: FetchPayload) {
    try {
      commit(SET_INITIAL_ARTICLE)
      const article: Article = await articleService.fetchArticle(payload.id)
      commit(SET_ARTICLE, article)
      commit(SET_CREATE_STATUS_CREATED)
      commit(SET_ARTICLE_STATUS_REGISTERED)
    } catch {
      commit(SET_CREATE_STATUS_NOT_CREATED)
      commit(SET_ARTICLE_STATUS_EDITTING)
    }
  },
  async [CREATE_ARTICLE]({ commit, state }: { commit: any, state: State }) {
    try {
      commit(SET_ARTICLE, {
        ...state.article,
        ...{
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime()
        }
      })
      const article: Article = await articleService.createArticle(state.article)
      commit(SET_ARTICLE, article)
      commit(SET_ARTICLE_STATUS_REGISTERED)
    } catch {
      commit(SET_CREATE_STATUS_NOT_CREATED)
    }
  },
  async [UPDATE_ARTICLE]({ commit, state }: { commit: any, state: State }) {
    try {
      commit(SET_ARTICLE, {
        ...state.article,
        ...{ updatedAt: new Date().getTime() }
      })
      await articleService.updateArticle(state.article)
      commit(SET_ARTICLE_STATUS_REGISTERED)
    } catch {
      commit(SET_ARTICLE_STATUS_EDITTING)
    }
  },
  [CHANGE_ARTICLE_VALUES]({ commit, state }: { commit: any, state: State }, payload: Article) {
    commit(SET_ARTICLE, {
      ...state.article,
      ...payload
    })
    commit(SET_ARTICLE_STATUS_EDITTING)
  }
}

export const getters = {
  isCreated(state: State) {
    return state.createStatus === CREATED
  },
  isNotCreated(state: State) {
    return state.createStatus === NOT_CREATED
  },
  isEditting(state: State) {
    return state.articleStatus === ARTICLE_STATUS_EDITTING
  },
  isRegistered(state: State) {
    return state.articleStatus === ARTICLE_STATUS_REGISTERED
  }
}
