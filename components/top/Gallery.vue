<template>
  <section id="gallery" class="gallery">
    <h2 class="topTitle">
      Gallery
    </h2>
    <div class="gallery__list">
      <template v-for="(src, index) in images">
        <div
          :key="'gallery-item-' + index"
          class="gallery__list__item"
          @click="showImageModal(src)"
        >
          <img v-lazyload="src" src="~/assets/images/common/dummy.png" />
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const imagesModule = namespace('images')
const imageModalModule = namespace('imageModal')
import { FETCH_IMAGES, SHOW_IMAGE_MODAL } from '~/store/action-types'

@Component
export default class Gallery extends Vue {
  static readonly FETCH_IMAGE_COUNT: number = 8
  @imagesModule.State images
  @imagesModule.Action(FETCH_IMAGES) fetchImages
  @imageModalModule.Action(SHOW_IMAGE_MODAL) showImageModal

  public created() {
    this.fetchImages({
      limit: Gallery.FETCH_IMAGE_COUNT
    })
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  width: 100%;

  .topTitle {
    padding-left: 40px;
    background-image: url('~assets/images/top/gallery_title.png');
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px 20px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30%;
      min-width: 200px;
      max-width: 200px;
      min-height: 200px;
      margin-bottom: $space;

      img {
        box-sizing: border-box;
        max-width: 100%;
        height: auto;
        transition: all 0.3s ease-out;
        cursor: pointer;
        object-fit: contain;

        &:hover {
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  &__more {
    margin-bottom: $space;
    text-align: center;
    cursor: pointer;

    p {
      padding: 10px;
      border-radius: 5px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media screen and (max-width: 599px) {
  .gallery {
    &__list {
      &__item {
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .gallery {
    &__list {
      &__item {
        width: 23%;
      }
    }
  }
}
</style>
