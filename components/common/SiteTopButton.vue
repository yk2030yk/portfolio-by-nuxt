<template>
  <div class="siteTopButton" @click="$smoothScroll('top')">
    <div class="siteTopButton__triangle" />
  </div>
</template>

<style lang="scss" scoped>
.siteTopButton {
  display: flex;
  position: fixed;
  right: 50px;
  bottom: 50px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 60%;
  background-color: rgba(80, 80, 80, 0.1);
  text-decoration: none;
  cursor: pointer;
  filter: drop-shadow(0 0 3px rgba(170, 170, 170, 0.5));

  &:hover {
    background-color: rgba(80, 80, 80, 0.4);
  }

  &__triangle {
    position: absolute;
    top: 35%;
    width: 20px;
    height: 20px;
    transform: rotate(-45deg);
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
  }
}
</style>
