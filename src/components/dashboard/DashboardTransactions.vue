<template>
  <div class="box transactions">
    <header class="transactions__header">
      <h1>Latest Transactions</h1>
    </header>

    <div class="transactions__body">
      <ul class="transactions__body-group">
        <li class="transactions__body-group__item" v-for="transaction in this.slicedTransactions" :key="transaction.id">
          <div class="transaction">
            <div class="transaction__icon">
              <font-awesome-icon :icon="this.getIconByCategory(transaction.category)" class="icon"></font-awesome-icon>
            </div>
            <div class="transaction__data">
              <div class="transaction__data-category">
                <h1>{{ transaction.goods }}</h1>
                <h3>{{ transaction.category }}</h3>
              </div>
              <div class="transaction__data-amount">
                <h1 :class="this.getTransactionColor(transaction.status)">
                  {{ this.getTransactionAmount(transaction) }}
                </h1>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardTransactions',
  data() {
    return {
      transactions: [
        { id: 0, goods: 'Domain 12 month', category: 'Web Builder', amount: 23.59, status: 1 },
        { id: 1, goods: 'Hosting 36 months', category: 'Hosting', status: 3 },
        { id: 2, goods: 'Account Income', category: 'Money', amount: 200.5, status: 2 },
      ],
    };
  },
  computed: {
    slicedTransactions() {
      return this.transactions.slice(-Math.min(3, this.transactions.length));
    },
  },
  methods: {
    getTransactionColor(status) {
      switch (status) {
        case 1:
          return 'red';
        case 2:
          return 'green';
        case 3:
          return 'yellow';
        default:
          break;
      }
    },
    getIconByCategory(category) {
      switch (category) {
        case 'Web Builder':
          return 'fa-solid fa-shield-dog';
        case 'Hosting':
          return 'fa-solid fa-server';
        case 'Money':
          return 'fa-solid fa-circle-dollar-to-slot';
        default:
          break;
      }
    },
    getTransactionAmount(transaction) {
      switch (transaction.status) {
        case 1:
          return `-${transaction.amount}`;
        case 2:
          return `+${transaction.amount}`;
        case 3:
          return 'Prepaid';
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.box {
  background-color: $white-100;
  border-radius: 1.5rem;
  padding: 2rem;
}

.transactions {
  grid-area: 3 / 3 / 5 / 5;
  @media screen and (max-width: 1400px) {
    grid-area: 3 / 3 / 5 / 5;
  }
}

.transactions {
  &__header {
    h1 {
      @include fluid-type($text-xl, $text-2xl, 600, $black-2);
    }
  }
  &__body {
    margin-top: 2.5rem;
    &-group {
      &__item {
        margin-top: 1.5rem;
        .transaction {
          @include center-y;
          &__icon {
            @include center;
            width: 3rem;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            background-color: rgba($blue-100, 0.1);
            .icon {
              font-size: $text-lg;
              color: $blue-100;
            }
          }
          &__data {
            width: 100%;
            @include center-y-between;
            margin-left: 1rem;
            &-category {
              h1 {
                @include fluid-type($text-base, $text-lg, 600, $black-2);
              }
              h3 {
                @include fluid-type($text-sm, $text-sm, 500, $gray-200);
                margin-top: 0.25rem;
              }
            }
            &-amount {
              h1 {
                @include fluid-type($text-base, $text-lg, 600, $black-2);
                &.green {
                  color: $green-2;
                }
                &.red {
                  color: $red-1;
                }
                &.yellow {
                  color: $yellow-2;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
