<template>
  <div id="app">
    <h1>App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cursos">Cursos</router-link>
      <router-link to="/ceps">Ceps</router-link>
    </nav>
    <transition-group mode="out-in">
      <router-view :key="'default'"></router-view>
      <router-view :key="'sidebar'" name="sidebar"></router-view>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
  margin-top: 60px;
  border: 4px solid;
  margin: 20px;
  padding: 20px;
}

nav {
  padding: 20px 0;
  /* margin-top: 2000px; */
}

a {
  padding: 10px;
  color: #234;
}

.router-link-exact-active {
  color: #4b8;
  font-weight: bold;
}

.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
