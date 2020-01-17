

//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number
// of characters then it should replace the missing second character of the final pair with an underscore ('_').

function splitStrings(str){
    let separated = str.split('');
    let splitResult = [];
    for (let i = 0; i < separated.length; i=i+2) {
            let aPart = separated[i];
            let bPart = separated[i+1];
            if(bPart !== undefined){
                splitResult.push(aPart + bPart);
            } else {
                splitResult.push(aPart);
            }
    }
    if(splitResult[splitResult.length - 1].length < 2){
        splitResult[splitResult.length - 1] += '_';
    };
    return splitResult;
}


// console.log(splitStrings('abc'));
// console.log(splitStrings('abcdfg'));


//Move the first letter of each word to the end of it, then add "ay" to the end of the word.
//Leave punctuation marks untouched. /^[A-Za-z]+$/

function pigIt(str){
    let stringArray = [];
    let separated = str.split(' ');
    for (let i = 0; i < separated.length; i++) {
        let doubleSepElem = separated[i].split('');
        doubleSepElem.push(doubleSepElem[0]);
        doubleSepElem.splice(0, 1);
        let compareSpot = doubleSepElem[0].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
        if (compareSpot.length !== 0){
            doubleSepElem.push('ay');
        }
        stringArray.push(doubleSepElem.join(''));
    }
    return stringArray.join(' ');
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));
