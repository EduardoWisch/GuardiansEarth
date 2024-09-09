<template>
    <div class="container-navbar">
        <div class="navbar">
            <img src="./icons/EarthGuardians.png">
            <ul class="nav-list">
                <li>
                    <RouterLink to="/formulario/animais" class="router-link">
                        Maus tratos aos animais
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/formulario/agua" class="router-link">
                        Poluição das águas
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/formulario/lixo" class="router-link">
                        Descarte inadequado do lixo
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/formulario/queimadas" class="router-link">
                        Queimadas e desmatamento
                    </RouterLink>
                </li>
            </ul>
            <div class="button">
                <span>
                    Doe agora
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';


</script>
<style scoped lang="scss">
.container-navbar{
    background-color: rgba(0, 0, 0, 0);
    padding-top: 15px ;
}
.navbar{
    background-color: #dbdaa4a4;
    border-radius: 200px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10%;
    ul {
        margin-left: -30px;
        display: flex;
        list-style-type: none;
        gap: 50px;
        li {
            .router-link{
            text-decoration: none; 
            color: inherit;
            font-weight: 500;
            cursor: pointer;
            }
        }
        li:hover{
            color: #82ae92;
        }
    }
    img {
        width: 200px;
        height: 200px;
    }
    .button {
        display: grid;
        justify-content: center;
        align-items: center;
        background-color:#72967f;
        width: 250px;
        height: 100%;
        border-radius: 0 200px 200px 0;
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
</style>