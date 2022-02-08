<script>
import CButton from './CButton.vue'

export default {
  name: 'ToDoTask',
  components: {
    CButton
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="task">
    <div class="task-bullet">&#8226;</div>
    <input
      v-model="task.label"
      type="text"
      class="task-input"
      @change="
        $emit('update', {
          id: task.id,
          type: 'label',
          content: $event.target.value
        })
      "
    />
    <div class="task-control-panel">
      <c-button
        :disabled="!task.label"
        :class="[
          { 'task-control-panel-button--active': task.done },
          { 'task-control-panel-button--not-active': !task.done }
        ]"
        icon="check"
        class="task-control-panel-button"
        @clicked="
          $emit('update', { id: task.id, type: 'done', content: !task.done })
        "
      />
      <c-button
        icon="trash"
        class="task-control-panel-button"
        @clicked="$emit('remove', task.id)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task {
  display: flex;
  height: 50px;

  &-bullet {
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding-left: $spacing-md;
    font-size: $font-size-base;
  }

  &-input {
    flex-grow: 3;
    background: transparent;
    border: none;
    padding: 2px 5px;
    caret-color: white;
    font-size: $font-size-sm;
    font-family: $font-family-base;
    line-height: 100%;
    color: white;
    padding-bottom: 0px;
    border-bottom: 2px solid transparent;

    &:focus,
    &:active {
      border-bottom: 2px solid $secondary-background;
      -webkit-box-shadow: none;
      box-shadow: none;
      outline: none;
    }
  }

  &-control-panel {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex-grow: 1;

    &-button {
      margin-right: $spacing-sm;

      &--active {
        transition: 0.3s;
        opacity: 1;
      }

      &--not-active {
        transition: 0.3s;
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
