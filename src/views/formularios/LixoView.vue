<template>
  <NavBar/>
  <div class="main">
      <div class="blur"></div>
      <div class="form">
          <div class="personal-information">
              <div>
                  <label for="name">Nome</label><br>
                  <input type="text" id="name" v-model="name">
              </div>
              <div>
                  <label for="email">E-mail</label><br>
                  <input type="email" id="email" v-model="email">
              </div>
          </div>
          <div class="region">
              <div>
                  <label for="estado">Selecione o estado</label><br>
                  <select id="estado" name="estado" v-model="state">
                      <option value=""></option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                  </select>
              </div>
              <div>
                  <label for="cidade">Cidade</label><br>
                  <input type="text" id="cidade" v-model="city">
              </div>
              <div>
                  <label for="endereco">Endereço</label><br>
                  <input type="text" id="endereco" v-model="address">
              </div>
              <div>
                  <label for="referencia">Ponto de referência</label><br>
                  <input type="text" id="referencia" v-model="reference">
              </div>
          </div>
          <div class="date-description">
              <div class="date">
                  <label for="date">Data</label><br>
                  <input type="date" id="date" v-model="date">
              </div>
              <div class="description">
                  <label for="situacao">Descreva a sua denúncia</label><br>
                  <textarea type="descricao" id="situacao" v-model="complaint"></textarea>
              </div>
          </div>
          <div class="image">
              <label for="imagem">Anexar evidências</label><br>
              <div>
                  <label for="imagem" class="imagem-label"></label>
                  <input type="file" id="imagem" name="imagem" accept="image/*" @change="handleFileChange">
              </div>
          </div>
          <button @click="sendForm">Enviar Denúncia</button>
      </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Multiselect from 'vue-multiselect'
export default {
  components: {
      NavBar,
      Multiselect,
  },
  data(){
      return {
          name: "",
          email: "",
          state: "",
          date: "",
          city: "",
          address: "",
          reference: "",
          complaint: "",
          image: null,
      }
  },
  methods: {
    handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.image = URL.createObjectURL(file); 
            }
        },
      sendForm() {
          const formData = {
              name: this.name,
              email: this.email,
              state: this.state,
              date: this.date,
              city: this.city,
              address: this.address,
              reference: this.reference,
              complaint: this.complaint,
              image: this.image,
              type: "Descarte inadequado do lixo"
          };
          const existingData = JSON.parse(localStorage.getItem('formData')) || [];
          existingData.unshift(formData);
          localStorage.setItem('formData', JSON.stringify(existingData));
          this.clearForm();
          alert("Formulário enviado com sucesso!");
      },
      clearForm() {
          this.name = "";
          this.email = "";
          this.state = "";
          this.date = "";
          this.city = "";
          this.address = "";
          this.reference = "";
          this.complaint = "";
          this.image = null;
      },
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
display: flex;
justify-content: center;
align-items: center;
  .form{
      z-index: 2;
      display: grid;
      background-color: rgba(0,0,0,0.5);
      margin-top: 15vh;
      width: 50vw;
      min-height: 70vh;
      padding: 20px;
      border-radius: 15px;
      input{
          font-size: 14px;
          width: 100%;
          background-color: transparent;
          border: 2px solid white;
          border-radius: 20px;
          height: 20px;
          color: white;
          padding: 10px 10px;
      }
      input:focus {
          outline: none; 
          box-shadow: none; 
      }
      textarea{
          width: 100%;
          height: 100px;
          background-color: transparent;
          resize: none;
          color: white;
          border-radius: 20px;
          border: 2px solid white;
          padding: 10px 10px;
      }
      select{
          background-color: transparent;
          color: white;
          font-size: 14px;
          border: 2px solid white;
          border-radius: 20px;
          option{
              background-color: black;
          }
      }
      select:focus {
          outline: none; 
          box-shadow: none; 
      }
      .personal-information{
          color: white;
          display: grid;
          grid-template-columns: 6fr 6fr;
          gap: 50px;
      }
      .region{
          color: white;
          display: grid;
          gap: 10px;
          grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      .date-description{
          color: white;
          display: grid;
          grid-template-columns: 3fr 9fr;
          gap: 10px;
          .date{
              input{
                  height: 50px;
                  font-size: 14px;
                  font-family: Montserrat;
                  display: flex;
                  align-items: center;
                  justify-content: center;
              }
          }
      }
      .image{
          color: white;
          div{
              position: relative;
              input{
                  height: 100px;
              }
              input[type="file"]::-webkit-file-upload-button {
                  background-color: transparent; 
                  height: 100%;
                  width: 40%;
                  color: white; 
                  border: 2px solid white; 
                  border-radius: 20px;
                  padding: 10px 15px; 
                  margin-right: 20px;
                  cursor: pointer; 
              }
          }
      }
      button{
          background-color: transparent;
          border-radius: 20px;
          color: white;
          border: 2px solid white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
      }
  }
}
</style>