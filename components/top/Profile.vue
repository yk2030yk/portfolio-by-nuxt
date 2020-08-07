<template>
  <section id="profile" class="profile">
    <h2 class="topTitle">
      Profile
    </h2>
    <div class="profile__icon">
      <div>
        <img src="~/assets/images/top/profile.png" />
      </div>
    </div>
    <div class="profile__list">
      <div class="profile__list__item profile__list__item__title">
        - Info -
      </div>
      <div class="profile__list__item">
        <div>
          <span class="profile__list__item__left">Name.</span>
          <span class="profile__list__item__right">Takahiro Negishi</span>
        </div>
      </div>
      <div class="profile__list__item">
        <div>
          <span class="profile__list__item__left">BirthDay.</span>
          <span class="profile__list__item__right">1993/03/02</span>
        </div>
      </div>

      <div class="profile__list__item profile__list__item__title">
        - Contact -
      </div>
      <div class="profile__list__item">
        <div>
          <span class="profile__list__item__left">Mail.</span>
          <span class="profile__list__item__right">yk.ngsyk@gmail.com</span>
        </div>
      </div>
      <div class="profile__list__item">
        <div>
          <span class="profile__list__item__left">Twitter.</span>
          <span class="profile__list__item__right">@onigirinosakana</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.profile {
  margin-bottom: $space;

  .topTitle {
    padding-left: 40px;
    background-image: url('~assets/images/top/profile_title.png');
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 20px 20px;
  }

  &__icon {
    display: flex;
    justify-content: center;
    padding: $space $space 0 $space;

    div {
      img {
        width: 150px;
      }
    }
  }

  &__list {
    &__item {
      display: flex;
      justify-content: center;
      padding: 5px;

      &__left {
        padding-right: 10px;
        text-align: right;
      }
    }

    &__item__title {
      margin-top: $space;
      font-weight: bold;
      text-align: center;
    }
  }
}
</style>
