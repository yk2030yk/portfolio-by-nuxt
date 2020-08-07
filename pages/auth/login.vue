<template>
  <div class="content">
    <div class="loginForm">
      <div class="loginForm__item">
        <input v-model="email" type="text" placeholder="email" />
      </div>
      <div class="loginForm__item">
        <input v-model="password" type="password" placeholder="password" />
      </div>
      <div class="loginForm__item">
        <button @click="login">
          ログイン
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import firebase from 'firebase'

@Component({
  layout: 'auth'
})
export default class PageAdminArticleList extends Vue {
  public email: string = ''
  public password: string = ''
  public errorMessage: string = ''

  public login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.push('/admin/article/editor/list')
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
input,
button {
  appearance: none;
}
.loginForm {
  padding: 20px;
  width: 500px;
  background-color: #fff;

  &__item {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    input {
      box-sizing: border-box;
      width: 100%;
      border-radius: 3px;
      border: solid 1px #666;
      background-color: #fff;
      padding: 5px;
      font-size: 14px;
    }

    button {
      border-radius: 3px;
      background-color: rgb(24, 65, 197);
      padding: 5px;
      border: none;
      color: #fff;
      width: 300px;
    }
  }
}
</style>
