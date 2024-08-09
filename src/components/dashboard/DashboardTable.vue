<template>
  <div class="table-wrapper">
    <table class="table">
      <thead class="table__header">
        <tr>
          <th>Services</th>
          <th>Status</th>
          <th>Active Until</th>
          <th>Auto Renewal</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody class="table__body">
        <tr v-for="row in this.rows" :key="row.id">
          <th class="table-item service">
            <div class="table-item__service">
              <div class="table-item__service-icon">
                <slot name="icon"></slot>
              </div>
              <div class="table-item__service-text">
                <h2>{{ row.title }}</h2>
                <h3>{{ row.category }}</h3>
              </div>
            </div>
          </th>
          <th class="table-item">
            <div class="table-item__status">
              <h3 :class="{ online: row.isOnline, offline: !row.isOnline }">
                {{ row.isOnline ? 'Online' : 'Offline' }}
              </h3>
            </div>
          </th>
          <th class="table-item">
            <div class="table-item__active">
              <h3>{{ row.expiration }}</h3>
            </div>
          </th>
          <th class="table-item">
            <div class="table-item__renewal">
              <base-switch
                :id="row.id"
                :on="this.switchOn"
                :off="this.switchOff"
                :isEnabled="row.isAutoRenewal"
              ></base-switch>
            </div>
          </th>
          <th class="table-item">
            <div class="table-item__actions">
              <base-button class="btn-white" @click="this.actionRenew(row.id)" v-if="this.actionRenew"
                >Renew</base-button
              >
              <base-button class="btn-secondary" @click="this.actionControls(row.id)" v-if="this.actionControls"
                >Controls</base-button
              >
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseSwitch from '@/components/UI/BaseSwitch.vue';

export default {
  name: 'DashboardTable',
  props: {
    rows: Array,
    switchOn: Function,
    switchOff: Function,
    actionRenew: Function,
    actionControls: Function,
  },
  components: {
    BaseButton,
    BaseSwitch,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.table-wrapper {
  overflow: auto;
  .table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1rem;
    &__header,
    &__body {
      white-space: nowrap;
      tr {
        th {
          @include fluid-type($text-lg, $text-lg, 600, $black-2);
          background-color: $white-100;
          padding: 1rem;
          text-align: left;
          &:first-child {
            border-radius: 25px 0 0 25px;
          }
          &:last-child {
            border-radius: 0 25px 25px 0;
          }
        }
      }
    }
    &__header {
      tr {
        th {
          padding: 2rem 1rem;
        }
      }
    }
    &__body {
      tr {
        .table-item {
          &__service {
            @include center-y;
            &-icon {
              @include center;
              width: 54px;
              aspect-ratio: 1 / 1;
              border-radius: 50%;
              background-color: rgba($blue-100, 0.1);
              .icon {
                color: $blue-100;
                font-size: $text-xl;
              }
            }
            &-text {
              margin-left: 0.5rem;
              h2 {
                @include fluid-type($text-lg, $text-lg, 600, $black-2);
              }
              h3 {
                @include fluid-type($text-base, $text-base, 500, $gray-100);
                margin-top: 0.25rem;
                text-align: left;
              }
            }
          }
          &__status {
            h3 {
              @include fluid-type($text-base, $text-base, 700);
              text-transform: uppercase;
              &.online {
                color: $green-2;
              }
              &.offline {
                color: $red-1;
              }
            }
          }
          &__active {
            h3 {
              @include fluid-type($text-base, $text-base, 600, $blue-200);
            }
          }
          &__actions {
            button {
              margin-left: 0.5rem;
              &:first-child {
                margin-left: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
