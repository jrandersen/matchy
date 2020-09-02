/**
 * HELPER FUNCTION FOR Mutation observer
 * @param {ARRAY} mutationsList 
 * @param {Object} observer 
 */
function callback(mutationsList, observer) {
    console.log("Mutations:", mutationsList);
    console.log("Observer:", observer);
    
    mutationsList.forEach(mutation => {
        if(mutation.attributeName === 'class') {
            alert(`changes!`)
        }else {
            console.log(`somthing wrong with mutations observer`)
        }
    })
}
const mutationObserver = new MutationObserver(callback);
const $container = $('#container')
// console.log(($container)[0])
// mutationObserver.observe($container[0], {attributes: true})



/**
 * HELPER FUNCTION FOR CLASS LISTENER
 * @param {elemId} this is a dom element
 * @param {callback} does a function
 */
function addClassNameListner (elemId, callback){
    const elem = document.getElementsByClassName(elemId)[0];
    const lastClassName = elem.className;
    window.setInterval( function() {
        const className = elem.className;
        if (className !== lastClassName) {
            callback();
           // lastClassName = className;
        }else {
            console.log(`className the same!`)
        }
    }, 10);
}
const bob = document.getElementsByClassName('card__one bobloblaw')[0]
console.log(bob)
addClassNameListner('card__one', function(){ alert(`changes!!`)
});