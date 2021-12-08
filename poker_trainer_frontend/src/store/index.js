import { createStore } from "vuex";

export default createStore({
  state: {
    deck_id:"",
    "cards": [
      {
          "code": "9D",
          "image": "https://deckofcardsapi.com/static/img/9D.png",
          "images": {
              "svg": "https://deckofcardsapi.com/static/img/9D.svg",
              "png": "https://deckofcardsapi.com/static/img/9D.png"
          },
          "value": "9",
          "suit": "DIAMONDS"
      },
      {
          "code": "9S",
          "image": "https://deckofcardsapi.com/static/img/9S.png",
          "images": {
              "svg": "https://deckofcardsapi.com/static/img/9S.svg",
              "png": "https://deckofcardsapi.com/static/img/9S.png"
          },
          "value": "9",
          "suit": "SPADES"
      }
  ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
