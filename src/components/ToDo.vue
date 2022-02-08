<script>
import ToDoTask from './ToDoTask.vue'
import CButton from './CButton.vue'
import { mapActions, mapGetters, mapState } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'ToDo',
  components: {
    CButton,
    ToDoTask
  },
  computed: {
    ...mapState(['tasks']),
    ...mapGetters(['allUndoneTasks', 'allDoneTasks']),
    isAnyTasksEmpty() {
      return this.tasks.some((task) => !task.label)
    }
  },
  methods: {
    ...mapActions(['addTask', 'removeTask', 'updateTask']),
    add() {
      this.addTask({
        id: uuidv4(),
        label: '',
        done: false
      })
    }
  }
}
</script>

<template>
  <div class="todo__container">
    <div class="todo__header">
      <div v-if="allUndoneTasks.length" class="todo__header-title">
        Your current tasks
      </div>
      <c-button
        :disabled="isAnyTasksEmpty"
        icon="plus"
        size="lg"
        class="todo__header-add-task-button"
        @clicked="add"
      />
    </div>
    <div class="todo__tasks">
      <div v-for="task in allUndoneTasks" :key="`task-id-${task.id}`">
        <to-do-task
          :task="task"
          @update="updateTask($event)"
          @remove="removeTask($event)"
        />
      </div>
    </div>
    <div class="todo__tasks">
      <h1 v-if="allDoneTasks.length" class="todo__tasks-header">Done</h1>
      <div v-for="task in allDoneTasks" :key="`task-id-${task.id}`">
        <to-do-task
          :task="task"
          @update="updateTask($event)"
          @remove="removeTask($event)"
        />
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
}
</style>
