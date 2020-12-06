<template>
  <div>
    

    <mt-index-list ref="mylist">
      <h3>热门城市</h3>
      <ul class="hotul">
        <li class="hotli" v-for="data in hotlist" :key="data">{{ data }}</li>
      </ul>
      <mt-index-section
        :index="data.index"
        v-for="data in datalist"
        :key="data.index"
      >
        <div
          v-for="city in data.list"
          :key="city.cityId"
          @click="handleClick(city.cityId)"
        >
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      datalist: [],
      hotlist: [],
    };
  },
  name: "City",
  mounted() {
    console.log(this.$refs.mylist.$el);
    Axios({
      url: "https://m.maizuo.com/gateway?k=3671810",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606488708335226492420097","bc":"430600"}',
        "X-Host": "mall.film-ticket.city.list",
      },
    })
      .then((res) => {
        (this.datalist = this.handleCity(res.data.data.cities)),
          console.log(this.datalist);
      })
      .then((res) => {
        this.hotlist = this.handleHot(this.datalist);
      });
  },
  methods: {
    handleCity(arra) {
      console.log(arra);
      var letterArr = [];
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i));
      }
      var newlist = [];
      for (var j = 0; j < letterArr.length; j++) {
        var arr = arra.filter(
          (item) => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase()
        );
        if (arr.length > 0) {
          newlist.push({
            index: letterArr[j],
            list: arr,
          });
        }
      }
      return newlist;
    },
    handleHot(data) {
      console.log(data);
      var newhotlist = [];
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].list.length; j++) {
          if (data[i].list[j].isHot == 1) {
            newhotlist.push(data[i].list[j].name);
          }
        }
      }
      return newhotlist;
    },
  },
};
</script>
<style scoped>
.hotul{overflow: hidden;}
.hotul .hotli {
  float: left;
  width: 33%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: skyblue;
  
}
</style>