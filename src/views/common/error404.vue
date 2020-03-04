<style scoped>
  .index {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }

  #index_pc_bj {
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
    /*background-image: url(../../images/error404.gif);*/
    background-position: center center;
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  #index_pc_bj img {
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="index">
    <div id="index_pc_bj">
      <img src="../../images/error404.gif" alt=""/>
    </div>
  </div>
</template>

<script>
import blog from '@/api/blog'

export default {
  name: 'hotBlog',
  data () {
    return {
      hotBlog: []
    }
  },
  created () {
    // blog.getHotBlog().then(response => {
    //   this.hotBlog = response.data
    // })
  },
  mounted () {
    // 直接打印不到
    this.setUserInfo()

    // 加一定的延时就可以打印出来
    let _this = this
    setTimeout(function () {
      _this.setUserInfo()
    }, 100)
  },

  methods: {
    // 将url传递过来的参数存入LocalStorage
    setUserInfo: function () {
      const code = this.$route.query.code
      console.log(code)
    }
  }

}
</script>
