<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont">&#xe60c;</i>
        <input v-model="message" type="text" />
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视/综艺</h3>
      <ul>
        <li v-for="data in movieList" :key="data.index">
          <div class="img"><img :src="data.poster" /></div>
          <div class="info">
            <p>
              <span>{{ data.name }}</span
              ><span>9.2</span>
            </p>
            <p>A.Cool.Fish</p>
            <p>剧情·喜剧·犯罪</p>
            <p>2018-11-16</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      message: "",
      movieList: [],
    };
  },
  watch: {
    message(newVal) {
      console.log(newVal);
      Axios({
        url:
          "https://m.maizuo.com/gateway?cityId=430900&pageNum=1&pageSize=10&type=1&k=2272100",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606488708335226492420097"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        var newlist=res.data.data.films;
        console.log(newlist);
        for(var i=0;i<newlist.length;i++){
          if (newlist[i].name == newVal) {
            this.movieList=[],
          this.movieList.push(newlist[i])
        }
        }
        
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>