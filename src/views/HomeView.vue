<template>
  <div class="header" >
    <div class="blur"></div>
    <NavBar/>
    <div class="donation">
      <p>Earth Guardian</p>
      <h1>
        Ajude a protejer o meio ambiente
      </h1>
      <div>
        <span>Doe Agora</span>
      </div>
    </div>
  </div>
  <div class="main">
    <div class="infos">
      <p>Devemos amar e proteger a natureza</p>
      <span>Promovemos a preservação da biodiversidade e o fim dos crimes ambientais </span>
      <ul>
        <li>
          <p>
            +5 mil
          </p>
          <span>
            casos denúnciados resolvidos
          </span>
        </li>
        <li>
          <p>
            +200
          </p> 
          <span>
            ações de conscientização realizadas
          </span>
        </li>
        <li>
          <p>
            +100
          </p>
          <span>
            parcerias com ONGs e ativistas
          </span>
        </li>
      </ul>
    </div>
    <div class="cases">
      <div class="animals">
        <div class="animals-img">
          <img src="https://images.pexels.com/photos/5608108/pexels-photo-5608108.jpeg">
        </div>
        <div class="animals-text">
          <h2>Lorem esse kofn jfhgbgj heubfb</h2>
          <p>kkkk kkkkkk kkkkkkkk kkkkkkkk kkkk kkkkkk kkkkkkkk kkkkkkkk kkkk kkkkkk kkkkkkkk kkkkkkkk kkkk kkkkkk kkkkkkkk kkkkkkkk kkkk kkkkkk kkkkkkkk kkkkkkkk kkkk kkkkkk kkkkkkkk kkkkkkkk</p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
  data(){
    return {
      
    }
  },
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
.header{
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  background-attachment: fixed;
  background-image: url("https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-repeat: no-repeat;
  background-size: cover; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  z-index: 10;
  .donation {
    width: 60%;
    display: grid;
    height: 280px;
    z-index: 10;
    p {
      color: white;
      font-weight: 700;
      font-size:32px;
    }
    h1 {
      color: #afafaf;
      font-weight: 700;
      font-size: 24px;
    }
    div {
      display: grid;
      justify-content: center;
      align-items: center;
      background-color:#72967f;
      width: 250px;
      height: 80px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.5s;
      span {
          font-weight: 600;
          font-size: 24px;
      }
    }
    div:hover{
        background-color:#5c7766;
    }
  }
}
.main{
  margin-top: 0px;
  .infos{
    height: 50vh;
    display: grid;
    gap: 50px;
    align-content: center;
    margin: 0 auto;
    p{
      margin: 0 auto;
      font-size: 32px;
      font-weight: 600;
      color: #0c5210;
    }
    span {
      font-size: 22px;
      color: #525252;
      margin: 0 auto;
    }
    ul{
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 60%;
      li {
        text-align: center;
        p {
          text-align: center;
          font-size: 40px;
          color: #4ea653;
          font-weight: 700;
        }
        span{
          text-align: center;
          font-size: 16px;
        }
      }
    }
  }
  .cases {
    .animals{
      margin: 0 auto;
      display: grid;
      grid-template-columns: 6fr 6fr;
      gap: 50px;
      .animals-img {
        display: grid;
        justify-content: end;
        img{
        border-radius: 10px;
        width: 500px;
        height: 550px;
        }
      }
      .animals-text{
        display: grid;
        align-items: center;
        align-content: center;
        gap: 30px;
        width: 500px;
      }
    }
  }
}

</style>
