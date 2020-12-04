<template>
  <div class="login_body">
        <div>
          <input class="login_text" type="text" placeholder="账户名/手机号/Email">
        </div>
        <div>
          <input class="login_text" type="password" placeholder="请输入您的密码">
        </div>
        <div class="login_btn">
          <input type="submit" value="登录">
        </div>
        <div>
          <a href="#">立即注册</a>
          <a href="#">找回密码</a>
        </div>
      
  </div>
</template>
<script>
export default {
  name: "CinemaList",
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