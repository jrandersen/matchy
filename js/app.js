/**
 * MATCHY
// ===== card array-- object or just nested array?

/// ====== card class
// front to carry image.. future
// back of card,  image (svg shapes, png shapes)
// card value - this is what is matched  -- each card will need to be identifiable with only one other card
// I may need ot mimic my css heer so would need 
// card__container
// card__flip ???

//====== board class 
//needs to have an array cards, two cards per idertifier, 32 total unique pairs cards for 8x8, 8 total for 4x4 and 2 for 2x2
// needs a function to generate this board array from cards, take input of size of board
// --[stretch for tomorrow] is to shuffle cards between rounds

//====== game class
// once the first cards if flipped disable the listner on that card
// while dom class flip arra = two, then compare
// if they do not match remove(flip) this will flip them back, this was put on by listener
// if they do match add aditional class match, and grey out --- this will take additional css through jquery
// user move on to pick next two cards
// when all match 9match array == deck array, round is over
// show modal box, reset page() when they select play again
// --see below

/// --stretch: board layout
/// for today board layout with function using jquey to greate all divs, 
// and anothef function applying all the styling, 
// then lastly a function to assign the card (which card it is form the deck)
 */



/***
 * ============================ MATCHY ===================================
 */


/** ARRAY OF INFO FOR THE CARDS
*  This is an array made from font awesome shapes availble for free
*  https://fontawesome.com/icons
*/
const cardDeck = [
    {
        shapeName: 'Circle',
        shapeImg:  'fas fa-circle',
    },
    {
        shapeName: 'Square',
        shapeImg: 'fas fa-square',
    },
    {
        shapeName: 'Marker',
        shapeImg: "fas fa-map-marker",
    },
    {
        shapeName: 'Minus-circle',
        shapeImg: "fas fa-minus-circle",
    },
    {
        shapeName: 'Plus-circle',
        shapeImg: "fas fa-plus-circle"
    },
    {
        shapeName: 'Star',
        shapeImg: "fas fa-star",
    },
    {
        shapeName: 'Heart',
        shapeImg: "fas fa-heart",
    },
    {
        shapeName: 'Comment',
        shapeImg: "fas fa-comment",
    },
    {
        shapeName: 'Plus-square',
        shapeImg: "fas fa-plus-square",
    },
    {
        shapeName: "Minus-square",
        shapeImg: "fas fa-minus-square"
    },
    {
        shapeName: 'Cloud',
        shapeImg: "fas fa-cloud",
    },
    {
        shapeName: 'Plus',
        shapeImg: "fas fa-plus"
    },
]
// THIS IS FOR GRABBING TEH DOM CARDS, TO LATER INJECT THE CARD ATTRIBUTES
let totalMatch = 0;
const cardDeckLength = cardDeck.length;
let handMatch = [] // <== each hand uses this to decide to deal shuffle
let dealLength = 0; // <== fill in after deal and shuffle
console.log(`deckLength`, cardDeckLength);
console.log(`totalmatch`, totalMatch);

/** STOPWATCH CONNECTS TO DOM
 * See js/stopwatch.js file
 */
const timer = document.getElementById('timer')
const watch = new Stopwatch(timer);

/** GET RANDOM NUMBER HELPER FUNCTION
 * for now, will build into card or board in future if needed
 */
 const getRandomNumber = function() {
    let num = Math.floor(Math.random() * 10000);
    return num
 }

/** RANDOMISE THE CARDS HELPER FUNCTION 
* using the shuffle fisher gates, 
* @author Mike Bostock https://bost.ocks.org/mike/shuffle/ 
*/
const randomiseArray = function (array) {
    let arrayLength = array.length;
    let element;
    let index;
    while (arrayLength) {
        index = Math.floor(Math.random() * arrayLength--);
        element = array[arrayLength];
        array[arrayLength] =  array[index];
        array[index] = element;
    } 
    return array
}
 
/** Matchy Cards
 * @param {string} name - This is the name of the Card
 * @param {Object} shape - This is the shape displayed on back of card (svg or png)
 * @param {Object} identity - This a is set to zero and randomised in generateBoard method in Board class  
 */
class Card {
    constructor(shapeName, shapeImg) {
        this.shapeName = shapeName;
        this.shapeImg = shapeImg; // actual image file? 
        this.identity = 0;
    }
}

