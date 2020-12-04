<template>
    <div>
    <ul>
      <li>
        <div class="photo"><img src="" /></div>
        <h3>名字</h3>
          <p>电影类型:</p>
         <div class="buy">预购</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name:"ComingSoon"
}
</script>
<style lang="scss" scoped>
ul {
  margin-bottom: 50px;
  li {
     z-index:0;
    padding: 10px;
    overflow: hidden;
     margin-left: 10px;
  flex: 1;
  position: relative;
    .buy{
      width:35px;
      height:25px;
     border:1px solid orange;
     position:absolute;
      right:20px;
      top:20px;
       text-align: center;
      line-height:25px;
       font-size:13px;
      color:orange;
    }
  .photo{
    width:65px;
    height:100px;
     float: left;
      margin-right:10px;
    img {
      width:65px;
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