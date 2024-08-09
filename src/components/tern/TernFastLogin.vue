<template>
  <section class="accounts">
    <base-container>
      <div class="accounts__body">
        <header class="accounts__header">
          <h1>Login as</h1>
        </header>

        <div class="profiles">
          <ul class="profiles__row">
            <tern-fast-login-item
              v-for="session in sessions"
              :key="session.userId"
              :session="session"
            ></tern-fast-login-item>
            <tern-fast-login-plug></tern-fast-login-plug>
          </ul>
        </div>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';

import TernFastLoginItem from './TernFastLoginItem.vue';
import TernFastLoginPlug from './TernFastLoginPlug.vue';

import DefaultAvatar from '@/assets/images/login/login-person.jpg';

export default {
  name: 'TernFastLogin',
  components: {
    BaseContainer,
    TernFastLoginItem,
    TernFastLoginPlug,
  },
  data() {
    return {
      sessions: [
        { userId: 47, avatar: DefaultAvatar, recentOnline: 'Active 1 days ago' },
        { userId: 69, avatar: DefaultAvatar, recentOnline: 'Active 22 days ago' },
        { userId: 228, avatar: DefaultAvatar, recentOnline: 'Active 2821 days ago' },
        { userId: 1488, avatar: DefaultAvatar, recentOnline: 'Active 3 days ago' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.accounts {
  width: 100%;
  height: 50vh;
  background-color: $white-100;
  @media screen and (max-width: 900px) {
    display: none;
  }
  .container {
    padding: 3.125rem 0;
    .accounts__body {
      max-width: calc(100% - (500px + 1.25rem));
    }
    .accounts__header {
      h1 {
        @include fluid-type($text-base, $text-base);
      }
    }
    .profiles {
      margin-top: 1.875rem;
      &__row {
        display: flex;
        gap: 1.25rem;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
