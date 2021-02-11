<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtChild 
      keep-alive :keep-alive-props="{ exclude: ['modal'] }" 
      :key="$route.params.id"
    />
  </div>
</template>