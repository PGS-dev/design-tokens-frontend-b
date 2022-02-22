<template>
  <div id="app">
    <header>
      <router-link to="/">colors</router-link>
      <router-link to="/a11y">a11y</router-link>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(145, 145, 145);
  display: flex;
  align-items: center;
  margin: 1rem;
  justify-content: center;
  align-content: inherit;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  a {
    display: inline-block;
    margin-right: 1rem;
  }
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: $color-base-black;
}

.router-link-exact-active {
  color: $color-base-jasper-300;
  font-weight: bold;
}

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

.d-none {
  display: none;
}
</style>