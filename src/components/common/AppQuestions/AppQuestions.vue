<template>
  <section class="faq">
    <base-container>
      <base-title>Have a question? FAQ</base-title>

      <div class="faq-body">
        <ul class="questions">
          <question-item
            v-for="item in faq"
            :key="item.id"
            :id="item.id"
            :question="item.question"
            :answer="item.answer"
          ></question-item>
        </ul>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseTitle from '@/components/UI/BaseTitle.vue';

import QuestionItem from './QuestionItem.vue';

export default {
  name: 'AppQuestions',
  components: {
    BaseContainer,
    BaseTitle,
    QuestionItem,
  },
  props: {
    faq: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.faq {
  padding: 9.375rem 0;
  .container {
    .faq-header {
      text-align: center;
      h1 {
        @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
      }
    }
    .faq-body {
      margin-top: 4.375rem;
    }
  }
}
</style>
