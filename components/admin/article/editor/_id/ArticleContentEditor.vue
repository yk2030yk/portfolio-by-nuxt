<template>
  <textarea
    v-model="content"
    placeholder="ブログを入力する"
    @drop.prevent="dropTextarea"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articleModule = namespace('article')
import { CHANGE_ARTICLE_VALUES } from '~/store/action-types'
import { insertStr } from '~/lib/Util'
import imageService from '~/lib/service/image-service'
import markdown from '~/lib/markdown'

@Component
export default class ArticleContentEditor extends Vue {
  @articleModule.State article
  @articleModule.Action(CHANGE_ARTICLE_VALUES) changeArticleValues

  public get content(): string {
    return this.article.content
  }

  public set content(content: string) {
    this.changeArticleValues({ content })
  }

  public async dropTextarea(e): Promise<void> {
    const files = e.dataTransfer.files
    if (files.length === 0) return

    const file: File = files[0]
    const blob: any = await imageService.resize(file)
    const url: string = await imageService.upload(blob, file.name)

    const textarea = e.target
    this.content = insertStr(
      textarea.value,
      markdown.img(url),
      textarea.selectionStart
    )
  }
}
</script>

<style lang="scss" scoped>
textarea {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #3f4f5d;
  color: #fff;
  resize: none;
}
</style>
