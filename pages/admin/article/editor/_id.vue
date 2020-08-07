<template>
  <section id="article" class="article">
    <article-editor-header />
    <article-title-editor />
    <article-editor-menu />
    <div class="article__editor">
      <div class="article__editor__left">
        <article-content-editor />
      </div>
      <div class="article__editor__right">
        <common-article-content class="preview" />
      </div>
    </div>
    <article-heading-image-uploader />
  </section>
</template>

<script lang="ts">
import ArticleEditorHeader from '~/components/admin/article/editor/_id/ArticleEditorHeader.vue'
import ArticleTitleEditor from '~/components/admin/article/editor/_id/ArticleTitleEditor.vue'
import ArticleContentEditor from '~/components/admin/article/editor/_id/ArticleContentEditor.vue'
import ArticleEditorMenu from '~/components/admin/article/editor/_id/ArticleEditorMenu.vue'
import CommonArticleContent from '~/components/common/article/CommonArticleContent.vue'
import ArticleHeadingImageUploader from '~/components/admin/article/editor/_id/ArticleHeadingImageUploader.vue'

import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articleModule = namespace('article')
import { FETCH_ARTICLE } from '~/store/action-types'
import { FetchPayload } from '~/store/article'

@Component({
  layout: 'admin',
  components: {
    CommonArticleContent,
    ArticleContentEditor,
    ArticleEditorHeader,
    ArticleTitleEditor,
    ArticleEditorMenu,
    ArticleHeadingImageUploader
  }
})
export default class PageAdminArticleEditorId extends Vue {
  @articleModule.Action(FETCH_ARTICLE) fetchArticle
  async created() {
    const id = this.$route.params.id
    const payload: FetchPayload = { id: id }
    await this.fetchArticle(payload)
  }
}
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__editor {
    display: flex;
    height: 100%;
    padding: 0 $space $space $space;

    &__left {
      width: 50%;
    }

    &__right {
      width: 50%;
      overflow: scroll;
      .preview {
        width: 100%;
        margin: 0;
      }
    }
  }
}
</style>
