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
    blog.getHotBlog().then(response => {
      this.hotBlog = response.data
    })
  },
  methods: {
    router (id) {
      scrollTo(0, 0)
      this.$router.push({ // 路由跳转
        path: '/blog/' + id
      })
    }
  }

}
</script>
