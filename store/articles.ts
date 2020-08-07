import { SET_ARTICLES } from '~/store/mutation-types'
import { FETCH_ARTICLES, DELETE_ARTICLE } from '~/store/action-types'
import articleService from '~/lib/service/article-service'
import { ArticleServiceFetchOption } from '~/lib/service/article-service'
import Article from '~/lib/Article'

interface State {
  articles: Array<Article>
}

export interface DeletePayload {
  id: string
}

const initialState: State = {
  articles: []
}

export const state = () => initialState

export const mutations = {
  [SET_ARTICLES](state: State, articles: Array<Article>) {
    state.articles = articles
  }
}

export const actions = {
  async [FETCH_ARTICLES](
    { commit }: { commit: any },
    payload: ArticleServiceFetchOption
  ) {
    const articles = await articleService.fetchArticles(payload)
    commit(SET_ARTICLES, articles)
  },
  async [DELETE_ARTICLE](
    { commit, state }: { commit: any, state: State },
    payload: DeletePayload
  ) {
    await articleService.deleteArticle(payload.id)
    const deleted = state.articles.filter(article => {
      return article.id !== payload.id
    })
    commit(SET_ARTICLES, deleted)
  }
}
