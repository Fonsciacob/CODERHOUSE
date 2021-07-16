let users = [];

const user1 = {
  name: "Brayan",
};

const user2 = {
  name: "Alex",
};

users.push(user1, user2);

//JSON STRINGIFY -> CONVERTIR TODO A TEXTO
sessionStorage.setItem("usernames", JSON.stringify(users));
console.log(sessionStorage);
