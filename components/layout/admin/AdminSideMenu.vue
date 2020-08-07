<template>
  <div class="sidemenu">
    <div class="sidemenu__items">
      <div>
        <div class="sidemenu__items__title">
          記事
        </div>
        <div class="sidemenu__items__item">
          <router-link :to="{ path: '/admin/article/editor/create' }">
            <p class="sidemenu__items__item__new">
              新規作成
            </p>
          </router-link>
        </div>
        <div class="sidemenu__items__item">
          <router-link :to="{ path: '/admin/article/editor/list' }">
            <p class="sidemenu__items__item__bloglist">
              記事一覧
            </p>
          </router-link>
        </div>
      </div>

      <div>
        <div class="sidemenu__items__title">
          アカウント
        </div>
        <div class="sidemenu__items__item" @click="logout">
          <p class="sidemenu__items__item__logout">
            ログアウト
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'

@Component
export default class CommonArticleContent extends Vue {
  public logout() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('Signed out.')
      })
  }
}
</script>

<style lang="scss" scoped>
.sidemenu {
  position: fixed;
  width: 250px;
  height: 100%;
  padding: $space 0;
  background-color: #262f3d;
  color: #cecdcd;

  a {
    color: #cecdcd;
    text-decoration: none;
  }

  &__items {
    &__title {
      padding: 10px;
      font-size: 1rem;
    }
    &__item {
      cursor: pointer;
      &:hover {
        background-color: #354257;
      }

      &__bloglist {
        padding: 10px 10px 10px 40px;
        background-image: url('~assets/images/common/article/list.png');
        background-repeat: no-repeat;
        background-position: 10px center;
        background-size: 18px 18px;
      }

      &__new {
        padding: 10px 10px 10px 40px;
        background-image: url('~assets/images/top/blog_title.png');
        background-repeat: no-repeat;
        background-position: 10px center;
        background-size: 20px 20px;
      }

      &__logout {
        padding: 10px 10px 10px 40px;
        background-image: url('~assets/images/common/logout.png');
        background-repeat: no-repeat;
        background-position: 10px center;
        background-size: 25px 25px;
      }
    }
  }
}
</style>
