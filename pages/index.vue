<template>
  <div class="container2">
    <div class="contents">
      <div class="topContent">
        <eyecatch />
      </div>
      <div class="mainContent__top">
        <div class="mainContent__top__left">
          <article-link />
        </div>
        <div class="mainContent__top__right">
          <profile />
        </div>
      </div>
      <div class="mainContent__middle1">
        <experience />
      </div>
      <div class="mainContent__middle">
        <works />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Eyecatch from '~/components/top/Eyecatch.vue'
import ArticleLink from '~/components/top/ArticleLink.vue'
import Profile from '~/components/top/Profile.vue'
import Works from '~/components/top/Works.vue'
import Experience from '~/components/top/Experience.vue'

@Component({
  layout: 'top',
  components: {
    Eyecatch,
    ArticleLink,
    Profile,
    Works,
    Experience
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss">
.container2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;

  .contents {
    max-width: 1000px;
    widows: 100%;
  }
}

.topContent {
  margin: 0 0 $space 0;
}

.mainContent__top {
  display: flex;
  margin-bottom: $space-large;
  padding: 0 $space-large;

  &__left {
    width: 70%;
  }

  &__right {
    width: 30%;
  }
}

.mainContent__middle1 {
  padding: 0 $space-large;
}

.mainContent__middle {
  display: flex;
  padding: 0 $space-large;
}

@media screen and (max-width: 599px) {
  .mainContent__top {
    flex-direction: column;

    &__left {
      width: 100%;
    }

    &__right {
      width: 100%;
    }
  }
}
</style>
