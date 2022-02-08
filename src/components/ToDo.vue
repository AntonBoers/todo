<script>
import CButton from './CButton.vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'ToDo',
  components: {
    CButton,
  },
  computed: {
    ...mapState(['tasks']),
    ...mapGetters(['allUndoneTasks', 'allDoneTasks']),
    isAnyTasksEmpty() {
      return this.tasks.some((task) => !task.label);
    },
  },
  methods: {
    ...mapActions(['addTask', 'removeTask', 'updateTask']),
    add() {
      this.addTask({
        id: uuidv4(),
        label: '',
        done: false,
      });
    },
    update(id, type, content) {
      this.updateTask({id, type, content});
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
        class="todo__header-add-task-button"
        @clicked="add"/>
    </div>
    <div class="todo__tasks">
      <div 
        v-for="(item, index) in allUndoneTasks"
        :key="`todo__task-${index}`"
        class="todo__task">
        <div class="todo__task-bullet">
          &#8226;
        </div>
        <input 
          v-model="item.label"
          type="text"
          class="todo__task-input"
          @change="update(item.id, 'label', $event.target.value)" 
          />
        <div class="todo__task-control-panel">
          <c-button 
            :disabled="!item.label"
            :class="[
              {'todo__task-control-panel-button--checked': item.done},
              {'todo__task-control-panel-button--not-checked': !item.done}
            ]"
            icon="check"
            class="todo__task-control-panel-button"
            @clicked="update(item.id, 'done', !item.done)" />
          <c-button icon="trash" class="todo__task-control-panel-button" @clicked="removeTask(item.id)" />
        </div>
      </div>
    </div>
    <h1 v-if="allDoneTasks.length" class="todo__tasks-header">Done</h1>
    <div class="todo__tasks">
      <div 
        v-for="(item, index) in allDoneTasks"
        :key="`todo__task-${index}`"
        class="todo__task">
        <div class="todo__task-bullet">
          &#8226; 
        </div>
        <input 
          v-model="item.label"
          type="text"
          class="todo__task-input"
          @change="update(item.id, 'label', $event.target.value)" 
        />
        <div class="todo__task-control-panel">
          <c-button 
            icon="check"
            :class="[
            {'todo__task-control-panel-button--checked': item.done},
            {'todo__task-control-panel-button--not-checked': !item.done}
            ]"
            class="todo__task-control-panel-button"
            @clicked="update(item.id, 'done', !item.done)" />
          <c-button icon="trash" class="todo__task-control-panel-button" @clicked="removeTask(item.id)" />
        </div>
      </div>
    </div>
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
    }

    &-add-task-button {
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

    &-bullet {
      display: flex;
      flex-grow: 1;
      align-items: center;
      padding-left: $spacing-md;
      font-size: 28px;
    }

    &-input {
      flex-grow: 3;
      background: transparent;
      border: none;
      padding: 2px 5px;
      caret-color: white;
      font-size: 24px;
      line-height: 100%;
      color: white;
      padding-bottom: 0px;
      border-bottom: 2px solid transparent;
    
      &:focus, &:active {
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
