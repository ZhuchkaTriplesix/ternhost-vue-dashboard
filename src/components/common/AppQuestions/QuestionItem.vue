<template>
  <li class="questions__item" ref="item">
    <header class="questions__item-header" :data-question-id="this.id" ref="question" @click="animate()">
      <h1>{{ this.question }}</h1>
      <div class="icon" ref="itemIcon">
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" />
      </div>
    </header>

    <div class="questions__item-body" :data-answer-id="this.id" ref="answer">
      <p>{{ this.answer }}</p>
    </div>
  </li>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'QuestionItem',
  props: {
    id: Number,
    question: String,
    answer: String,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      const tl = gsap.timeline();

      tl.to(this.$refs.item, {
        height: `${this.$refs.item.offsetHeight + this.$refs.answer.offsetHeight}px`,
        duration: 0.33,
        onComplete: () => (this.isShow = true),
      })
        .to(this.$refs.itemIcon, {
          rotateX: '180deg',
          duration: 0.33,
        })
        .to(this.$refs.answer, {
          y: '50%',
          duration: 0,
        })
        .to(this.$refs.answer, {
          y: 0,
          opacity: 1,
          duration: 0.33,
        });
    },
    close() {
      const tl = gsap.timeline();

      tl.to(this.$refs.answer, {
        opacity: 0,
        y: '50%',
        duration: 0.33,
      })
        .to(this.$refs.item, {
          height: `${this.$refs.question.offsetHeight}px`,
          duration: 0.33,
          onComplete: () => (this.isShow = false),
        })
        .to(this.$refs.itemIcon, {
          rotateX: '0deg',
          duration: 0.33,
        });
    },
    animate() {
      !this.isShow ? this.show() : this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.questions__item {
  margin-top: 1.5rem;
  border: 0.063rem solid $gray-200;
  box-shadow: 0 0.25rem 1.25rem 0 rgba($green-100, 0.3);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &-header {
    @include center-y-between;
    padding: 1rem;
    position: relative;
    z-index: 3;
    background-color: $white-100;
    h1 {
      @include fluid-type($text-lg, $text-3xl, 600, $blue-200);
    }
    .icon {
      font-size: 1.5rem;
      color: $blue-200;
    }
  }
  &-body {
    padding: 1rem;
    position: absolute;
    opacity: 0;
    p {
      @include fluid-type($text-base, $text-lg, 500, rgba($blue-200, 0.5));
    }
  }
}
</style>
