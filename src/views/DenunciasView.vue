<template>
    <div class="background"></div>
    <div class="main">
        <NavBar/>
        <button @click="getStoredData">Carregar Dados</button>
        <div class="card" v-for="(data, index) in storedData" :key="index">
            <div class="container">
                <p>Tipo: {{ data.type }}</p>
                <p>Nome: {{ data.name }}</p>
                <p>E-mail: {{ data.email }}</p>
                <p>Estado: {{ data.state }}</p>
                <p>Cidade: {{ data.city }}</p>
                <p>Endereço: {{ data.address }}</p>
                <p>Ponto de referência: {{ data.reference }}</p>
                <p>Data: {{ data.date }}</p>
            </div>
            <div>
                <p>Denúncia: {{ data.complaint }}</p>
            </div>
            <div class="image">
                <img :src="data.image" alt="">
            </div>
        </div>
    </div>
</template>
  
<script>
import NavBar from '@/components/NavBar.vue';
export default {
    components:{
        NavBar
    },
    data() {
      return {
        storedData: null,
      };
    },
    methods: {
        getStoredData() {
            const data = JSON.parse(localStorage.getItem('formData'));
            if (data) {
            this.storedData = data
            } else {
            this.storedData = null;
            }
        },
    },
    mounted(){
        this.getStoredData()
    }
};
</script>
  
<style scoped lang="scss">
.background{
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-image: url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-repeat: no-repeat;
    background-size: cover; 
    z-index: -1;
}
.main{
    position: relative;
    padding-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    button{
        width: 80vw;
        background-color: transparent;
        border-radius: 20px;
        height: 50px;
        margin: 0 auto;
        color: white;
        border: 2px solid white;
        margin: 10px 0 10px 0;
        cursor: pointer;
    }
}
.card{
    overflow-x: hidden;
    width: 80vw;
    height: 260px;
    border: 2px solid white;
    border-radius: 20px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 4fr 4fr 4fr;
    padding: 10px;
    p{
        color: white;
        font-weight: 600;
    }
    .image{
        border: 2px solid white;
        border-radius: 20px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;
        }
    }
    
}
</style>