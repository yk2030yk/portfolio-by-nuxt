<template>
  <div class="blog__content__title">
    <input v-model="title" type="text" placeholder="タイトルを入力する" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articleModule = namespace('article')
import { CHANGE_ARTICLE_VALUES } from '~/store/action-types'

@Component
export default class ArticleTitleEditor extends Vue {
  @articleModule.State article
  @articleModule.Action(CHANGE_ARTICLE_VALUES) changeArticleValues

  public get title(): string {
    return this.article.title
  }

  public set title(title: string) {
    this.changeArticleValues({ title })
  }
}
</script>

<style lang="scss" scoped>
.blog__content__title {
  box-sizing: border-box;
  padding: 10px $space;

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    border: solid 1px #999;
    border-radius: 3px;
    outline: none;
    background: none;
    background-color: #fff;
    font-size: 20px;
  }
}
</style>
