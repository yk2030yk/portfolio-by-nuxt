<template>
  <section id="article" class="article">
    <h2 class="topTitle">
      Article
    </h2>
    <common-article-list />
    <router-link :to="{ path: '/article/list' }" class="article__pastLink">
      <div>過去の記事を見る</div>
    </router-link>
  </section>
</template>

<script lang="ts">
import CommonArticleList from '~/components/common/article/CommonArticleList.vue'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articlesModule = namespace('articles')
import { FETCH_ARTICLES } from '~/store/action-types'
import { ArticleServiceFetchOption } from '~/lib/service/article-service'
import { ArticleProperties } from '~/lib/Article'

@Component({
  components: {
    CommonArticleList
  }
})
export default class ArticleLink extends Vue {
  static readonly FETCH_BLOG_COUNT: number = 5
  static readonly ORDER_COLUMNS: ArticleProperties = {
    updatedAt: true
  }

  @articlesModule.Action(FETCH_ARTICLES) fetchArticles

  public created() {
    const payload: ArticleServiceFetchOption = {
      limit: ArticleLink.FETCH_BLOG_COUNT,
      order_desc: ArticleLink.ORDER_COLUMNS
    }
    this.fetchArticles(payload)
  }
}
</script>

<style lang="scss" scoped>
.article {
  width: 90%;

  .topTitle {
    padding-left: 40px;
    background-image: url('~assets/images/top/blog_title.png');
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px 20px;
  }

  &__pastLink {
    color: #65513f;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    div {
      padding: 5px;
      &:hover {
        color: #efbf93;
      }
    }
  }
}
</style>
