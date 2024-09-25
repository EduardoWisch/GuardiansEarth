<template>
    <NavBar/>
    <div class="main">
        <div class="blur"></div>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  }
}
</script>
<style scoped lang="scss">
.blur{
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.3);
  z-index: 1;
}
.main{
min-height: 100vh;
background-image: url('https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_640/https://delegadobrunolima.com.br/wp-content/uploads/2020/12/dog-3778793_1280-1280x640.jpg');
background-repeat: no-repeat;
background-size: cover; 
}
</style>