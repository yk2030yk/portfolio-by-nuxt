<template>
  <header class="header">
    <div class="icon">
      <router-link :to="{ path: '/' }">
        <p>Takahiro Negishi.</p>
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  top: 0;
  width: 100%;
  height: 60px;
  transition: 0.2s;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 10;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 60px;
    margin-bottom: $space;
    a {
      padding: 10px;
      color: black;
      text-decoration: none;

      &:hover {
        background-color: #fdfdfd;
      }
    }

    @include font-caveat;
  }
}
</style>
