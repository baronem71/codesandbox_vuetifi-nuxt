<template>
<div>
  <ul>
  <li
    v-for="todo in todos"
    v-bind:key="todo.id"
  >
    <slot name="todo" v-bind:todo="todo">
      <!-- Fallback content -->
      {{ todo.text }}
    </slot>
  </li>
</ul>
</div>
</template>
<script>
export default {
  name: "Todo",  
  props: {
    todos: {
      type: Array,
      default: () => { return [
        {id: 1, text: 'todoDefault1', isComplete: true},
        {id: 2, text: 'todoDefault2', isComplete: false},
        {id: 3, text: 'todoDefault3', isComplete: false},
      ] }       
    },
  },
  // data: () => ({
  //   todos: [
  //     {text: 'todo1', isComplete: true},
  //     {text: 'todo2', isComplete: false},
  //     {text: 'todo3', isComplete: false},
  //   ]
  // }),
}
</script>
<style scoped>

</style>