<template>
  <section class="container">
    <div class="article">
      <common-article-content />
      <common-article-menu />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CommonArticleContent from '~/components/common/article/CommonArticleContent.vue'
import CommonArticleMenu from '~/components/common/article/CommonArticleMenu.vue'
import { namespace } from 'vuex-class'
const articleModule = namespace('article')
import { FETCH_ARTICLE } from '~/store/action-types'

@Component({
  components: {
    CommonArticleContent,
    CommonArticleMenu
  }
})
export default class PageAdminArticleList extends Vue {
  @articleModule.Action(FETCH_ARTICLE) fetchArticle

  public async created(): Promise<void> {
    const id = this.$route.params.id
    await this.fetchArticle({ id: id })
  }
}
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  justify-content: center;
}
</style>
