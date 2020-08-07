<template>
  <div class="blog__head">
    <h1 class="blog__head__title">
      {{ headTitle }}
    </h1>
    <div class="blog__head__message">
      <p>
        {{ editorMessage }}
      </p>
    </div>
    <div
      class="blog__head__registerButton"
      :class="registerButtonClass"
      @click="register"
    >
      {{ registerButtonLabel }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const articleModule = namespace('article')
const editorModule = namespace('editor')
import {
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  CHANGE_EDITOR_MESSAGE
} from '~/store/action-types'
import EditorMessage from '~/config/editor-message'

@Component
export default class ArticleEditorHeader extends Vue {
  @articleModule.State article
  @articleModule.Getter isCreated
  @articleModule.Getter isEditting
  @articleModule.Action(CREATE_ARTICLE) createArticle
  @articleModule.Action(UPDATE_ARTICLE) updateArticle
  @editorModule.State editorMessage
  @editorModule.Action(CHANGE_EDITOR_MESSAGE) changeEditorMessage

  public get headTitle(): string {
    return this.isCreated ? '記事編集' : '記事新規作成'
  }

  public get registerButtonLabel(): string {
    return this.isCreated ? '編集を完了' : '新規作成'
  }

  public get registerButtonClass(): object {
    return {
      '--editting': this.isEditting
    }
  }

  public async register(): Promise<void> {
    this.changeEditorMessage(EditorMessage.REGISTERING)
    if (this.isCreated) {
      await this.updateArticle()
    } else {
      await this.createArticle()
      this.$router.push('/admin/article/editor/' + this.article.id)
    }
    this.changeEditorMessage(EditorMessage.REGISTER_COMPLETE)
  }
}
</script>

<style lang="scss" scoped>
.blog__head {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 30px;
  border-bottom: solid 1px #ddd;
  background-color: #fafafa;

  &__title {
    box-sizing: border-box;
    width: 150px;
    font-size: 16px;
    font-weight: bold;
  }

  &__message {
    display: flex;
    align-items: center;
    height: 30px;
    margin-left: auto;
    padding: 5px $space;
    color: #8e8e8e;
    font-size: 10px;
    p {
      text-align: right;
    }
  }

  &__registerButton {
    width: 120px;
    height: 30px;
    padding: 10px;
    border-radius: 3px;
    background-color: #999;
    color: #fff;
    text-align: center;

    &.--editting {
      background-color: #49c753;
      &:hover {
        background-color: #3ca244;
      }
    }
  }
}
</style>
