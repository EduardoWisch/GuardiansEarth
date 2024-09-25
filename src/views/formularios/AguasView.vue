<template>
    <NavBar/>
    <div class="main">
        <div class="blur"></div>
        <div class="form">
            <div>
                <label for="name">Nome</label>
                <input type="text" id="name">
                <label for="email">E-mail</label>
                <input type="email" id="email">
            </div>
            <div>
                <label for="estado">Selecione o estado</label>
                <select id="estado" name="estado">
                    <option value="">Selecione um estado</option>
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
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade">
                <label for="endereco">Endereço</label>
                <input type="text" id="endereco">
                <label for="referencia">Ponto de referência</label>
                <input type="text" id="referencia">
            </div>
            <div>
                <label for="date">Data</label>
                <input type="date" id="date">
            </div>
            <div>
                <label for="situacao">Descreva a sua denúncia</label>
                <textarea type="descricao" id="situacao"></textarea>
            </div>
            <div>
                <label for="imagem">Anexar evidências</label>
                <input type="file" id="imagem" name="imagem" accept="image/*">
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
background-image: url('https://greenviewgv.com.br/wp-content/uploads/2020/02/green-view-poluicao-da-agua-min.jpg');
background-repeat: no-repeat;
background-size: cover; 
display: flex;
justify-content: center;
align-items: center;
    .form{
        z-index: 2;
    }
}
</style>