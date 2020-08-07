<template>
  <div class="article__content">
    <div class="article__content__head">
      <div class="article__content__head__content">
        <div class="article__content__head__content__title">
          {{ article.title }}
        </div>
        <div class="article__content__head__content__date">
          {{ article.formatUpdatedAt }}
        </div>
      </div>
    </div>
    <div class="article__content__headingImage">
      <img :src="article.headingImage" />
    </div>
    <div class="article__content__main">
      <div class="markdown" v-html="markdown" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articleModule = namespace('article')
import marked from 'marked'

@Component
export default class CommonArticleContent extends Vue {
  @articleModule.State article

  public get markdown(): string {
    return marked(this.article.content || '')
  }
}
</script>

<style lang="scss" scoped>
.article__content {
  width: 700px;
  margin: $space 0;
  background-color: #fafafa;
  &__head {
    padding: $space;
    &__content {
      border-bottom: solid 2px #d80000;
      &__title {
        padding: $space 0 $space 0;
        font-size: 2rem;
        font-weight: bold;
      }
      &__date {
        padding: 0 0 $space 0;
        color: #999;
        font-size: 0.9rem;
      }
    }
  }

  &__headingImage {
    display: flex;
    justify-content: center;
    margin-bottom: $space;
    img {
      width: auto;
      max-width: 600px;
      height: auto;
      max-height: 300px;
    }
  }

  &__notFound {
    padding: $space;
    color: rgb(173, 80, 80);
    font-size: 1rem;
  }
}
.markdown {
  padding: $space;
}
</style>
