let sum = (x, y, callBack) => {
    result = x + y
    if (typeof callBack == 'function'){
        result = callBack(x, y)
    }
    return result
}

a = sum(2, 2, (x, y) =>{
    return "The result is " + (x + y)
})

console.log(a);