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
background-image: url('https://revistacenarium.com.br/wp-content/uploads/2024/09/andiorg-br-queimadas-na-amazonia-caem-pela-metade-em-agosto-incendios-banner-interno-1-1.png');
background-repeat: no-repeat;
background-size: cover; 
}
</style>