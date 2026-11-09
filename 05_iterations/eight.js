const myNumber = [1, 2, 3]

const mytotal = myNumber.reduce( (acc, currval) => {
    // console.log(`acc: ${acc} and curval: ${currval}`);
    
    return acc + currval
}, 0)
// use ths method for the total of the item price in the cart  

// console.log(mytotal)


const shoppingCart = [
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 1999
    },
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "data science course",
        price: 999
    },
]

// const totalCost = shoppingCart.reduce( (acc, item) => {
//     return acc + item.price
// }, 0)

//  we can write as well like below

const totalCost = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(`Total cost of the courses is : ${totalCost}`);
