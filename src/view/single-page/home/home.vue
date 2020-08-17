<template>
  <div>
    <Row>
      <span>资源管理后台管理</span>
    </Row>
  </div>
</template>

<script>
  // import { getUserInfo } from '@/api/user.js'
    export default {
        name: 'home',
        mounted() {
        /* getUserInfo().then(res => {
            if (res.code === 0) {
              console.log('数据获取成功');
            }
          }) */
        }
    }
</script>

<style lang="less">
  .count-style {
    font-size: 50px;
  }
</style>
