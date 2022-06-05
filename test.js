function square(a, b){
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a
    }
    return result
}
function print(c, d, callBack){
    console.log(callBack(c, d))
}

print(2,99,square)