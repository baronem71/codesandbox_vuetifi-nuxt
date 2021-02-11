<template>
  <!-- Typer ******************************************

  -->
  <div style="position: relative;">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <div>
      <my-teleport></my-teleport>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'

export default {
  // components: {
  //   'MyTeleport': () => import('~/components/modals/MyTeleport')
  // },
  components: {
    MyTeleport: defineAsyncComponent(() =>
      import('~/components/modals/MyTeleport')
    )
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