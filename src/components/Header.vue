<template>
  <div class="header">
    <div class="progress el">
        <div class="headText">Ваш прогресс составляет {{ColPr}} из 26</div>
        <div class="linearpr">
            <div class="progressKv" v-for="el in progress" :key="el" :class = "{ fill: el<ColPr}"></div>
        </div>
    </div>
    <div class ="el" style="max-width: 50%;">
        <figure>
            <audio :src=src controls autoplay=true loop=true id = "audioEl">
            </audio>
        </figure>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            progress:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
        }
    },
    computed: {
        AllTrS(){
            return this.$store.getters.AllTrS
        },
        ColPr(){
            return this.$store.state.ColPr
        },
        src(){
            if (this.AllTrS == 0){
                return require('@/assets/NaChile.mp3')
            } else{
                return require('@/assets/PovitrinaTr.mp3')
            }
        }
    },
    methods: {
        Play() {
            setInterval(() => {
                let audio = document.getElementById("audioEl")
                if (audio.paused) {
                    console.log("пытаюсь включить")
                    audio.play()
                }
            }, 5000);
        },
    },
    created() {
        this.$store.commit("ColPr")
        this.Play()
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 100%;
    background-color: rgb(182, 234, 255);
    box-shadow: 4px 4px 4px 4px #7e7c7c;
    border-radius: 2%;
    display:flex;
    justify-content: space-between;
    overflow: hidden;
}
.progressKv {
    aspect-ratio: 1/1;
    background-color: white;
    border:2px solid #000000;
    flex-basis:3.8%;
}
.linearpr{
    display: flex;
    flex-basis: 100%;
}
.progress {
    display: flex;
    flex-wrap: wrap;
    width: 20vw;
    height: 100%;
    align-items: center;
    justify-content: center;
    align-content: center;
}
.headText {
    font: 80%, "Fira Sans", sans-serif; 
}
.fill {
    background-color:green;
}
.el {
    margin-right:5vw;
    margin-left: 5vw;
}

</style>