<template>
  <!-- services -->
  <section class="services">
    <base-container>
      <base-title>{{ title }}</base-title>

      <div class="services-body">
        <ul class="services-cards">
          <li class="services-cards__item" v-for="service in services" :key="service.id">
            <header class="services-cards__item-header">
              <!-- <img :src="service.icon" alt="Icon" /> -->
              <font-awesome-icon :icon="service.icon" class="icon"></font-awesome-icon>
            </header>
            <div class="services-cards__item-text">
              <h1>{{ service.title }}</h1>
              <p>{{ service.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseTitle from '@/components/UI/BaseTitle.vue';

export default {
  name: 'AppServices',
  components: {
    BaseContainer,
    BaseTitle,
  },
  props: {
    title: String,
    services: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.services {
  padding: 9.375rem 0;
  &.gray {
    background-color: $white-500;
  }
  .container {
    .services-body {
      margin-top: 7.5rem;
      .services-cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 5rem;
        @media screen and (max-width: 900px) {
          grid-template-columns: 1fr 1fr;
        }
        @media screen and (max-width: 500px) {
          grid-template-columns: 1fr;
        }
        &__item {
          @include center-col;
          &-header {
            @include center;
            width: 6.25rem;
            aspect-ratio: 1 / 1;
            border-radius: 0.625rem;
            background-color: $white-200;
            .icon {
              font-size: 2rem;
              color: $blue-200;
            }
          }
          &-text {
            margin-top: 2rem;
            text-align: center;
            h1 {
              @include fluid-type($text-xl, $text-xl, 700, $blue-200);
            }
            p {
              @include fluid-type($text-base, $text-base, $color: $gray-200);
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
