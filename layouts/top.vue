<template>
  <div id="top">
    <top-header />
    <nuxt />
    <top-footer />
    <site-top-button />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopHeader from '~/components/layout/top/TopHeader.vue'
import TopFooter from '~/components/layout/top/TopFooter.vue'
import SiteTopButton from '~/components/common/SiteTopButton.vue'

@Component({
  layout: 'top',
  components: {
    TopHeader,
    TopFooter,
    SiteTopButton
  }
})
export default class TopLayout extends Vue {}
</script>

<style lang="scss" scoped>
#top {
  padding-top: 60px;
}
</style>
