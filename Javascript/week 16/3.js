// var rate = 80;
// const myItems = [
//     {'item':'A', 'price': 1000},
//     {'item':'B', 'price': 2000},
//     {'item':'C', 'price': 3000}
// ]

// const INR = Object.keys(myItems).price.map((curr)=>{
//     myItems+= curr**rate;

//     return myItems;
// })
const groceries = {
    bread: 2,
    milk: 5,
    butter: 10,
    cheese: 8,
    honey: 12,
  };
  const newObject = Object.keys(groceries).map((item) => {
    return {
      commodity: item,
      rupeePrice: groceries[item] * 80,
    };
  });