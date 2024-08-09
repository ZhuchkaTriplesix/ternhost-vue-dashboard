<template>
  <section class="reviews">
    <base-container>
      <base-title>Word from our clients</base-title>

      <swiper-container
        class="swiper"
        slides-per-view="3"
        space-between="30"
        :pagination="{
          clickable: true,
          dynamicBullets: true,
        }"
        :breakpoints="{
          360: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide v-for="review in reviews" :key="review.id">
          <div class="review">
            <div class="review-text">
              <p>{{ review.text }}</p>
            </div>
            <div class="review-author">
              <h1>{{ review.author }}</h1>
              <h3>{{ review.location }}</h3>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseTitle from '@/components/UI/BaseTitle.vue';

export default {
  name: 'HomeReviews',
  components: {
    BaseContainer,
    BaseTitle,
  },
  data() {
    return {
      reviews: [
        {
          id: 1,
          author: 'James Harly',
          location: 'Harly web, USA',
          text: 'Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo.',
        },
        {
          id: 2,
          author: 'James Harly',
          location: 'Harly web, USA',
          text: 'Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo.',
        },
        {
          id: 3,
          author: 'James Harly',
          location: 'Harly web, USA',
          text: 'Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo.',
        },
        {
          id: 4,
          author: 'James Harly',
          location: 'Harly web, USA',
          text: 'Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.reviews {
  padding: 7.5rem 0;
  .container {
    .reviews-header {
      text-align: center;
      h1 {
        @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
      }
    }
    .swiper {
      &::part(container) {
        padding: 3rem 0;
      }
      &::part(bullet),
      &::part(bullet-active) {
        width: 1.25rem;
        height: 0.5rem;
        border-radius: 0.25rem;
        background-color: $blue-100;
        opacity: 1;
        transition: all 0.3s;
      }
      .review {
        text-align: center;
        background-color: $white-200;
        padding: 2.5rem 1rem;
        &-text {
          p {
            @include fluid-type($text-lg, $text-lg, $color: $gray-200);
          }
        }
        &-author {
          margin-top: 1.5rem;
          h1 {
            @include fluid-type($text-xl, $text-xl, 700, $blue-200);
          }
          h3 {
            @include fluid-type($text-sm, $text-sm, $color: $gray-200);
            margin-top: 0.25rem;
          }
        }
      }
    }
  }
}
</style>
