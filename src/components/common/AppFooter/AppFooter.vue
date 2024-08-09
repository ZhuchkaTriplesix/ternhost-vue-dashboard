<template>
  <!-- footer -->
  <footer class="footer tern-section">
    <base-container>
      <div class="footer__company">
        <base-logo></base-logo>
        <p>
          Nulla diam felis, malesuada ut erat quis, mattis dignissim justo. Cras cursus, lacus et dignissim volutpat
        </p>
      </div>
      <div class="footer__menu">
        <ul class="footer__menu-group">
          <li class="footer__menu-group__item title">Quick Links</li>
          <li class="footer__menu-group__item" v-for="link in links.quick" :key="link.id">
            <router-link :to="link.url">{{ link.title }}</router-link>
          </li>
        </ul>
        <ul class="footer__menu-group">
          <li class="footer__menu-group__item title">Services</li>
          <li class="footer__menu-group__item" v-for="link in links.services" :key="link.id">
            <router-link :to="link.url">{{ link.title }}</router-link>
          </li>
        </ul>
        <div class="footer__double">
          <ul class="footer__menu-group">
            <li class="footer__menu-group__item title">Contact Us</li>
            <li class="footer__menu-group__item"><a href="#">shield.info@gmail.com</a></li>
            <li class="footer__menu-group__item"><a href="#">+91 - 99xxx 000xx</a></li>
          </ul>
          <div class="footer__social">
            <h3>Follow Us</h3>
            <ul class="footer__social-group">
              <li class="footer__social-group__item" v-for="social in links.social" :key="social.id">
                <a :href="social.url">
                  <font-awesome-icon :icon="social.icon" class="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </base-container>
  </footer>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseLogo from '@/components/UI/BaseLogo.vue';

import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default {
  name: 'AppFooter',
  components: {
    BaseContainer,
    BaseLogo,
  },
  data() {
    return {
      links: {
        quick: [
          { id: 0, title: 'Home', url: '/' },
          { id: 1, title: 'About Us', url: '/' },
          { id: 2, title: 'Services', url: '/' },
          { id: 3, title: 'Contact', url: '/' },
        ],
        services: [
          { id: 0, title: 'Shared Web Hosting', url: '/' },
          { id: 1, title: 'VPS Hosting', url: '/' },
          { id: 2, title: 'Dedicated Server', url: '/' },
          { id: 3, title: 'Cloud Hosting', url: '/' },
          { id: 4, title: 'Domain Names', url: '/' },
          { id: 5, title: 'License Keys', url: '/' },
        ],
        social: [
          { id: 1, icon: faFacebook, url: 'https://www.facebook.com/' },
          { id: 2, icon: faTwitter, url: 'https://twitter.com' },
          { id: 3, icon: faYoutube, url: 'https://www.youtube.com/' },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.footer {
  @include center-x;
  width: 100%;
  padding: 6.25rem 0;
  background-color: $white-200;
  margin-top: 3rem;
  @media screen and (max-width: 700px) {
    padding: 3.5rem 0;
  }
  .container {
    display: grid;
    grid-template-columns: 18.75rem auto;
    grid-gap: 6.25rem;
    @media screen and (max-width: 1000px) {
      grid-gap: 2.25rem;
    }
    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    .footer__company {
      @media screen and (max-width: 900px) {
        @include center-col;
        text-align: center;
      }
      &-logo {
        @include center-y;
        h1 {
          @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
          text-transform: uppercase;
          margin-left: 0.25rem;
        }
      }
      p {
        @include fluid-type($text-base, $text-base, $color: $gray-200);
        margin-top: 1.563rem;
      }
    }
    .footer__menu {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-gap: 2.188rem;
        text-align: center;
      }
      &-group {
        &__item {
          margin-top: 0.938rem;
          &.title {
            @include fluid-type($text-base, $text-base, 700);
          }
          a {
            @include fluid-type($text-base, $text-base, $color: $gray-200);
          }
        }
      }
      .footer__double {
        .footer__social {
          margin-top: 2.188rem;
          h3 {
            @include fluid-type($text-base, $text-base, 700);
          }
          &-group {
            display: flex;
            column-gap: 1.25rem;
            margin-top: 0.938rem;
            @media screen and (max-width: 600px) {
              justify-content: center;
            }
            &__item {
              a {
                .icon {
                  font-size: $text-xl;
                  color: $blue-100;
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
