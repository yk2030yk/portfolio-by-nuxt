<template>
  <div class="blog__content__headingImage">
    <div @click="show">
      見出し画像をアップロードする
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const editorModule = namespace('editor')
import { SHOW_HEADING_IMAGE_UPLOADER } from '~/store/action-types'

@Component
export default class ArticleEditorMenu extends Vue {
  @editorModule.Action(SHOW_HEADING_IMAGE_UPLOADER) show
}
</script>

<style lang="scss" scoped>
.blog__content__headingImage {
  padding: 0 $space 10px $space;
  div {
    display: block;
    width: 200px;
    padding: 10px;
    border-radius: 3px;
    background-color: #49c753;
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    &:hover {
      background-color: #3ca244;
    }
  }
}
</style>
