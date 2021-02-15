const numbers = [2, 4, 6, 7, 8];
const friends = ["Rifat", "Hasan", "Sudipta"];
const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Tab", price: 300 },
    { id: 3, name: "mobile", price: 80 },
    { id: 4, name: "Watch", price: 50 }
];

// map
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);

// multiline arrow func
const prices2 = products.map(pd => {
    // do some work
    return pd.price;
})
console.log(names);
console.log(prices2);

// foreach doesn't return anything

products.forEach(product => console.log(product.name));

// filter
const cheaper = products.filter(pd => pd.price < 100);
console.log(cheaper);
// cheaper.forEach(cheap => console.log(cheap.name));

// remove an item using filter
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);

// find 
const hasWatch = products.find(pd => pd.name === 'Watch');
console.log(hasWatch);

// reduce

// includes

// push

//pop

// length

//indexOf