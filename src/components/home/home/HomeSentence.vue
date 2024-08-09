<template>
  <section class="sentence">
    <base-container>
      <div class="sentence-body">
        <div class="search">
          <h1>Search Your Domain Now</h1>
          <div class="search__input">
            <input type="text" placeholder="Search your domain.."/>
            <base-button class="btn-secondary">
              <a href="/users/signup">Find Now</a>
            </base-button>
          </div>
        </div>

        <div class="vertical-line"></div>

        <div class="domains">
          <home-sentence-domains></home-sentence-domains>
        </div>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import HomeSentenceDomains from './HomeSentenceDomains.vue';

export default {
  name: 'HomeSentence',
  components: {
    BaseContainer,
    BaseButton,
    HomeSentenceDomains,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.sentence {
  padding: 7.5rem 0;

  .container {
    .sentence-body {
      display: grid;
      grid-template-columns: 3fr 0.5fr 7fr;
      @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr;
        grid-gap: 5rem;
      }

      .search {
        align-self: flex-start;
        @media screen and (max-width: 600px) {
          @include center-col;
          flex-direction: column;
        }

        h1 {
          @include fluid-type($text-2xl, $text-3xl, 700, $blue-200);
          margin-bottom: 1rem;
        }

        &__input {
          width: 100%;
          display: flex;

          input {
            @include fluid-type($text-sm, $text-base, $color: $gray-200);
            padding: 1rem;
            background-color: $white-200;
            border-radius: 0.25rem 0 0 0.25rem;
            flex-grow: 1;
          }

          button {
            padding: 0;

            a {
              text-wrap: nowrap;
              color: $white-100;
              padding: 1rem;
              border-radius: 0.25rem;
            }
          }
        }
      }

      .vertical-line {
        width: 0.063rem;
        height: 100%;
        background-color: $white-7;
        margin: 0 auto;
        @media screen and (max-width: 1100px) {
          display: none;
        }
      }
    }
  }
}
</style>
