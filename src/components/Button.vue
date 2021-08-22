<template>
    <button
      class="btn"
      :class="{
        'btn_activated': activated,
        'btn_disabled': disabled || isLoading,
        }"

        @click="btnClicked">
      <span class="btn__text h4">
        <img
        v-if="isIconSuccess"
        class="btn__icon"
        src="../assets/svg/success.svg"
        >
        {{ btnText }}
      </span>
    </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ default: '' }) text!: string;

  @Prop({ default: false }) isLoading!: boolean;

  @Prop({ default: false }) disabled!: boolean;

  @Prop({ default: false }) activated!: boolean;

  @Prop({ default: '' }) icon!: string;

  get isIconSuccess(): boolean {
    return this.icon === 'success' && this.activated;
  }

  get btnText(): string {
    return this.isLoading ? 'Загрузка...' : this.text;
  }

  btnClicked() {
    if (this.isLoading) return;
    this.$emit('onClick');
  }
}
</script>
