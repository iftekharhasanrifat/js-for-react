// JSON
const person = {
    name: "Rifat",
    age: 25,
    town: "Chittagong",
    salary: 10000
};

// JSON convert back and forth
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
// console.log(dataParsed.name);
// API fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));


// local storage
// localStorage.setItem('userId', 1245);
const userId = localStorage.getItem('userId');
// object cant be send to local storage or session storage directly so it needs to be converted into json
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson.name);


const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);