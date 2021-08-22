<template>
  <div id="app">
    <Header />
    <Catalog />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Catalog from '@/components/Catalog.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    Catalog,
    Footer,
  },
})
export default class App extends Vue {}
</script>
