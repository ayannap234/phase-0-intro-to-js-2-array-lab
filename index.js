// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name) {
    cats.push (name);
}

function destructivelyPrependCat (name) {
    cats.unshift (name);
}

function destructivelyRemoveLastCat (name) {
    cats.pop (name);
}

function destructivelyRemoveFirstCat (name) {
    cats.shift (name);
}

function appendCat (name) {
    return [...cats, name];
    // const newcats = cats.slice();
    //     newcats.push(name);
    //     return newcats;
}

function prependCat (name) {
    return [name, ...cats];
    // const newcats = cats.slice();
    //     newcats.unshift(name);
    //     return newcats;
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1);
    // const newCats = cats.slice(0, -1);
    // return newCats
}

function removeFirstCat(){
    return cats.slice(1);
    // const newCats1 = cats.slice(1); 
    // return newCats1
    }