<script>
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  name: "OrderTransfer",
  components: {
    BaseButton
  },
  data() {
    return {
      name: ""
    }
  },
  methods: {
    transfer() {
      if (this.name !== "") {
        console.log('[transfer]: ', this.name);
      }

      this.name = ''
    }
  }
}
</script>

<template>
  <li class="domains__group-item">
    <header class="domains__group-item__header">
      <h1>Transfer Your Domain Now</h1>
    </header>
    <div class="domains__group-item__body">
      <div class="search-domain">
        <input type="text" placeholder="Search your domain..." v-model="this.name"/>
      </div>
      <p>
        Our powerful infrastructure ensures stability and high performance, while our support experts are
        ready to provide you with reliable service. Transfer your domain to our hosting right now.
      </p>
    </div>
    <footer class="domains__group-item__footer">
      <base-button class="btn-secondary" @click="this.transfer">Next</base-button>
    </footer>
  </li>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.domains__group-item {
  align-self: flex-start;
  padding: 2.188rem;
  border-radius: 1.875rem;
  background-color: $white-100;
  max-width: 31.25rem;
  width: 100%;
  box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    padding: 1.25rem;
    border-radius: 1rem;
  }

  &__header {
    h1 {
      @include fluid-type($text-xl, $text-3xl, 700, $blue-200);
    }
  }

  &__body {
    margin-top: 2.5rem;

    .search-domain {
      display: flex;
      justify-content: space-between;
      background-color: $white-200;
      border-radius: 0.313rem;

      input {
        @include fluid-type($text-sm, $text-base, $color: $gray-200);
        padding: 1.063rem;
        background-color: transparent;
        flex-grow: 1;
      }

      button {
        padding: 0 1rem;
        display: flex;
        align-items: center;
        @media screen and (max-width: 500px) {
          padding: 0 0.5rem;
        }

        span {
          @include fluid-type($text-sm, $text-base, 700, $white-100);
        }

        .icon {
          margin-left: 1rem;
        }
      }
    }

    p {
      @include fluid-type($text-sm, $text-base, $color: $gray-200);
      margin-top: 2.5rem;
    }
  }

  &__footer {
    margin-top: 1rem;

    button {
      width: 100%;
      box-shadow: 0 0.25rem 1.25rem 0 rgba(#779341, 0.3);
    }
  }
}
</style>