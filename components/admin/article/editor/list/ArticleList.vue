<template>
  <section class="container">
    <div class="article__list">
      <common-article-list :is-admin="isAdmin" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articlesModule = namespace('articles')
import { FETCH_ARTICLES } from '~/store/action-types'
import { ArticleServiceFetchOption } from '~/lib/service/article-service'
import CommonArticleList from '~/components/common/article/CommonArticleList.vue'
import { ArticleProperties } from 'lib/Article'

@Component({
  layout: 'admin',
  components: {
    CommonArticleList
  }
})
export default class ArticleList extends Vue {
  static readonly ORDER_COLUMNS: ArticleProperties = {
    updatedAt: true
  }
  @articlesModule.Action(FETCH_ARTICLES) fetchArticles
  public isAdmin: boolean = true

  public created(): void {
    const payload: ArticleServiceFetchOption = {
      order_desc: ArticleList.ORDER_COLUMNS
    }
    this.fetchArticles(payload)
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.article__list {
  width: 800px;
  padding: $space;
}
</style>
