<template>
  <div id="main">
    <Header title="喵喵影院" />
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">全城<i class="iconfont"></i></div>
        <div class="brand_switch">品牌<i class="iconfont"></i></div>
        <div class="feature_switch">特色<i class="iconfont"></i></div>
      </div>
    </div>
    <CinemaList />
    <TabBar />
  </div>
</template>
<script>
import TabBar from "@/components/TabBar";
import Header from "@/components/Header";
import CinemaList from "@/components/CinemaList";
export default {
  name: "Cinema",
  components: {
    TabBar,
    Header,
    CinemaList,
  },
};
</script>
<style lang="scss">
#content{
    flex: none;
    margin-bottom: 0;
}
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>