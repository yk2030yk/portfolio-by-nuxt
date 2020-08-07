<template>
  <div v-if="isAdmin" class="article__list__item__adminMenu" @click.prevent>
    <div
      class="article__list__item__adminMenu__delete"
      @click.prevent="confirmDelete"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articlesModule = namespace('articles')
import { DELETE_ARTICLE } from '~/store/action-types'
import Article from '~/lib/Article'

@Component
export default class CommonArticleContent extends Vue {
  @articlesModule.Action(DELETE_ARTICLE) deleteArticle
  @Prop({ default: false }) readonly isAdmin!: boolean
  @Prop() readonly article!: Article

  public confirmDelete(): void {
    if (confirm(`${this.article.title}を削除してもよろしいでしょうか？`)) {
      this.deleteArticle({ id: this.article.id })
    }
  }
}
</script>

<style lang="scss" scoped>
.article__list {
  &__item {
    &__adminMenu {
      position: absolute;
      width: 150px;
      right: 10px;
      top: 10px;
      padding: 5px;
      &:hover {
        box-shadow: 0px 0px 1px rgba(150, 150, 150, 0.5);
      }

      &__delete {
        width: 25px;
        height: 25px;
        background-image: url('~assets/images/common/article/delete.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 20px 20px;
      }
    }
  }
}
</style>
