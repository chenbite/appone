<template>
    <div id="main">
        <Header title="喵喵影院"/>
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/movie/city" class="city_name">
                    <span>岳阳</span><i class="iconfont">&#xe606;</i>
                </router-link>
                <div class="hot_swtich">
                    <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
                    <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
                </div>
                <router-link tag="div" to="/movie/search" class="search_entry">
                    <i class="iconfont">&#xe60c;</i>
                </router-link>
            </div>
        </div>
        <keep-alive>
            <router-view />
        </keep-alive>
        <TabBar />
    </div>
</template>
<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
    name:'Movie',
    components:{
        Header,
        TabBar
    }
}
</script>
<style>
#content{
    flex: none;
    margin-bottom: 0;
}
 #content .movie_menu{
      width: 100%;
      height: 45px;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      justify-content: space-between;
  }
  .city_name{
      margin-left: 20px;
      height: 100%;
       line-height: 45px;
  }
  
  .city_name.active{
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
  }
  .city_name.router-link-active{
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
  }
  .hot_switch{
      
       height: 100%;
      line-height: 45px;
  }
  .hot_item{
      display:inline-block;
      font-size: 15px;
      line-height: 45px;
      color: #666;
      width: 80px;
      text-align: center;
      margin: 0 12px;
      font-weight: 700;
  }
  .hot_item.active{color: #ef4238;border-bottom: 2px solid #ef4238;}
  .hot_item.router-link-active{color: #ef4238;border-bottom: 2px solid #ef4238;}
  .search_entry{
      margin-right: 20px;
       height: 100%;
      line-height: 45px;
  }
  .search_entry.active{color: #ef4238;border-bottom: 2px solid #ef4238;}
  .search_entry.router-link-active{color: #ef4238;border-bottom: 2px solid #ef4238;}
  i{
      font-size: 24px;
      color: red;
  }
</style>

