<template>
    <div class="container-navbar">
       <img src="./icons/EarthGuardians.png">
       <ul class="nav-list">
           <li>Maus tratos aos animais</li>
           <li>Poluição das águas</li>
           <li>Descarte inadequado do lixo</li>
           <li>Queimadas e desmatamento</li>
        </ul>
    </div>
</template>
<script>

</script>
<style scoped lang="scss">
.container-navbar{
    // background-color: #fdfaec ;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #dbdaa4a4;
    width: 80%;
    height: 15%;
    .nav-list{
        list-style-type: none;
        display: flex;
        position: absolute;
        top: 0;
        left: 170px;
        gap: 10px;
        li {
            border: 1px solid rgb(89, 97, 19);
            background-color: rgb(89, 97, 19);
        }
    }
    img {
        width: 150px;
        height: 150px;
    }
}
</style>