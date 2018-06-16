<template>
  <div id="app">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
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
#app > div {
  height: 100%;
  width: 100%;
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

* {
  padding: 0;
  margin: 0;
  font-family: "微软雅黑";
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}
html {
  overflow-y: scroll;
  overflow-x: hidden;
}
body {
  font-family: "冬青黑体简体中文", "微软雅黑", "宋体", Arial, sans-serif;
}
b,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
i {
  font-style: normal;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
label {
  position: relative;
}
img {
  display: block;
}
input {
  outline: none;
  padding: 0 10px;
  box-sizing: border-box;
  border: none;
}
textarea {
  resize: none;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
}
.vhcenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vhbetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vcenter {
  display: flex;
  align-items: center;
}

/****自定义复选框+单选框***/
.baseCheckbox,
.baseRadio {
  padding-left: 20px;
}
.baseCheckbox input,
.baseRadio input {
  position: absolute;
  visibility: hidden;
}
.baseCheckbox span,
.baseRadio span {
  display: block;
  width: 10px;
  height: 10px;
  border: 1px solid #000;
  position: absolute;
  top: calc(50% - 5px);
  left: 0;
}
.baseRadio span {
  border-radius: 50%;
}

.baseCheckbox input:checked + span:after {
  content: "";
  position: absolute;
  display: block;
  width: 3px;
  height: 8px;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  transform: rotate(45deg);
  top: calc(50% - 4px);
  left: calc(50% - 1.5px);
}

.baseRadio input:checked + span:after {
  content: "";
  position: absolute;
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #000;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  top: calc(50% - 3px);
  left: calc(50% - 3px);
}

/*我的宽度*/
.baseWidth {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

/*Flexbox水平垂直居中（父元素可用）*/
.WHcenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

/*单行文本省略号*/
.oneLine {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*多行文本省略号*/
.manyLine {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /*4根据情况改*/
  overflow: hidden;
}

/*适用于WebKit浏览器及移动端*/
.moblieLine {
  position: relative;
  line-height: 20px; /*根据情况改*/
  max-height: 40px; /*根据情况改*/
  overflow: hidden;
}

.moblieLine::after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
  padding-left: 40px;
  background: -webkit-linear-gradient(left, transparent, #fff 55%);
  background: -o-linear-gradient(right, transparent, #fff 55%);
  background: -moz-linear-gradient(right, transparent, #fff 55%);
  background: linear-gradient(to right, transparent, #fff 55%);
}

/**小三角（父元素必须有position:relative）*/
.litlehom::after {
  content: "";
  position: absolute;
  border: solid #000;
  border-width: 1px 1px 0 0;
  transform: rotate(-45deg);
  top: 0;
  left: 50%;
  background: #000;
  width: 10px;
  height: 10px;
  display: block;
}
</style>

