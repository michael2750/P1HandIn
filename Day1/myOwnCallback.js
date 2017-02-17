let names =  ["bob","cheese","peter sucks", "bo", "THING!"];

function filter(arr, callback){
    let arrayToReturn = [];
    arr.forEach(function(name){
        let shouldInclude = callback(name);
        if(shouldInclude = true){
            arrayToReturn.push(name);
        }
    })
    return arrayToReturn;
}
let name2 = filter(names, function(name){
    return name.length >= 3;
});