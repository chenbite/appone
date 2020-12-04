<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <Login />
        <TabBar />
    </div>
</template>
<script>
import TabBar from '@/components/TabBar'
import Header from '@/components/Header'
import Login from '@/components/Login'
export default {
    name:'Mine',
    components:{
        TabBar,
        Header,
        Login
    }
}
</script>
<style lang="scss">

</style>