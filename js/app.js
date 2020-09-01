/**
 * First game
 */
console.log('==== GAME START ====')





/**
 * CARD FLIP LISTNER
 */
const card__one = document.getElementsByClassName('card__one')[0];
console.log(card__one);
card__one.addEventListener('click', function() {
    card__one.classList.toggle('flip');
});

const card__two = document.getElementsByClassName('card__two')[0];
console.log(card__one);
card__two.addEventListener('click', function() {
    card__two.classList.toggle('flip');
});