/** Make the board array of dupliacte Cards
 * @param {number} - This is the total number of cards needed, 2x2 grid = 4, 4x4 grid = 16, etc
 * @method generateBoard(array) - This  generates a board from an array. Identity is created randomly assisgned to card, and cards dupplicated.
 * @method dealBoard() - This assignes cards id to a card div in dom    --[stretch]  establises all card element in html and  
 * @method styleBoard() - This applies all the functionality of flipping cards. --[stretch]
 */
class Board {
    constructor(number=2) {  // 4 is the smallest board possible  
        this.number = number;
        this.cards = [];
    }
    generateBoard(cardArr) {
        const ranArr = randomiseArray(cardArr);
        cardArr = ranArr
        for (let i = 0; i < ranArr.length; i++) {
            const ranNum =getRandomNumber()
            const genCardArr = new Card(ranArr[i].shapeName, ranArr[i].shapeImg, ranArr[i].identity) // generate cards from array
            // get a random number to create a unique value  
            genCardArr.identity = ranNum; 
            this.cards.push(genCardArr);
            this.cards.push(genCardArr); // <== creates two cards with the same number
        }
        // janky but it works for now..., no matter the length of array this gets how many cards the user wants
        let newArrlength = this.cards.length - this.number;
        this.cards.splice(0, newArrlength)
        const lastShuffle = randomiseArray(this.cards);
        this.cards = lastShuffle;
        dealLength = this.cards.length;
        console.log(`dealLength`, dealLength)

    }
    dealBoard() {
        // --stretch establish html objects for cards [NOT done]
        const cardFromDOM = document.getElementsByClassName('card');
        for (let i = 0; i < cardFromDOM.length; i++) {
            cardFromDOM[i].id = this.cards[i].identity // <=- this  may be a bug if these two array are not same length, tried nested i for i / j for j - no worky
        }
        // cardFromDOM[0].children[0].children[1].children[0]  <=- read from dom to ge the below behemeth
        for (let i = 0; i < cardFromDOM.length; i++) {
            cardFromDOM[i].children[0].children[1].children[0].className = this.cards[i].shapeImg;
        }
        console.log('==== GAME START ====')
    }
    
    styleBoard() {
        // apply all css styles to above divs for cards
    }
}

const numOfCardInDOM = document.getElementsByClassName('card').length; //<== get num of card on dom
console.log(`cardsOnDom`, numOfCardInDOM)
let newBoard = new Board(numOfCardInDOM); // set new baord equal to this, this will allow shuffle after matching all cards in UI
newBoard.generateBoard(cardDeck);
newBoard.dealBoard(); 
 
/**
 * The Game Play!!
 * @method gamePlay() - This listens for updates to the classList of '.flip' the looks for match. If not match it removes '.flip'. If match it adds '.matched' and removes '.flip'
 */
class Game {
    constructor(){
        this.match =[];
    }
    gamePLay(arr){
        // look for total match equaling deck length, use has gone through and end game
        if (totalMatch === cardDeckLength) {
            this.gameEnd();
        }else if (totalMatch > cardDeckLength) {
            this.gameEnd();
        }
        // matching while loop
        while (arr.length === 2) {
            let idOne = arr[1];
            let idTwo = arr[0];
            if (idOne === idTwo){
                console.log(`${idOne}, ${idTwo} it is a match`)
                this.match.push(arr[0], arr[1])
                idList = [];  // <== Reset idList to empty keep here!
                // update 'match' on ui
                totalMatch++
                const $match = $('#match')[0]
                $match.textContent = totalMatch
                const temp = this;
                // timer to hold cards before  game reset
                setTimeout( function() {
                    temp.gameReset(); // <== call game reset 
                },800)
            }else if (idOne!==idTwo) {
                console.log(`${idOne}, ${idTwo} it is NOT a match`);
                idList = [];
                const temp = this;
                /// timer to hold cards flipped before flipping back
                window.setTimeout( function() {
                    $('div').removeClass('flip') 
                },400)
            }else if (idList.length >=3){
                idList = []
            }else {
                console.log(`something wrong`)
            }
            idOne = -1;
            idTwo = -1;
            break  /// <== I seem to need this ??
        }
    }
    gameReset() {
        if (this.match.length === newBoard.number) {
            console.log('===== Hand Reset =====')
            $('div').removeClass('flip')
            handMatch.push(this.match[0],this.match[1], this.match[2], this.match[3]) // <=- push matched is to global array
            this.match = [];
            if (handMatch.length === dealLength) {
                // modal with game info and either play again or end game.
                setTimeout( function(){
                    handMatch = [];
                    newBoard = new Board(4);
                    // console.log(newBoard)
                    newBoard.generateBoard(cardDeck);
                    newBoard.dealBoard();
                },200) 
            } else if (handMatch.length > dealLength) {
                // This condition can happen if init card deck is odd number
                handMatch = [];
                newBoard = new Board(4);
                // console.log(newBoard)
                newBoard.generateBoard(cardDeck);
                newBoard.dealBoard();
                // modal with game info and either play again or end game. 
            }else {
                this.match =[]; // <=- there a better way to do this?//
            }
        }else {
            // console.log(`game not reset`)
        } 
    }
   
