<template>
  <section id="experience" class="experience">
    <h2 class="topTitle">
      Experience
    </h2>
    <div class="experience__icons">
      <div class="experience__icons__icon">
        <img src="~/assets/images/common/logos/laravel-l-slant.png" />
      </div>
      <div class="experience__icons__icon">
        <img src="~/assets/images/common/logos/new-php-logo.png" />
      </div>
      <div class="experience__icons__icon">
        <img src="~/assets/images/common/logos/vue.png" />
      </div>
      <div class="experience__icons__icon">
        <img src="~/assets/images/common/logos/logo-mysql-170x115.png" />
      </div>
      <div class="experience__icons__icon">
        <img src="~/assets/images/common/logos/perl.png" />
      </div>
      <div class="experience__icons__icon">
        <img src="~/assets/images/common/logos/linux.jpg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience {
  width: 100%;
  padding: 10px;

  .topTitle {
    padding-left: 40px;
    background-image: url('~assets/images/top/experience_title.png');
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 22px 22px;
  }

  &__icons {
    display: flex;
    justify-content: center;

    &__icon {
      width: 100px;
      margin: 10px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
