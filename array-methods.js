const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
// declare planetElement and us it to select the id of the HTML element we are targeting i.e. planets
const planetElement = document.getElementById("planets")
    //function that will be called with the forEach method to build our HTML
    function buildSolarSystem(element, index, array) {
        //Construct and Place the HTML into the dom
        planetElement.innerHTML += `<section>${element}</section>`

    }
//call the forEach method on the planets array, and use the buildSolarSystem function
planets.forEach(buildSolarSystem)
/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
//function that will be called with the .map method on the planet array
function capitalizePlanet(element){
    //convert each element to all capitals
    let  capitalPlanet = element.toUpperCase()
    //select the first letter of capitalPlanet
    let firstLetter = capitalPlanet.charAt(0)
    //rebuild a new word using first word and every letter after it in element
    let rebuiltString = firstLetter + element.substr(1)
    //return the capitalized word    
    return rebuiltString
}
//call .map on planets using the capitalizePlanet function and store in capitals array
let capitals  = planets.map(capitalizePlanet)



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
// function that will be called using the .filter method on the planets array
function doesContain(element){
    //only return the values of element that include the letter "e"
    return element.includes("e")
}
//call .filter on the planets array using the doesContain function - store result in a variable called filter
let filtered = planets.filter(doesContain)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

//function that will be called using the .reduce method on the words array
function makeSentence(prev, next){
    //declare a variable to hold the new sentence
    let sentence = ""
    // build the sentence with a space between each word
    sentence += prev + " " + next
    //return the value of sentence
    return sentence
}
//call .reduce on words array using the makeSentence function
let complete = words.reduce(makeSentence)
//console log the value of complete
console.log(complete)