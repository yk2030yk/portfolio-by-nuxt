<template>
  <div class="eyecatch">
    <div class="eyecatch__image">
      <img src="~/assets/images/top/eyecatch_w.jpg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 599px) {
  .eyecatch {
    display: flex;
    justify-content: center;

    .eyecatch__image {
      width: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media screen and (min-width: 600px) {
  .eyecatch {
    display: flex;
    justify-content: center;
    width: 100%;

    .eyecatch__image {
      width: 100%;
      max-width: 1000px;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
