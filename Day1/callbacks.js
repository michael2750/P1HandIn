let name =  ["bob","cheese","peter sucks", "bo"];

let rows = name.map(function(name){
    return "<td>" +name + "</td>"
});

let rowsStr = rows.join(" ")
console.log(rowsStr);

let table = `<table><tbody> 
            ${rowsStr}
            </tbody></table>`

console.log(table);