let users = [
    { name: "An", age: 25 },
    { name: "Bình", age: 30 },
    { name: "Cường", age: 28 }
];

let foundUser = users.find(user => user.name === "Bình");
let foundIndex = users.findIndex(user => user.age === 28);

console.log(foundUser);   // { name: "Bình", age: 30 }
console.log(foundIndex);  // 2
