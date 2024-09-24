<template>
    <NavBar/>
    <div class="main">
        <div class="content">
            <div class="form">
    
            </div>
            <div class="img">
                <img src="https://paulista.pe.gov.br/site/app/webroot/files/arquivos/050720181535000000000.jpg" alt="">
            </div>
        </div>
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
background: linear-gradient(90deg, #82ae92, #3c5a47);
display: flex;
justify-content: center;
align-items: center;
.content{
    padding-top: 100px;
    border-radius: 10px;
    width: 1200;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 6fr 6fr;
    .form{
        background-color: black;
    }
    .img{
        img{
            object-fit: cover;
            border-radius: 0 10px 10px 0px;
            height: 100%;
            width: 700px;
        }
    }
}
}
</style>