/**
 * First game
 */
console.log('==== GAME START ====')
const cardDeck = [
    {
        shapeName: 'Circle',
        shapeImg: 'circle',
    },
    {
        shapeName: 'Square',
        shapeImg: 'square',
    },
    {
        shapeName: 'Triangle',
        shapeImg: 'triangle',
    },
    {
        shapeName: 'Hexagon',
        shapeImg: 'hexagon',
    },
    {
        shapeName: 'Pentagon',
        shapeImg: 'pentagon',
    },
    {
        shapeName: 'Rectangle',
        shapeImg: 'rectangle',
    },
    {
        shapeName: 'Rhombus',
        shapeImg: 'rhombus',
    },
    {
        shapeName: 'Parallelogram',
        shapeImg: 'parallelogram',
    },
]

/// psuedo code

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

 /**
  * GET RANDOM NUMBER HELPER FUNCTION
  * for now, will build into card or board in future if needed
  */
 const getRandomNumber = function() {
    let num = Math.floor(Math.random() * 10000);
    return num
 }
//   test it!
const exampleRandomNum = getRandomNumber();
 
/**
* RANDOMISE THE CARDS HELPER FUNCTION 
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
/// test it!!
const exampleRandomArr = randomiseArray(cardDeck)
 

/**
 *  Matchy Cards
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
//  test invoke new class!
const exampleCard = new Card(); // make if you would like ot see what a card class produces

/**
 *  Make the board array of dupliacte Cards
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
        for (let i = 0; i < cardArr.length; i++) {
            const ran =getRandomNumber()
            const genCardArr = new Card(cardArr[i].shapeName, cardArr[i].shapeImg, cardArr[i].identity) // generate cards from array
            // get a random number to create a unique value  
            genCardArr.identity = ran; 
            this.cards.push(genCardArr);
            this.cards.push(genCardArr); // <== creates two cards with teh same number
            // console.log(genCardArr);
        }
        // janky but it works for now..., no mattter teh length of array this get how many cards the user wants
        console.log(this.cards.length)
        let newArrlength = this.cards.length - this.number;
        console.log(typeof newArrlength, newArrlength);
        this.cards.splice(0, newArrlength)
    }
    dealBoard() {
        // establish html objects for cards
        // get dom cards and add an id to each
    }
    styleBoard() {
        // apply all css styles to above divs for cards
    }
}

const newBoard = new Board(4); // <== Invoke generate Board hardcoded at 4 for now 
const random__array = randomiseArray(cardDeck) // <== shuffle the main cardDeck array
console.log(random__array) 
newBoard.generateBoard(random__array); // <== generate board (cards randomized and id assined in pairs)
console.log(newBoard);


/**
 * The Game Play!!
 * @method gamePlay() - This listens for updates to teh classList of '.flip' the looks for match. If not match it removes '.flip'. If match it adds '.matched' and removes '.flip'
 */
class Game {
    constructor(){
        // this.domCardArr = document.querySelector('.flip')
    }
    gamePLay() {
        const $flipArr = $('.bobloblaw')
        while ($flipArr.length === 2) {
            console.log(` We have 'potential match' match! `)
            let idOne = $flipArr[1].id;
            let idTwo = $flipArr[0].id;
            console.log(`${idOne}, ${idTwo}`);
            if (idOne === idTwo){
                console.log(`${idOne}, ${idTwo} it is a match`)
            }else {
                console.log(`it is not a match`)
            }
            idOne = -1;
            idTwo = -1;
            return
        }
        console.log(`nope`)
        console.log($flipArr)
        
    }
}
// const newGame = new Game();
// newGame.gamePLay();






/**
 * CARD FLIP LISTNER
 */
const card__one = document.getElementsByClassName('card__one')[0];
// console.log(card__one);
card__one.addEventListener('click', function() {
    card__one.classList.toggle('flip');
});

const card__two = document.getElementsByClassName('card__two')[0];
// console.log(card__one);
card__two.addEventListener('click', function() {
    card__two.classList.toggle('flip');
});

const card__three = document.getElementsByClassName('card__three')[0];
// console.log(card__three);
card__three.addEventListener('click', function() {
    card__three.classList.toggle('flip');
});

const card__four = document.getElementsByClassName('card__four')[0];
// console.log(card__four);
card__four.addEventListener('click', function() {
    card__four.classList.toggle('flip');
});