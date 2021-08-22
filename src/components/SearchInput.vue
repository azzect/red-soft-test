<template>
  <div class="search-input">
    <input class="search-input__input h5" placeholder="Поиск по названию картины"/>
    <Button
    text="Найти"
    class="search-input__btn"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class SearchInput extends Vue {

}
</script>
