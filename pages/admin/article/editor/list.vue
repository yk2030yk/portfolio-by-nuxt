<template>
  <section>
    <article-list />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ArticleList from '~/components/admin/article/editor/list/ArticleList.vue'

@Component({
  layout: 'admin',
  components: {
    ArticleList
  }
})
export default class PageAdminArticleList extends Vue {}
</script>

<style lang="scss" scoped></style>
