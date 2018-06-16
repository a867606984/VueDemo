<template>
  <div id="app">
      <keep-alive>
        <router-view v-if="to.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!to.meta.keepAlive"></router-view>
    <navFooter  v-show="route"></navFooter>
  </div>
</template>

<script>
import navFooter from "./common/footer.vue";
export default {
  components: {
    navFooter
  },
  name: "app",

  data() {
    return {};
  },
  mounted() {},
  watch: {
    $route(to) {
      if (
        to.path === "/login" ||
        to.path === "/register" ||
        to.path === "/details"
      ) {
        this.$store.dispatch("hideRoute");
      } else {
        this.$store.dispatch("showRoute");
      }
    }
  },
  computed: {
    route() {
      return this.$store.getters.route;
    }
  }
};
</script>

<style>
@import "mint-ui/lib/style.css";
@import "./assets/css/animate.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  padding-bottom: 0.5rem;
  overflow: hidden;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  /* transform: translateX(); */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
</style>

