<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.index">
        <div class="photo"><img :src="data.poster" /></div>
        <h3>{{data.name}}</h3>
        <p>电影类型:{{data.category}}</p>
        <div class="buy">预购</div>
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from "axios";

export default {
  name: "ComingSoon",
  data(){
    return{
      datalist:[]
    }
  },
  mounted() {
    Axios({
      url:
        "https://m.maizuo.com/gateway?cityId=430900&pageNum=1&pageSize=10&type=2&k=5057351",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606488708335226492420097"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then(res=>{
      this.datalist=res.data.data.films
    });
  },
};
</script>
<style lang="scss" scoped>
ul {
  margin-bottom: 50px;
  li {
    z-index: 0;
    padding: 10px;
    overflow: hidden;
    margin-left: 10px;
    flex: 1;
    position: relative;
    .buy {
      width: 35px;
      height: 25px;
      border: 1px solid orange;
      position: absolute;
      right: 20px;
      top: 20px;
      text-align: center;
      line-height: 25px;
      font-size: 13px;
      color: orange;
    }
    .photo {
      width: 65px;
      height: 100px;
      float: left;
      margin-right: 10px;
      img {
        width: 65px;
      }
    }
  }
  h3 {
    font-size: 17px;
    line-height: 24px;
    width: 150px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p {
    font-size: 13px;
    color: #666;
    line-height: 22px;
    width: 200px;
  }
}
</style>