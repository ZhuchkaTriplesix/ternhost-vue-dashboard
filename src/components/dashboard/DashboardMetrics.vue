<template>
  <a class="box" v-for="metric in this.metrics" :key="metric.id" :class="metric.class" :href="metric.path">
    <div class="domain__body">
      <div class="domain__body-icon">
        <font-awesome-icon :icon="metric.icon" class="icon"></font-awesome-icon>
      </div>
      <div class="domain__body-values">
        <h3>{{ metric.title }}</h3>
        <h1>{{ metric.value }}</h1>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'DashboardMetrics',
  data() {
    return {
      metrics: [
        {
          id: 0,
          title: 'Domain',
          value: 2,
          path: '/dashboard/domain',
          icon: 'fa-solid fa-shield-halved',
          class: 'domain',
        },
        {
          id: 1,
          title: 'Hosting',
          value: 4,
          path: '/dashboard/hosting',
          icon: 'fa-solid fa-shield-halved',
          class: 'hosting',
        },
        {
          id: 2,
          title: 'Web Builder',
          value: 6,
          path: '/dashboard/builder',
          icon: 'fa-solid fa-shield-halved',
          class: 'builder',
        },
        {
          id: 3,
          title: 'Services',
          value: 12,
          path: '/dashboard/service',
          icon: 'fa-solid fa-shield-halved',
          class: 'services',
        },
      ],
    };
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

.domain,
.hosting,
.builder,
.services {
  @include center-y;
  &__body {
    @include center-y;
    &-icon {
      @include center;
      width: 3rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: rgba($blue-100, 0.1);
      cursor: pointer;
      .icon {
        font-size: $text-xl;
        color: $blue-100;
      }
    }
    &-values {
      margin-left: 1rem;
      h3 {
        @include fluid-type($text-base, $text-lg, 500, $gray-200);
      }
      h1 {
        @include fluid-type($text-lg, $text-2xl, 600, $blue-200);
        margin-top: 0.5rem;
      }
    }
  }
}

.hosting {
  grid-area: 1 / 5 / 1 / 5;
  @media screen and (max-width: 1400px) {
    grid-area: 5 / 2 / 5 / 2;
  }
}
.builder {
  grid-area: 1 / 6 / 1 / 6;
  @media screen and (max-width: 1400px) {
    grid-area: 6 / 2 / 6 / 2;
  }
}
.services {
  grid-area: 2 / 5 / 2 / 5;
  @media screen and (max-width: 1400px) {
    grid-area: 6 / 1 / 6 / 1;
  }
}
.domain {
  grid-area: 2 / 6 / 2 / 7;
  @media screen and (max-width: 1400px) {
    grid-area: 5 / 1 / 5 / 1;
  }
}
</style>
