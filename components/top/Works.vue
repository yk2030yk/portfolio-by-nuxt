<template>
  <section id="works" class="works">
    <h2 class="topTitle">
      Works
    </h2>
    <div v-lazyload="show" class="works__item">
      <div class="works__item__left" />
      <div class="works__item__right">
        <div class="works__item__right__explain">
          <p>ああああああああああああああああああああああああああ</p>
        </div>
      </div>
    </div>
    <div v-lazyload="show" class="works__item">
      <div class="works__item__left" />
      <div class="works__item__right">
        <div class="works__item__right__explain">
          <p>ああああああああああああああああああああああああああ</p>
        </div>
      </div>
    </div>
    <div v-lazyload="show" class="works__item">
      <div class="works__item__left" />
      <div class="works__item__right">
        <div class="works__item__right__explain">
          <p>ああああああああああああああああああああああああああ</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Works extends Vue {
  public show(el) {
    el.setAttribute('style', 'opacity: 1; transform: translateY(0);')
  }
}
</script>

<style lang="scss" scoped>
.works {
  width: 100%;

  .topTitle {
    padding-left: 40px;
    background-image: url('~assets/images/top/works_title.png');
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px 20px;
  }

  &__item {
    display: flex;
    width: 100%;
    margin-bottom: $space;
    padding-bottom: $space;
    transform: translate3d(0, 50px, 0);
    transition: all 1s ease-out;
    opacity: 0;

    &__left {
      width: 50%;
    }

    &__right {
      width: 50%;

      &__explain {
        min-height: 200px;
        padding: 10px;
        background-color: #fff;
        box-shadow: 0px 0px 8px rgba(150, 150, 150, 0.5);
      }
    }
  }
}
</style>
