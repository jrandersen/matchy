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

// to start the game the user selects from a grid size, thr higher the grid the more challenging

// I would like the user to select two cards from their grid and both flip over to reveal [shape, image, number].

// if the cards selected do not match both cards flip back over.

// when two selections match they each grey out. The user moves on to pick another two cards

// the user is racing against a timer that is counting down.

// once all cards are matched then the time is logged in a list visible to the user and gameplay starts again

// keep 5 high (or really the lowest) times in the list as long as gameplay proceeds

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
![Imgur](https://i.imgur.com/EnU0q3ll.png)

<br>
<hr>

![Imgur](https://i.imgur.com/UXl2NKel.png)

<br>
<hr>

![Imgur](https://i.imgur.com/VOQnBC7l.png)

<br>
<hr>