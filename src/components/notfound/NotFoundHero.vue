<template>
  <section class="hero">
    <base-container>
      <div class="hero-body">
        <div class="hero-body__text">
          <h1>Oops... <br /><span>Page Not Found</span></h1>
          <router-link to="/"><base-button class="btn-secondary">Go Back</base-button></router-link>
        </div>
        <div class="hero-body__image">
          <img :src="assets.NotFoundBackground" alt="Image" />
        </div>
      </div>
    </base-container>
  </section>
</template>

<script>
import NotFoundBackground from '@/assets/images/notfound/404-background.svg';

import BaseButton from '@/components/UI/BaseButton.vue';
import BaseContainer from '@/components/UI/BaseContainer.vue';

export default {
  name: 'NotFoundHero',
  components: {
    BaseButton,
    BaseContainer,
  },
  data() {
    return {
      assets: {
        NotFoundBackground,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero {
  @include center-y;
  min-height: 100vh;
  background-color: $white-200;
  .container {
    .hero-body {
      @include center-y-between;
      @media screen and (max-width: 900px) {
        flex-direction: column;
      }
      &__text {
        @media screen and (max-width: 900px) {
          order: 1;
          text-align: center;
        }
        h1 {
          @include fluid-type($text-4xl, $text-5xl, 700, $blue-200);
          span {
            font-weight: 500;
          }
        }
        button {
          margin-top: 3rem;
        }
      }
      &__image {
        @media screen and (max-width: 900px) {
          order: 0;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
