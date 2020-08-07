<template>
  <div class="layout">
    <div class="main">
      <div class="main__left">
        <admin-side-menu />
      </div>
      <div class="main__right">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AdminSideMenu from '~/components/layout/admin/AdminSideMenu.vue'

@Component({
  layout: 'admin',
  middleware: 'authenticated',
  components: {
    AdminSideMenu
  }
})
export default class AdminLayout extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.main {
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100%;

  &__left {
    grid-column: 1;
    width: 100%;
    height: 100%;
  }
  &__right {
    grid-column: 2;
    width: 100%;
    height: 100%;
  }
}
</style>
