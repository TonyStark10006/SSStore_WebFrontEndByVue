<template>
<div>
    <!--<div class="title">-->
        <!--<h1>欢迎来到SSStore</h1>-->
    <!--</div>-->
    <HeaderBar class="layout-header"></HeaderBar>
    <SideMenu class="layout-side-menu"></SideMenu>
</div>
</template>

<script>
import SideMenu from './components/side-menu.vue'
import HeaderBar from './components/header-bar.vue'

export default {
  name: 'panel',
  components: {
    SideMenu: SideMenu,
    HeaderBar: HeaderBar
  }
}
</script>

<style>
@import "../../../static/css/iview.css";
.layout-header, .layout-side-menu {
    font-size: 20px;
}

/*.title {*/
    /*width: 10%;*/
    /*float: left;*/
/*}*/

.layout-header {
    height: 100%;
    width: 100%;
    float: left;
}

.layout-side-menu {
    height: 100%;
    float: left;
    width: 100%;
}

</style>
