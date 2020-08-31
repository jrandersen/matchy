# Game Lab - README

---

Class: SEI Remote <br>
Creator: Jason Andersen <br>

---

# Matchy

``` javascript
// SECTION 02 The Pitch
/// The game Matchy is based on memory card game but is able ot keep track or you score IN addtion it has will ahve the ability to be used by kids and adult by the number of cards chosen. In smaller grids you are matching shapes and numbers. but in the larger grids the users are presented with more complex shapes and even faces (not sure how ot do this?) It is a race against time.
```

<br>
<hr>

## User Story

```javascript
// SECTION 01 - THE MATCHING GAME: Osoro  - [おそろ]

// to start the game the user selects START GAME.  

// I would like the user to select a card from their grid and it flip over to reveal [shape, image, number] and sticks, and is un-selectable

// the user then selects another card, it flips and sticks

// if after 2 seconds the selected cards do not match both cards flip back over.

// the user then is able to just select another card to start the process over.

// howevere when two selections MATCH they each stick and grey out. The user moves on to pick another two cards to match if available

// once all cards are matched then the time is logged in a list visible to the user and gameplay starts again

///[micha - timer counting maybe stretch]
// the user is racing against a timer that is counting down. 

///[micah - stretch]
// to start the game the user selects from a grid size, the higher the grid the more challenging  

///[micha - timer maybe stretch]
// keep 5 high (or really the lowest) times in the list as long as gameplay proceeds

///[micha -  maybe stretch]
// You can end game at any point with end game button

// at end of game show a user the lowest scores

// [icebox] - keep scores after refresh
// [icebox] - allow for saving multiple peoples score to come back to improve (no security, just names)
// [icebox] - show all high scores of all players
```

### Potential issues? 

- Logs time end = need ot store in static file, .txt reader, writer, will stay in memeory
- responsiveness, i originally wanted this for my son on an ipad, but also hard for adult on computer
- Flipping and sticking
- dynamiclaly adding either shapes for easy or faces if hard (can I use faces?) maybe just different complex shapes 3d shapes?


### Wireframes
## LANDING PAGE
![Imgur](https://i.imgur.com/MMLP3sU.jpg)

<br>
<hr>

## LAYOUT CARDS 
![Imgur](https://i.imgur.com/LmQuXEl.jpg)

<br>
<hr>

## FIRST SELECT & TIMER START
![Imgur](https://i.imgur.com/SnQ1i82.jpg)

<br>
<hr>

## SECOND SELECT
![Imgur](https://i.imgur.com/TaZA0gx.jpg)

<br>
<hr>

## NO MATCH BACK TO HIDDEN
![Imgur](https://i.imgur.com/LvKojaY.jpg)

<br>
<hr>

## SELECT THIRD CARD
![Imgur](https://i.imgur.com/djj3GHq.jpg)

<br>
<hr>

## SELECT FOURTH CARD
![Imgur](https://i.imgur.com/oD24f6P.jpg)

<br>
<hr>

## MATCHES GREY OUT
![Imgur](https://i.imgur.com/XaO5RU7.jpg)

<br>
<hr>

## END AT ANY TIME
![Imgur](https://i.imgur.com/SkGM0JS.jpg)

<br>
<hr>

## WHEN ALL MATCHED SHOWS TIME
![Imgur](https://i.imgur.com/jwQnMOX.jpg)

<br>
<hr>

## SHOW THE INFO!
![Imgur](https://i.imgur.com/Zv1i6e0.jpg)

<br>
<hr>


###  WALK THROUGH 
! [Giphy](https://giphy.com/gifs/eg8yq2rS3L3lp3fGqX/html5)