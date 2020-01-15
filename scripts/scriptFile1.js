

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


console.log(splitStrings('abc'));
console.log(splitStrings('abcdfg'));

