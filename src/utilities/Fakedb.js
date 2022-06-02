const addToDb = (id) => {
    // local stroage akdom khali kina
    const exist = localStorage.getItem('shopping_cart')
    let shoppingCart = {};
    // jodi kicu nah pai
    if (!exist) {
        shoppingCart[id] = 1
    }
    else { //kicu paile
        shoppingCart = JSON.parse(exist) //jehetu amra kicu pailam tai take parse kore pur js e convert korlam

        if (shoppingCart[id]) {//id dia khuje ber korte hobe
            const newCount = shoppingCart[id] + 1
            shoppingCart[id] = newCount
        }
        else {
            shoppingCart[id] = 1
        }
    }
localStorage.setItem('shopping_cart',JSON.stringify(shoppingCart))
}
export { addToDb }