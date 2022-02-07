<script>
export default {
  name: 'TaskInput',
}
</script>

<template>
    <div class="task-input--WRAPPER">
        <input type="text" class="task-input" required />
    </div>
</template>

<style lang="scss" scoped>
.task-input {
    height: 50px;
    background: transparent;
    border: none;
    padding: 2px 5px;
    caret-color: white;
    font-size: 24px;
    line-height: 100%;
    color: white;
    padding-bottom: 0px;
    border-bottom: 2px solid transparent;

    &__label {
        position: absolute;
        transition: 0.3s;
    }

    &:focus, &:active {
        border-bottom: 2px solid $secondary-background;
        -webkit-box-shadow: none;
        box-shadow: none;
        outline: none;
    }
}
</style>
