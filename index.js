function callback(){
    return "test"
}
function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function named(){
        return "test"
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        return "test"
    }
}