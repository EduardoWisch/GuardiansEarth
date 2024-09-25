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
background-image: url('https://images.ecycle.com.br/wp-content/uploads/2024/02/15115920/qual-e-a-diferenca-entre-poluicao-e-contaminacao-da-agua-1024x683.jpg.webp');
background-repeat: no-repeat;
background-size: cover; 
}
</style>