<script>
export default {
  name: 'CButton',
  props: {
  },
  computed:{
  },
}
</script>

<template>
    <div>
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
        background-color: $secondary-action;
        cursor: pointer;
    }

    &__icon {
        color: white;
    }
}
</style>
