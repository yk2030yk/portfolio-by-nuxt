<template>
  <div class="body">
    <default-header />
    <nuxt class="mainContent" />
    <default-footer />
    <site-top-button />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DefaultHeader from '~/components/layout/default/DefaultHeader.vue'
import DefaultFooter from '~/components/layout/default/DefaultFooter.vue'
import SiteTopButton from '~/components/common/SiteTopButton.vue'

@Component({
  layout: 'top',
  components: {
    DefaultHeader,
    DefaultFooter,
    SiteTopButton
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
}

.mainContent {
  height: 100%;
}
</style>
