<template>
  <div class="main">
    <NavBar />
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
  .main{
    min-height: 100vh;
    background-color: #82ae92;
  }
</style>
