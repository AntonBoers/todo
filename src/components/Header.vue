<script>
export default {
  name: 'Header'
}
</script>

<template>
  <div class="header">
    <div class="header__logo">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: $spacing-md;
  color: #ffffff;

  &__logo {
    font-size: 32px;
  }
}
</style>
