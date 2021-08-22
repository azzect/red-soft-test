<template>
  <header class="header">
      <div class="header__wrapper">
        <div class="header__nav">
          <div class="header__link">
            <img src="@/assets/logo-museum.png" alt="Logo" class="header__logo">
          </div>
          <div class="header__link">
            Каталог
          </div>
          <div class="header__link">
            Доставка
          </div>
          <div class="header__link">
            Оплата
          </div>
          <div class="header__link">
            Контакты
          </div>
          <div class="header__link">
            О галерее
          </div>
        </div>
        <div class="header__actions">
          <SearchInput />
        </div>
      </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchInput from '@/components/SearchInput.vue';

  @Component({
    components: {
      SearchInput,
    },
  })
export default class Header extends Vue {

}
</script>

<style scoped>

</style>
