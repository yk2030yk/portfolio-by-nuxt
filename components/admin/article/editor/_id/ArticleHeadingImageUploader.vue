<template>
  <transition name="fade">
    <div
      v-if="isShowHeadingImageUploader"
      class="headingImageUploader"
      @click.self="hide"
    >
      <div class="headingImageUploader__content">
        <div class="headingImageUploader__content__croppa">
          <croppa
            v-model="croppa"
            :width="400"
            :height="200"
            :placeholder="'見出し画像を選択してください'"
            :quality="2"
            :zoom-speed="20"
            :canvas-color="'transparent'"
          />
        </div>
        <div class="headingImageUploader__content__buttons">
          <div
            class="headingImageUploader__content__buttons__upload"
            @click="headingImageUpload"
          >
            アップロード
          </div>
          <div
            class="headingImageUploader__content__buttons__cancel"
            @click="hide"
          >
            キャンセル
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articleModule = namespace('article')
const editorModule = namespace('editor')
import {
  HIDE_HEADING_IMAGE_UPLOADER,
  CHANGE_ARTICLE_VALUES,
  CHANGE_EDITOR_MESSAGE
} from '~/store/action-types'
import imageService from '~/lib/service/image-service'
import EditorMessage from '~/config/editor-message'

@Component
export default class ArticleHeadingImageUploader extends Vue {
  public croppa: any = {}

  @articleModule.State article
  @articleModule.Action(CHANGE_ARTICLE_VALUES) changeArticleValues
  @editorModule.Action(HIDE_HEADING_IMAGE_UPLOADER) hide
  @editorModule.Action(CHANGE_EDITOR_MESSAGE) changeEditorMessage
  @editorModule.Getter isShowHeadingImageUploader

  public get headingImagePath(): string {
    return this.article.headingImagePath
  }
  public set headingImagePath(headingImage) {
    this.changeArticleValues({ headingImage: headingImage })
  }

  public async headingImageUpload(): Promise<void> {
    const file: File = this.croppa.getChosenFile()

    if (!file) {
      this.changeEditorMessage('画像を選択してください。')
      return
    }

    this.changeEditorMessage(EditorMessage.HEADING_IMAGE_UPLOADING)
    this.croppa.generateBlob(async blob => {
      const resizeBlob: any = await imageService.resize(blob)
      const path: string = await imageService.upload(resizeBlob, file.name)
      this.headingImagePath = path
      this.changeEditorMessage(EditorMessage.HEADING_IMAGE_UPLOADED)
    })
    this.hide()
  }
}
</script>

<style lang="scss" scoped>
.headingImageUploader {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  &__content {
    width: 500px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 1px 1px 10px #999;

    &__croppa {
      display: flex;
      justify-content: center;
      padding: $space;
    }

    &__buttons {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      height: 100px;

      &__upload {
        width: 200px;
        padding: 10px;
        border-radius: 3px;
        background-color: #49c753;
        color: #fff;
        text-align: center;
        &:hover {
          background-color: #3ca244;
        }
      }

      &__cancel {
        width: 200px;
        padding: 10px;
        border-radius: 3px;
        background-color: rgb(223, 223, 223);
        color: rgb(53, 53, 53);
        text-align: center;
        &:hover {
          background-color: #fafafa;
        }
      }
    }
  }
}
</style>
