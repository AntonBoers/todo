<script>
import TaskInput from './TaskInput.vue';
import CButton from './CButton.vue';
import { mapActions, mapState } from 'vuex';


export default {
  name: 'ToDo',
  components: {
    TaskInput,
    CButton,
  },
  computed: {
    ...mapState(['items']),
    isAnyTasksEmpty() {
      return this.items.some((item) => item.label === '');
    }
  },
  methods: {
    ...mapActions(['addTask', 'removeTask', 'updateTask']),
    add() {
      this.addTask({
        label: '',
        done: false,
      });
    },
    remove(index) {
      this.removeTask(index);
    },
    update(type, index, content) {
      this.updateTask({type, index, content});
    }
  },
}
</script>

<template>
  <div class="todo__container">
    <div class="todo__header">
      <div class="todo__header-title">
        Your current tasks
      </div>
      <c-button 
        :disabled="isAnyTasksEmpty"
        icon="plus"
        size="lg"
        class="todo__header-add"
        @clicked="add"/>
    </div>
    <div class="todo__tasks">
      <div 
        v-for="(item, index) in items"
        :key="`todo__task-${index}`"
        class="todo__task">
        <div class="todo__task-index">
          {{ index + 1 }}. 
        </div>
        <div class="todo__task-input">
          <task-input />
        </div>
        <div class="todo__task-control-panel">
          <c-button icon="check" class="todo__task-control-panel-button todo__task-control-panel-button--not-checked" @clicked="update('done', index, true)" />
          <c-button icon="trash" class="todo__task-control-panel-button" @clicked="remove(index)" />
        </div>
      </div>
    </div>
    <task-input />
  </div>
</template>

<style lang="scss" scoped>
.todo {
  &__container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  &__header {
    position: relative;
    width: 60%;
    height: 50px;
    margin-top: $spacing-lg * 2;

    &-title {
      font-size: 32px;
      color: white;
    }

    &-add {
      position: absolute;
      top: 0;
      right: $spacing-md;
    }
  }

  &__tasks {
    flex: 1;
    width: 60%;
    min-height: 200px;
  }

  &__task {
    display: flex;
    height: 50px;

    &-index {
      display: flex;
      flex-grow: 1;
      align-items: center;
      padding-left: $spacing-md;
      color: white;
      font-size: 28px;
    }

    &-input {
      flex-grow: 3;
    }

    &-control-panel {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      flex-grow: 1;

      &-button {
        margin-right: $spacing-sm;

        &--checked {
          transition: 0.3s;
          opacity: 1;
        }

        &--not-checked {
          transition: 0.3s;
          opacity: 0.5;

          &:hover {
            opacity: 1; 
          }
        }
      }
    }
  }
}
</style>
