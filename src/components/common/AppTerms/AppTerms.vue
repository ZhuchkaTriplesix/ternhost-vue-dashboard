<template>
  <!-- Terms of Use -->
  <section class="terms-wrapper">
    <base-container>
      <div class="terms">
        <h1>© Copyright Ⓒ TernHost. All Rights Reserved.</h1>
        <ul class="terms__group">
          <li class="terms__group-item" v-for="term in terms" :key="term.id">
            <router-link :to="term.url" class="terms__group-item__link">{{ term.title }}</router-link>
          </li>
        </ul>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';

export default {
  name: 'AppTerms',
  components: {
    BaseContainer,
  },
  data() {
    return {
      terms: [
        { id: 1, title: 'Privacy Policy', url: '/' },
        { id: 2, title: 'Terms Condition', url: '/' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.terms-wrapper {
  @include center-x;
  padding: 1.5rem 0;
  .container {
    .terms {
      @include center-y-between;
      @media screen and (max-width: 600px) {
        flex-direction: column;
      }
      h1 {
        @include fluid-type($text-sm, $text-sm, $color: $blue-200);
        @media screen and (max-width: 600px) {
          order: 1;
          margin-top: 1rem;
        }
      }
      &__group {
        @include center-x;
        @media screen and (max-width: 600px) {
          order: 0;
        }
        &-item {
          &:last-child {
            border-left: 0.063rem solid $blue-200;
          }
          &__link {
            @include fluid-type($text-sm, $text-sm, $color: $blue-200);
            margin: 0 0.5rem;
          }
        }
      }
    }
  }
}
</style>
