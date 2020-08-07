<template>
  <div>
    <div
      v-for="article in articleObjects"
      :key="article.id"
      class="article__list__item"
    >
      <router-link :to="{ path: linkPath(article.id) }">
        <div class="article__list__item__title">
          {{ article.title }}
        </div>
        <div class="article__list__item__date">
          作成日：{{ article.formatCreatedAt }}
        </div>
        <div class="article__list__item__date">
          更新日：{{ article.formatUpdatedAt }}
        </div>
        <div
          v-if="article.headingImage"
          class="article__list__item__headingImage"
        >
          <img
            v-lazyload="article.headingImage"
            src="~/assets/images/common/dummy.png"
          />
        </div>
        <admin-menu :is-admin="isAdmin" :article="article" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articlesModule = namespace('articles')
import Article from '~/lib/Article'
import { ArticleObject } from '~/lib/Article'
import AdminMenu from './CommonArticleList/AdminMenu.vue'

@Component({
  components: {
    AdminMenu
  }
})
export default class CommonArticleContent extends Vue {
  @articlesModule.State articles
  @Prop({ default: false }) readonly isAdmin!: boolean

  public get articleObjects(): Array<ArticleObject> {
    const objects: Array<ArticleObject> = []
    this.articles.forEach((article: Article) => {
      objects.push(new ArticleObject(article))
    })
    return objects
  }

  public linkPath(id): string {
    return (this.isAdmin ? '/admin/article/editor/' : '/article/view/') + id
  }
}
</script>

<style lang="scss" scoped>
.article__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  &__item {
    position: relative;
    width: 100%;
    margin-bottom: $space;
    padding: 10px;
    transition: all 0.2s ease-out;
    background-color: #fff;
    color: #65513f;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 8px rgba(150, 150, 150, 0.5);
      color: #efbf93;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    &__title {
      padding-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
    }

    &__date {
      height: 15px;
      padding-left: 20px;
      background-image: url('~assets/images/top/blog_date.png');
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 14px 14px;
      color: #717171;
    }

    &__headingImage {
      display: flex;
      justify-content: center;
      padding: 20px;

      img {
        min-width: 400px;
        min-height: 200px;
      }
    }
  }
}
</style>
