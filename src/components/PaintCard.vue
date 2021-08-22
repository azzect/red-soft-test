<template>
  <div class="paint-card"
    :class="{'paint-card_disable': isSold}">
    <img :src="imgUrl" alt="Изображение картины" class="paint-card__image">
    <div class="paint-card__info">
      <div>
        <div class="h2">
          {{title}}
        </div>
        <div class="h2">
          {{author}}
        </div>
      </div>
      <div v-if="!isSold">
        <div class="paint-card__actions">
          <div class="paint-card__prices">
            <div v-if="oldPrice" class="paint-card__old-price h6">
              {{stringOfPrice(oldPrice)}}
            </div>
            <div class="h3">
              {{stringOfPrice(price)}}
            </div>
          </div>
          <Button
            :text="btnText"
            :activated="isInBasket"
            :isLoading="isLoading"
            @onClick="btnClicked"
            icon="success"
            class="paint-card__buy-btn" />
        </div>

      </div>
      <h3  v-else>
        Продана на аукционе
      </h3>
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import buyPaint from '@/api/buyPaint';

@Component({
  components: {
    Button,
  },
})
export default class PaintCard extends Vue {
  @Prop({ default: 'Неизвестная картина' }) readonly title!: string;

  @Prop({ default: '' }) readonly imgUrl!: string;

  @Prop({ default: '' }) readonly author!: string;

  @Prop({ default: 0 }) readonly oldPrice!: number;

  @Prop({ default: 0 }) readonly price!: number;

  @Prop({ default: false }) readonly isInBasket!: boolean;

  isLoading = false;

  get isSold(): boolean {
    return !(this.price || this.oldPrice);
  }

  get btnText(): string {
    return this.isInBasket ? ' В корзине' : 'Купить';
  }

  btnClicked() {
    this.isLoading = true;
    buyPaint().then((res) => {
      this.isLoading = false;
      this.$emit('changeOrderStatus');
    })
      .catch((e) => {
        this.isLoading = false;
        throw new Error(e);
      });
  }

  stringOfPrice = (price: number) => `${price.toLocaleString('ru')} $`;
}
</script>

<style scoped>

</style>
