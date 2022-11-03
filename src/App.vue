<template>
  <header></header>
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
  <footer></footer>
</template>
