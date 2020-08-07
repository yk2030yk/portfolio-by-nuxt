<template>
  <div class="container">
    <div class="errorContent">
      <template v-if="is404">
        <div>404</div>
        <h1>ページが見つかりません</h1>
        <nuxt-link to="/">
          ホーム
        </nuxt-link>
      </template>

      <template v-else>
        <h1>エラーが発生しました。</h1>
        <nuxt-link to="/">
          ホーム
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
const STATUS_CODE_404 = 404

interface Error {
  statusCode: number
}

@Component
export default class ErrorLayout extends Vue {
  @Prop({ default: { statusCode: 200 } }) readonly error!: Error

  public get is404() {
    return this.error.statusCode === STATUS_CODE_404
  }
}
</script>

<style lang="scss" scoped>
.errorContent {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  margin-bottom: auto;

  h1 {
    font-size: 2rem;
  }
  div {
    position: absolute;
    right: 10%;
    bottom: 10%;
    color: #999;
    font-size: 5rem;
  }
}
</style>
