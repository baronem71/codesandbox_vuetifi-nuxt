<template>
  <!-- Type Tests ******************************************

  -->
<div id="dynamic-component-demo" class="demo">
  <button
     v-for="tab in tabs"
     :key="tab"
     :class="['tab-button', { active: currentTab === tab }]"
     @click="currentTab = tab"
   >
    {{ tab }}
  </button>
<!-- Inactive components will be cached! -->
<keep-alive>
  <component :is="currentTabComponent">     </component>
</keep-alive>
</div>
</template>
<script>
//import { defineAsyncComponent } from 'vue'
//import MyTyper from "~/components/MyTyper"

export default {
  components: {
    'TabHome': () => import('~/components/tabs/TabHome'),
    'TabPosts': () => import('~/components/tabs/TabPosts'),
    'TabArchive': () => import('~/components/tabs/TabArchive'),
  },
  // components: {
  //   TabHome: defineAsyncComponent(() => import('~/components/tabs/TabHome')),
  //   TabPosts: defineAsyncComponent(() => import('~/components/tabs/TabPosts')),
  //   TabArchive: defineAsyncComponent(() => import('~/components/tabs/TabArchive')),
  // },
  data() {
    return {
      currentTab: 'home',
      tabs: ['home', 'posts', 'archive']
    }

  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
}
</script>
<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
</style>