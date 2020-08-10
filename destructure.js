const person = { name: "Jack William", age: 18, job: "google", gfName: "Ema watson", address: "Kouch Kat", phone:"017035121", friends:["Tom hans", "tom Cruz"]}

const {name, gfName, age, phone}  = person;
// const gf.Name = person.gf;
// const phone = person.phone;

console.log(name, gfName, phone);
console.log(name, gfName, phone);

// destructure
const complexObject={
    name: "abc",
    info:{
        address: "kola Bagan",
        leader: "Tiger Leader"
    }
}
const {leader} = complexObject.info;


// array destructor
const friends = ["Pallab", "joy", "Ahor", "Shasmito"];
const [chotoFriends, ...boroFriends] = friends;
console.log(...boroFriends);