<template>
<main class="page">
  <div class="page__wrapper">
      <div class="page__title">
        <h1>
          Картины Эпохи возраждения
        </h1>
  </div>
  <div class="page__cards">
        <PaintCard
          v-for="(paint, index) in paints" :key="paint.title"
          :title="paint.title"
          :author="paint.author"
          :imgUrl="paint.imgUrl"
          :oldPrice="paint.oldPrice"
          :price="paint.price"
          :isInBasket="paint.isInBasket"
          @changeOrderStatus="onChangeOrderStatus(index)"/>
  </div>
  </div>
</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PaintCard from '@/components/PaintCard.vue';

const LOCALSTORAGE_PLANTS_NAME = 'LOCALSTORAGE_PLANTS_NAME ';

interface Paint {
  title: string;
  author: string;
  imgUrl: string;
  oldPrice: number;
  price: number;
  isInBasket: boolean;
}

@Component({
  components: {
    PaintCard,
  },
})
export default class Catalog extends Vue {
  paints: Paint[] = []

  mounted() {
    this.getPaints();
  }

  getPaints() {
    const savedPaintsString = localStorage.getItem(LOCALSTORAGE_PLANTS_NAME);

    if (savedPaintsString === null) {
      this.getHardcodePaints();
    } else {
      this.paints = JSON.parse(savedPaintsString);
    }
  }

  getHardcodePaints() {
    const paints: Paint[] = [];

    const paint1: Paint = {
      title: '«Рождение Венеры»',
      author: 'Сандро Боттичелли',
      imgUrl: 'paints/paint1.png',
      oldPrice: 2000000,
      price: 1000000,
      isInBasket: false,
    };

    const paint2: Paint = {
      title: '«Тайная вечеря»',
      author: 'Леонардо да Винчи',
      imgUrl: 'paints/paint2.png',
      oldPrice: 0,
      price: 3000000,
      isInBasket: false,
    };

    const paint3: Paint = {
      title: '«Сотворение Адама»',
      author: 'Микеланджело',
      imgUrl: 'paints/paint3.png',
      oldPrice: 6000000,
      price: 5000000,
      isInBasket: true,
    };

    const paint4: Paint = {
      title: '«Урок анатомии»',
      author: 'Рембрандт',
      imgUrl: 'paints/paint4.png',
      oldPrice: 0,
      price: 0,
      isInBasket: false,
    };
    paints.push(paint1);
    paints.push(paint2);
    paints.push(paint3);
    paints.push(paint4);
    this.paints = paints;
  }

  onChangeOrderStatus(index: number) {
    this.paints[index].isInBasket = !this.paints[index].isInBasket;
    this.savePants();
  }

  savePants() {
    localStorage.setItem(LOCALSTORAGE_PLANTS_NAME, JSON.stringify(this.paints));
  }
}
</script>
