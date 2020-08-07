import firebase from '~/plugins/firebase'
import { DocumentData } from '@firebase/firestore-types'
import { COLLECTION_NAME_ARTICLE } from '~/config/collections'
import Article from '~/lib/Article';
import { ArticleProperties } from '~/lib/Article';

const db = firebase.firestore()
const articleCollection = db.collection(COLLECTION_NAME_ARTICLE)

export interface ArticleServiceFetchOption {
  order_desc?: ArticleProperties,
  order?: ArticleProperties,
  limit?: number
}

class ArticleService {
  async fetchArticles(option: ArticleServiceFetchOption): Promise<Array<Article>> {
    return new Promise<Array<Article>>(resolve => {
      let ref: any = articleCollection

      if (option.order_desc) {
        for (const key in option.order_desc) {
          const value: boolean = option.order_desc[key]
          if (value) ref = ref.orderBy(key, 'desc')
        }
      }

      if (option.order) {
        for (const key in option.order) {
          const value: boolean = option.order[key]
          if (value) ref = ref.orderBy(key)
        }
      }

      if (option.limit && Number.isInteger(option.limit)) {
        ref = ref.limit(option.limit)
      }

      const articles: Article[] = []
      ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data: DocumentData = doc.data()
          const article: Article = {
            id: doc.id,
            title: data.title,
            content: data.content,
            headingImage: data.headingImage,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
          }
          articles.push(article)
        })
        resolve(articles)
      })
    })
  }

  async fetchArticle(id: string): Promise<Article> {
    return new Promise<Article>(resolve => {
      articleCollection
        .doc(id)
        .get()
        .then(doc => {
          const data: DocumentData | undefined = doc.data()
          if (!data) return
          const article: Article = {
            id: doc.id,
            title: data.title,
            content: data.content,
            headingImage: data.headingImage,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
          }
          resolve(article)
        })
    })
  }

  async createArticle(article: Article): Promise<Article> {
    return new Promise<Article>(resolve => {
      articleCollection
      .add(article)
      .then(docRef => {
        article.id = docRef.id
        resolve(article)
      })
    })
  }

  async updateArticle(article: Article): Promise<string> {
    return new Promise<string>(resolve => {
      articleCollection
        .doc(article.id)
        .set(article)
        .then(() => {
          resolve()
        })
    })
  }

  async deleteArticle(id: string): Promise<string> {
    return new Promise<string>(resolve => {
      articleCollection
        .doc(id)
        .delete()
        .then(() => {
          resolve()
        })
    })
  }
}

export default new ArticleService()