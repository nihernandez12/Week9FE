
/* 
    For the final project you will be:
    -creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
    -Deal 26 Cards to each Player from a Deck of 52 cards.
    -Iterate through the turns where each Player plays a Card.
    -The Player who played the higher card is awarded a point.
    -Ties result in zero points for both Players.
    -After all cards have been played, display the score and declare the winner. */

    class Card {

        constructor(order, suit, value) {
            this.order = order;
            this.suit = suit;
            this.value = value;
        }

    }

    class Deck {

        constructor() {
            this._cards = [];
        }

        get cards() {
            return this._cards;
        }

        buildDeck() {
            this._start();
            this._shuffle();
            return this._cards;
        }

        _start() {
            const suits = ['Hearts', 'Spades', 'Clovers', 'Diamonds'];
            const order = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', "K"];
            const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

            for (let i = 0; i < suits.length; i++) {
                for (let j = 0; j < order.length; j++) {
                    this._cards.push(new Card(order[j], suits[i], values[j]));
                }
            }
        }

        _shuffle() {
            if (this._cards.length > 0) {
                const shuffleTheDeck = this._cards.sort(() => Math.random() - 0.5)
                this._cards = [...shuffleTheDeck];
            }
        }
    }

    class Player {

        constructor(name) {
            this.playerName = name;
            this.playerCurrentScore = 0;
            this.playerDeck = [];
        }

        get name() {
            return this.playerName;
        }

        get score() {
            return this.playerCurrentScore;
        }

        get deck() {
            return this.playerDeck;
        }

        set deck(newDeck) {
            if (Array.isArray(newDeck)) {
                this.playerDeck = newDeck;
            }
        }

        set score(newScore) {
            if(!isNaN(newScore)) {
                this.playerCurrentScore = newScore;
            }
        }

    }

    class Dealer {

        constructor() {
            this.players = [];
            this.deck = [];
        }

        //This will start the game by creating the prompt for the user to put in 1 to play or 0 to not play

        gameStart() {
            console.log("******* Time to Play War! ********")
            let input = prompt("0- Exit; 1- Let's Play");
                while(input != '0') {
                    switch (input) {
                        case '0':
                            exit;
                        case '1':
                            this.createGame();
                            break;
                    }

                    input = prompt("0- Exit; 1- Let's Play");
                }
                alert('Goodbye!');
        }

        createGame() {
            //Here are the 2 players:
            this.players[0] = new Player ("Player 1");
            this.players[1] = new Player ("Player 2");

            //Will create the deck
            const cards = new Deck().buildDeck();

            //Will hand out 26 cards to each player
            this.players[0].deck = [...cards.slice(0, 26)];
            this.players[1].deck = [...cards.slice(26, 52)];

            //Will play the game by taking a card from each player's deck until all the cards are used.
            console.log("******* Game Begins Now *******")
            for (let i = 0; i < this.players[0].deck.length; i++) {
                if(this.players[0].deck[i].value > this.players[1].deck[i].value){
                this.players[0].score +=1;
                

                //Will show the winner and their cards
                let winner = `${this.players[0].deck[i].order} of ${this.players[0].deck[i].suit}`;
                let hand = `${this.players[1].deck[i].order} of ${this.players[1].deck[i].suit}`;
                console.log(`Player 1 is the winner! Their hand is ${winner}. Player 2 had ${hand}`);
            } else {
                this.players[1].score +=1;
                let winner = `${this.players[1].deck[i].order} of ${this.players[1].deck[i].suit}`;
                let hand = `${this.players[0].deck[i].order} of ${this.players[0].deck[i].suit}`;
                console.log(`Player 2 is the winner! Their hand is ${winner}. Player 1 had ${hand}`);
            }
        }

        //Will show the overall winner of the whole game

    console.log("******* Game Over *******")
    if(this.players[0].score > this.players[1].score) {
        console.log(`${this.players[0].name.toUpperCase()} is the Winner of this War! The score is ${this.players[0].score}
        to ${this.players[1].score}.`);
    } else if (this.players[0].score < this.players[1].score) {
        console.log(`${this.players[1].name.toUpperCase()} is the Winner of this War! The score is ${this.players[1].score}
        to ${this.players[0].score} points.`);
    } else {
        console.log("This Game is a tie!");
    }
    }

        }
        const dealer = new Dealer ();
        dealer.gameStart();


