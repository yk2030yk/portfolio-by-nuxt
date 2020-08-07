<template>
  <transition name="fade">
    <div v-if="isShowImageModal" class="galleryModal" @click="closeImageModal">
      <div class="galleryModal__content">
        <img :src="src" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const imageModalModule = namespace('imageModal')
import { CLOSE_IMAGE_MODAL } from '~/store/action-types'

@Component
export default class ImageModal extends Vue {
  @imageModalModule.State src
  @imageModalModule.Getter isShowImageModal
  @imageModalModule.Action(CLOSE_IMAGE_MODAL) closeImageModal
}
</script>

<style lang="scss" scoped>
.galleryModal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  &__content {
    max-width: 70%;
    max-height: 70%;

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
