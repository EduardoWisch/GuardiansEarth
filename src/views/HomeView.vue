<template>
  <div class="header" >
    <div class="blur"></div>
    <NavBar/>
    <div class="donation">
      <p>Earth Guardian</p>
      <h1>
        Ajude a proteger o meio ambiente
      </h1>
      <Router-link to="/denuncias" class="router-link">
        <div>
          <span>Visualizar denúncias</span>
        </div>
      </Router-link>
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
      <div class="cases-geral animals">
        <div class="geral-img">
          <img src="https://paulista.pe.gov.br/site/app/webroot/files/arquivos/050720181535000000000.jpg">
        </div>
        <div class="geral-text" style="position: relative;">
          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill="rgba(114, 150, 127, 0.2)" viewBox="0 0 256 256"
            style="position: absolute; top: -70px; right: -160px; z-index: -1;"
          >
            <path d="M96,140a12,12,0,1,1-12-12A12,12,0,0,1,96,140Zm76-12a12,12,0,1,0,12,12A12,12,0,0,0,172,128Zm60-80v88c0,52.93-46.65,96-104,96S24,188.93,24,136V48A16,16,0,0,1,51.31,36.69c.14.14.26.27.38.41L69,57a111.22,111.22,0,0,1,118.1,0L204.31,37.1c.12-.14.24-.27.38-.41A16,16,0,0,1,232,48Zm-16,0-21.56,24.8A8,8,0,0,1,183.63,74,88.86,88.86,0,0,0,168,64.75V88a8,8,0,1,1-16,0V59.05a97.43,97.43,0,0,0-16-2.72V88a8,8,0,1,1-16,0V56.33a97.43,97.43,0,0,0-16,2.72V88a8,8,0,1,1-16,0V64.75A88.86,88.86,0,0,0,72.37,74a8,8,0,0,1-10.81-1.17L40,48v88c0,41.66,35.21,76,80,79.67V195.31l-13.66-13.66a8,8,0,0,1,11.32-11.31L128,180.68l10.34-10.34a8,8,0,0,1,11.32,11.31L136,195.31v20.36c44.79-3.69,80-38,80-79.67Z"></path>
          </svg>
          <h2>Maus tratos aos animais</h2>
          <p>Denuncie qualquer forma de maus tratos, como abandono, agressão ou exploração de animais. É fundamental proteger nossos amigos de quatro patas.</p>
          <RouterLink to="/formulario/animais" class="router-link">
            <div class="button">
              <span>Denuncie agora</span>
            </div>
          </RouterLink>
          
        </div>
      </div>
      <div class="cases-geral agua">
        <div class="geral-text" style="position: relative;">
          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill="rgba(114, 150, 127, 0.2)" viewBox="0 0 256 256"
            style="position: absolute; top: -130px; left: -150px; z-index: -1;"
          >
            <path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Zm55.89-62.66a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"></path>
          </svg>
          <h2>Poluição das águas</h2>
          <p>Se você testemunhar despejo de produtos químicos ou lixo em rios, lagos ou mares, denuncie! A saúde dos ecossistemas aquáticos depende da nossa vigilância.</p>
          <RouterLink to="/formulario/agua" class="router-link">
            <div class="button">
              <span>Denuncie agora</span>
            </div>
          </RouterLink>
        </div>
        <div class="geral-img">
          <img src="https://greenviewgv.com.br/wp-content/uploads/2020/02/green-view-poluicao-da-agua-min.jpg">
        </div>
      </div>
      <div class="cases-geral lixo">
        <div class="geral-img">
          <img src="https://images.ecycle.com.br/wp-content/uploads/2024/02/15115920/qual-e-a-diferenca-entre-poluicao-e-contaminacao-da-agua-1024x683.jpg.webp">
        </div>
        <div class="geral-text" style="position:relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill="rgba(114, 150, 127, 0.2)" viewBox="0 0 256 256"
            style="position: absolute; top: -80px; right: -160px; z-index: -1"
          >
            <path d="M198.1,62.59a76,76,0,0,0-140.2,0A71.71,71.71,0,0,0,16,127.8C15.9,166,48,199,86.14,200A72.09,72.09,0,0,0,120,192.47V232a8,8,0,0,0,16,0V192.47A72.17,72.17,0,0,0,168,200l1.82,0C208,199,240.11,166,240,127.8A71.71,71.71,0,0,0,198.1,62.59ZM169.45,184a56.08,56.08,0,0,1-33.45-10v-41l43.58-21.78a8,8,0,1,0-7.16-14.32L136,115.06V88a8,8,0,0,0-16,0v51.06L83.58,120.84a8,8,0,1,0-7.16,14.32L120,156.94v17a56,56,0,0,1-33.45,10C56.9,183.23,31.92,157.52,32,127.84A55.77,55.77,0,0,1,67.11,76a8,8,0,0,0,4.53-4.67,60,60,0,0,1,112.72,0A8,8,0,0,0,188.89,76,55.79,55.79,0,0,1,224,127.84C224.08,157.52,199.1,183.23,169.45,184Z"></path>
          </svg>
          <h2>Descarte inadequado do lixo</h2>
          <p>Denuncie locais onde o lixo é jogado de maneira irregular, como em terrenos baldios ou áreas públicas. A preservação do meio ambiente começa com o descarte correto</p>
          <RouterLink to="/formulario/lixo" class="router-link">
            <div class="button">
              <span>Denuncie agora</span>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="cases-geral desmatamento">
        <div class="geral-text" style="position: relative;">
          <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" fill="rgba(114, 150, 127, 0.2)" viewBox="0 0 256 256"
            style="position: absolute; top: -80px; left: -180px; z-index: -1"
          >
            <path d="M218.3,48.34l-60.68-18.2,30-15A8,8,0,0,0,180.42.85L134,24.05a80.08,80.08,0,0,0-78,80V208a8,8,0,0,0,16,0V176H88v56a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V104a48.07,48.07,0,0,0-40-47.32V42.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM72,160V104a64.07,64.07,0,0,1,56-63.48V56.68A48.07,48.07,0,0,0,88,104v56Zm96,72H104V176h64v56Zm0-128v56H104V104a32,32,0,0,1,64,0Z"></path>
          </svg>
          <h2>Queimadas e desmatamento</h2>
          <p>Se você observar queimadas ilegais ou desmatamento em áreas protegidas, denuncie. A preservação das florestas é essencial para o equilíbrio do planeta.</p>
          <RouterLink to="/formulario/queimadas" class="router-link">
            <div class="button">
              <span>Denuncie agora</span>
            </div>
          </RouterLink>
        </div>
        <div class="geral-img">
          <img src="https://images.pexels.com/photos/5608108/pexels-photo-5608108.jpeg">
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
      width: 300px;
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
    .cases-geral{
      margin-top: 150px !important;
      h2{
        font-size: 32px;
        font-weight: 600;
        color: #4ea653;
      }
      p {
        font-size: 18px;
      }
      .button{
        display: grid;
        justify-content: center;
        align-items: center;
        background-color:#72967f;
        width: 250px;
        height: 60px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.5s;
        span {
          font-weight: 600;
          font-size: 24px;
        }
      }
      .button:hover{
        background-color:#5c7766;
    }
    }
    .agua, .desmatamento {
      margin: 0 auto;
      display: flex; 
      align-items: center; 
      justify-content: center; 
      gap: 100px;
      .geral-img {
        display: flex; 
        justify-content: center; 
        img {
          border-radius: 10px;
          width: 500px;
          height: 550px;
        }
      }
      .geral-text {
        display: flex; 
        flex-direction: column; 
        align-items: start; 
        gap: 30px;
        width: 500px;
        text-align: start;
      }
    }
    .animals, .lixo{
      margin: 0 auto;
      display: grid;
      grid-template-columns: 6fr 6fr;
      gap: 100px;
      .geral-img {
        display: grid;
        justify-content: end;
        img{
        object-fit: cover;
        border-radius: 10px;
        width: 500px;
        height: 550px;
        }
      }
      .geral-text{
        display: grid;
        align-items: center;
        align-content: center;
        gap: 30px;
        width: 500px;
      }
    }
  }
}
.router-link{
  text-decoration: none; 
  color: white;
  font-weight: 500;
  cursor: pointer;
}
</style>
