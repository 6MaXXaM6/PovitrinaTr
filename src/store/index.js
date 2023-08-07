import { createStore } from 'vuex'

export default createStore({
  state: {
    TrevogaAr:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // 25 регион Украины включая российский ДНР ЛНР Херсонская область Запорожская область не включая севастополь и Крым 26 и 27 регионы
    ColPr: 0,
  },
  mutations: {
    setData(state, NTrevogaAr) {
      console.log(NTrevogaAr)
      state.TrevogaAr = NTrevogaAr;
    },
    ColPr(state){
      let val = 0
      for(let i = 1; i < 27; i++){
          let el = localStorage.getItem(i.toString())
          if (el != null) {val++}
      }
      state.ColPr = val
  },
  },
  actions: {
    getData(ctx) {
      let key = "cfc9ed5cfa5a7ab0dd10fb73e82d3a701a7b1256"
      let url = "https://alerts.com.ua/api/states"

      fetch(url, {
          headers: {
              "X-Api-Key":key
          }
      })
      .then((response) => {return response.json()})
      .then((response) => {ctx.commit("setData", response.states.map(function (state) {if (state.alert) {return 1} else {return 0}}))})
    }
  },
  modules: {

  },
  getters: {
    AllTr: state => {
      return state.TrevogaAr
    },
    AllTrS: state => {
      return state.TrevogaAr.reduce((a,b)=>a+b)
    },
  }
})
