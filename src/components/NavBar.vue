<template>
    <div class="navbar">
        <RouterLink to="/">
            <img src="./icons/EarthGuardians.png">
        </RouterLink>
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
</template>
<script>
import { RouterLink } from 'vue-router';


</script>
<style scoped lang="scss">
.navbar{
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    padding: 0 50px;
    z-index: 10;
    ul {
        display: flex;
        list-style-type: none;
        gap: 50px;
        li {
            .router-link{
            text-decoration: none; 
            color: white;
            font-weight: 500;
            cursor: pointer;
            }
        }
        li:hover{
            color: #82ae92;
        }
    }
    img {
        width: 100px;
        height: 100px;
    }
    .button {
        display: grid;
        justify-content: center;
        align-items: center;
        background-color:#72967f;
        width: 250px;
        height: 100%;
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
</style>