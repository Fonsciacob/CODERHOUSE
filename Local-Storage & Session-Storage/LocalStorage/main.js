let users = [];

const user1 = {
  name: "Brayan",
};

const user2 = {
  name: "Alex",
};

users.push(user1, user2);

//JSON STRINGIFY -> CONVERTIR TODO A TEXTO
localStorage.setItem("usernames", JSON.stringify(users));
console.log(localStorage);
let obj = JSON.parse(localStorage.getItem("usernames"));
console.log(JSON.parse(localStorage.getItem("usernames")));
console.log(obj.name);
