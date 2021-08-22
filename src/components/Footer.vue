<template>
  <footer class="footer">
          <div class="header__wrapper">
        <div class="header__nav">
          <div class="footer__link">
            <img src="@/assets/logo-museum-dark.png" alt="Logo" class="header__logo">
          </div>
          <div class="footer__link">
            Каталог
          </div>
          <div class="footer__link">
            Доставка
          </div>
          <div class="footer__link">
            Оплата
          </div>
          <div class="footer__link">
            Контакты
          </div>
          <div class="footer__link">
            О галерее
          </div>
        </div>
        <div class="header__actions">
          <a class="footer__action footer__link" href="tel:+7 (495) 555-55-55">
              <img
              class="footer__icon"
              src="../assets/svg/phone.svg">
              +7 (495) 555-55-55
          </a>
          <div>
            <div class="footer__action">
              <img
                class="footer__icon"
                src="../assets/svg/address.svg">
              г. Москва, ул. Расплетина, 24
            </div>
          </div>
        </div>
      </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component
export default class Footer extends Vue {

}
</script>

<style scoped>

</style>
