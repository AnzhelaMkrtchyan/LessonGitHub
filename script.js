// let i = 0;
// let j = 1;
// let x = 0;
// console.log(i);
// console.log(j);
// while(x < 10){
//    i = i + j;
//    j = j + i;
//    console.log(i);
//    console.log(j);
//     x++;
// }

// let arr = [12, 654, 127, 328, -145, 128];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > arr[0]){
//         arr[0] = arr[i];
//     }
// }
// console.log(arr[0]);

// let val = [12, 654, 127, 328, -145, 128];

// for(let i = 0; i < val.length; i++){
//     if(val[i] < val[0]){
//         val[0] = val[i];
//     }
// }
// console.log(val[0]);

let user = {
  name: "Anzhela",
  age: "20",
  "likes dogs": true,
};

console.log(user);
console.log(user.name);
delete user.age;
console.log(user);
user["likes dogs"] = false;
console.log(user["likes dogs"]);

function newUser(name, age) {
  return {
    name: name, //name,
    age: age, //age
  };
}

let nuser = newUser("Anzhela", 20);
console.log(nuser.name);

let obj = {
  0: "number",
};

alert(obj["0"]);
alert(obj[0]);

let obj2 = {};
obj.__proto__ = 5;
console.log(obj.__proto__); //ignor

//proporties ete chka-undefined

let user = {};

alert(user.noSuchProperty === undefined);

// in operator erb arjeqy undefined e

let obj = {
  test: undefined,
};

console.log(obj.test);
console.log("test" in obj);

//for in

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  alert(key);
  console.log(user[key]);
}

//dasavorman hertakanutyun, text, +

let codes = {
  49: "Германия",
  41: "Швейцария",
  44: "Великобритания",
  1: "США",
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

//Exercises
