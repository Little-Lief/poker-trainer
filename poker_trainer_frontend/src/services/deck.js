import axios from 'axios';

const http = axios.create({
    //get base url for deck information
  baseURL: "https://deckofcardsapi.com/api/deck/"
});

export default {
  list() {
      /* deck GET requests:
        deck with ID:
        deal 2 cards:
        return cards to deck:
        shuffle deck: 
      */


    return http.get('/topics');
  },
  //gets new deck and returns the ID
  getNewDeck() {
      return http.get(`new/`)
  },
  //takes a Deck ID and shuffles it
  shuffleDeck(Deck_ID) {
      return http.get(`${Deck_ID}}/shuffle/`);
  },
  //takes a Deck ID and returns 2 cards from the deck
  dealCards(Deck_ID) {
      return http.get(`${Deck_ID}/draw/?count=2`)
  },

  returnCards(Deck_ID) {
      return http.get(`${Deck_ID}/return/`)
  }
}
