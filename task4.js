let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

let checkSeven = sevenTimesTable.every(function(number){
    return number % 7 === 0;
})

let checkSeventySeven = seventySevenTimesTable.every(function(number){
    return number % 77 === 0;
})

let findRogue = seventySevenTimesTable.find(function(number){
    return number % 77 !== 0;
})

let findIndex = seventySevenTimesTable.findIndex(function(number){
    return number % 77 !== 0;
})
console.log(checkSeven, checkSeventySeven, findRogue, findIndex)