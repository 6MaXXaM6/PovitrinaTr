<template>
  <div class="container">
    <div class = 'divI'>
        <img title = "Винницкая область" class = 'img' :src = "GetSrc('1')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Волынская область" class = 'img' :src = "GetSrc('2')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Днепропетровская область" class = 'img' :src = "GetSrc('3')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Донецкая область" class = 'img' :src = "GetSrc('4')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Житомирская" class = 'img' :src = "GetSrc('5')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Закарпатская" class = 'img' :src = "GetSrc('6')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Запорожская" class = 'img' :src = "GetSrc('7')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Ивано-Франковская" class = 'img' :src = "GetSrc('8')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Киевская область" class = 'img' :src = "GetSrc('9')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Кировоградская область" class = 'img' :src = "GetSrc('10')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Луганская область" class = 'img' :src = "GetSrc('11')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Львовская область" class = 'img' :src = "GetSrc('12')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Николаевская область" class = 'img' :src = "GetSrc('13')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Одесская область" class = 'img' :src = "GetSrc('14')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Полтавская область" class = 'img' :src = "GetSrc('15')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Ровненская область" class = 'img' :src = "GetSrc('16')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Сумская область" class = 'img' :src = "GetSrc('17')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Тернопольская область" class = 'img' :src = "GetSrc('18')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Харьковская область" class = 'img' :src = "GetSrc('19')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Херсонская область" class = 'img' :src = "GetSrc('20')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Хмельницкая область" class = 'img' :src = "GetSrc('21')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Черкасская область" class = 'img' :src = "GetSrc('22')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Черниговская область" class = 'img' :src = "GetSrc('23')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Черновицкая область" class = 'img' :src = "GetSrc('24')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Киев" class = 'img' :src = "GetSrc('25')" alt = "где">
    </div>
    <div class = 'divI'>
        <img title = "Крым" class = 'img' :src = "GetSrc('26')" alt = "где">
    </div>
  </div>
</template>

<script>
export default {
    name: 'Lib',
    data() {
            return {
            }
        },
    computed: {
        GetSrc() {
            return function (key) {
                let val = localStorage.getItem(key)
                if (val == null) {
                    return require('@/assets/NotYetOpen.png')
                }else{
                    return require(`@/assets/${key}.gif`)
                }
            }
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    overflow-y: scroll;
    align-items: flex-start;
    justify-content: space-evenly;
    align-content: flex-start;
}
.divI {
    width: 40%;
    max-width: 150px;
    background-color: rgb(255, 255, 255);
    aspect-ratio: 1/1;
    margin: 1%;
    box-shadow: 4px 4px 2px #7e7c7c;
    border-radius: 5% 5% 5% 5%;
}
.img {
    height: 100%;
    width: 100%;
}
</style>