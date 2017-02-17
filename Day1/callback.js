let names =  ["bob","cheese","peter sucks", "bo"];

function myForEach(callback){
    for(var i = 0; i < this.length; i++){
        callback(this[i]);
    }
}

Array.prototype.myForEach = myForEach;

names.myForEach((name)=>console.log(name);
)

names.forEach((name)=>console.log(name));
