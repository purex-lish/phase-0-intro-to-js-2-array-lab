// Write your solution here!
// assign an initial value of ["Milo", "Otis", "Garfield"]
let cats = ["Milo", "Otis", "Garfield"];
//append a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name); 
}
//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
// Remove the last element from `cats`
function destructivelyRemoveLastCat() {
    cats.pop(); 
}
// Remove the first element from `cats
function destructivelyRemoveFirstCat() {
    cats.shift(); 
}

//append a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    return [...cats, name];
}
//prepend a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    
    return [name, ...cats];
}
//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}