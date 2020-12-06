
<template>
  <div class="cinema_body">
    <ul>
      <li v-for="data in datalist" :key="data.index">
        <div>
          <span>{{data.name}}</span>
          <span class="q"><span class="price"> {{data.lowPrice/100}} </span>元起</span>
        </div>
        <div class="address">
          <span>{{data.address}}</span><br>
          <span>{{data.Distance.toFixed(2)}}km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "CinemaList",
  data(){
    return{
      datalist:[]
    }
  },
  mounted() {
    Axios({
      url: `https://m.maizuo.com/gateway?cityId=430600&ticketFlag=1&k=962892`,

      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606488708335226492420097"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then(res=>{
      this.datalist=res.data.data.cinemas;
      console.log(this.datalist);
    });
  },
};
</script>
<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .addresscspan:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div .or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card {
  color: #589daf;
}
</style>