    gameEnd() {
        console.log(`======== Game Over 1 =========`)
        // const stop = document.getElementById('end'); 
        // stop.click(); //<== i know janky, could not get watch.stop() to fire here??
        const $btnStop = $('#end')
        $btnStop.click();
        let finalTime = document.getElementById('timer').textContent;
        let finalMatch = document.getElementById('match').textContent;
        let finalAvg = (parseFloat(finalTime)/parseInt(finalMatch));
        const modalMsg =document.querySelector('h4');// <== grab h4 for msg
        modal__Bg.classList.add('bg__active');  // <== set modal container to 'active'
        modalMsg.textContent = (`Great game you had, ${finalMatch} matches in, ${finalTime}!`) 
    }
}   
const newGame = new Game();

/**
 * CARD FLIP LISTNER
 */
/// THIS PARAM IS FOR PUTTING CLICK SELECTS INTO SO THAT GAMEPLAY() CAN COMPARE
let idList = []
const $card = $('.card')
$card.on('click', function(e){
    $(this).toggleClass('flip');
    idList.push($(this)[0].id);
    newGame.gamePLay(idList);
    watch.start();
}); 


//  CONTAINER LISTNER DELEGATION
const containerListner = document.querySelector('.container');
containerListner.addEventListener('click', containerAction, false);
function containerAction(e) {
    if (e.target !== e.currentTarget) {
        const selectedCard = e.target.id;
        if (selectedCard === ('card')) {
            alert(`hello`)
        }
    }
    e.stopPropagation();
}


/**
 *  MODAL WINDOW  AND NAV LISTNERS
 */
// CLOSE MODAL NO DECISION TOP 'X'
const modal__Bg = document.querySelector('.modal__bg'); // <== grab modal container/// INFO BUTTON
const modal__close = document.querySelector('.modal__close')
modal__close.addEventListener('click', function (e) {
    modal__Bg.classList.remove('bg__active');
    e.stopPropagation();
});

//  MODAL LISTNER DELEGATION
const modalListner = document.querySelector('.modal__bg');
modalListner.addEventListener('click', modalAction, false);

function modalAction(e) {
    if (e.target !== e.currentTarget) {
        const clickedItem = e.target.id;
        if (clickedItem === ('modal__start')) {
            location.reload();
        }else if (clickedItem === ('modal__close')) {
            console.log('close')
            const modal__Bg = document.querySelector('.modal__bg'); // <== grab modal container
            modal__Bg.classList.remove('bg__active');
        }
    }
    e.stopPropagation();
}

//  'NAV' LISTNER DELEGATION
const navListner = document.querySelector('.container');
navListner.addEventListener('click', navAction, false);

function navAction(e) {
    if (e.target !== e.currentTarget) {
        const selectedItem = e.target.id;
        // alert(`hello,${selectedItem}`)
        if (selectedItem === ('info')) {
            const modalMsg =document.querySelector('h4');// <== grab h4 for msg
            const modal__Bg = document.querySelector('.modal__bg'); // <== grab modal container
            modal__Bg.classList.add('bg__active');  // <== set modal container to 'active'
            modalMsg.textContent = (`Welcome... to play Matchy, start by selecting a card to flip over then select another, if they are a match awesome! You've got, move on to the next hand. The game ends when you go through the whole deck. Press [End Game] at any time to stop the timer`)
            $('modal__btn').textContent = "Let's Play!";
        }else if (selectedItem === ('end')) {
            watch.stop();
        }else if (selectedItem === ('start')) {
            location.reload();
        }
    }
    e.stopPropagation();
}