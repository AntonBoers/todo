<script>
export default {
  name: 'CButton',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['lg', 'md'].includes(value)
    },
    icon: {
      type: String,
      default: 'plus',
      validator: (value) => ['plus', 'trash', 'check'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return `c-button c-button--${this.size} ${
        this.disabled ? 'c-button--DISABLED' : ''
      }`
    }
  }
}
</script>

<template>
  <div :class="classes" @click="$emit('clicked')">
    <font-awesome-icon :icon="icon" class="c-button__icon" />
  </div>
</template>

<style lang="scss" scoped>
.c-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: $primary-action;

  &--md {
    width: 25px;
    height: 25px;
  }

  &--lg {
    width: 40px;
    height: 40px;
  }

  &--DISABLED {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    background-color: $primary-action-hover;
    cursor: pointer;
  }
}
</style>
