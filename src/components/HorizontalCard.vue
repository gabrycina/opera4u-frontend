<template lang="pug">
.h-card(:class="classes" :style="styles")
  .h-card__title(
    v-if="$slots.title"
    :class="{ 'h-card__title--has-toolbar': titleHasToolbar, [titleClass]: titleClass || false }")
    slot(name="title")
  .h-card__title(v-else-if="title" :class="titleClass || false" v-html="title")
  w-image.h-card__image(v-if="image" :src="image" v-bind="imgProps")
    slot(name="image-content")
  .h-card__content(:class="contentClass || false")
    slot
  .h-card__actions(
    v-if="$slots.actions"
    :class="{ 'h-card__actions--has-toolbar': actionsHasToolbar }")
    slot(name="actions")
</template>

<script>
export default {
  name: 'HorizontalCard',

  props: {
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    noBorder: { type: Boolean },
    tile: { type: Boolean },
    title: { type: String },
    image: { type: String },
    imageProps: { type: Object },
    titleClass: { type: String },
    contentClass: { type: String }
  },

  emits: [],

  computed: {
    titleHasToolbar () {
      const { title } = this.$slots
      return title && title.map(vnode => vnode.tag).join('').includes('w-toolbar')
    },
    actionsHasToolbar () {
      const { actions } = this.$slots
      return actions && actions.map(vnode => vnode.tag).join('').includes('w-toolbar')
    },
    imgProps () {
      return {
        tag: 'div',
        ratio: 1 / 2,
        ...this.imageProps
      }
    },
    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'h-card--no-border': this.noBorder,
        'h-card--tile': this.tile,
        'h-card--shadow': this.shadow
      }
    },
    styles () {
      return false
    }
  }
}
</script>

<style lang="scss">

.h-card {
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 3px;
  border: rgba(0, 0, 0, 0.15);

  &--tile {border-radius: 0;}
  &--shadow {box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
             0 2px 2px 0 rgba(0, 0, 0, 0.15),
             0 1px 5px 0 rgba(0, 0, 0, 0.15);}
  &--no-border, &--shadow {border: none;}

  &__title {
    display: flex;
    align-items: center;
    padding: (2 * round((14 / 4))) (3 * round((14 / 4)));
    font-size: 1.3em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    &--has-toolbar {padding: 0;border-bottom: none;}
  }

  &__content {
    padding: 3 * round((14 / 4));
    flex-grow: 1;
  }

  &__actions {
    display: flex;
    padding: (2 * round((14 / 4))) (3 * round((14 / 4))) (3 * round((14 / 4)));
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    &--has-toolbar {padding: 0;}
  }
}
</style>