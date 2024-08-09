<template>
  <section class="hero">
    <base-container>
      <div class="hero-text">
        <h1>Fully Managed Cloud <br />& Wordpress Hosting</h1>
        <h3>
          Deidcated resources, full root access, & easy scaling. It’s the virtual <br />
          private server you’ve been cravin
        </h3>
        <a href="#pricing">
          <base-button class="btn-secondary">View Pricing</base-button>
        </a>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'HomeHero',
  components: {
    BaseContainer,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero {
  background-color: $white-300;
  .container {
    padding: 20rem 0;
    background-image: url('@/assets/images/home/hero-background.svg');
    background-repeat: no-repeat;
    background-position: 100% -200%;
    @media screen and (max-width: 1100px) {
      background-size: 31.25rem;
      background-position: 66% 135%;
    }
    .hero-text {
      position: relative;
      z-index: 3;
      @media screen and (max-width: 600px) {
        @include center;
        flex-direction: column;
        text-align: center;
      }
      h1 {
        @include fluid-type($text-4xl, $text-5xl);
        @include text(700, $blue-200);
      }
      h3 {
        @include fluid-type($text-base, $text-base);
        @include text(400, rgba($blue-200, 0.5));
        margin: 2.25rem 0;
      }
    }
  }
}
</style>
