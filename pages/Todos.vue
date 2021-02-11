<template>
  <!-- Typer ******************************************

  -->
<div>
  <h3>List Todos using slot</h3>
  <todo v-bind:todos="todos">
  <template v-slot:todo="{ todo }">
    <span v-if="todo.isComplete">✓</span>
    {{ todo.text }}
  </template>
</todo>
</div>
</template>
<script>
//import Todo from "~/components/todos/Todo"

export default {
  components: {
    //Todo
    'Todo': () => import('~/components/todos/Todo')
  },
  data: () => ({
    // todos: [
    // {id: 1, text: 'todo1', isComplete: true},
    // {id: 2, text: 'todo2', isComplete: false},
    // {id: 3, text: 'todo3', isComplete: true},
    // ],
  }),
}
</script>
<style>

</style>