// perbandingan ES5 VS ES6 var dan const
console.log("Materi 1 var dan const");

// ES5
var myName = "Rizky Ramadhan";
myName = "Belajar Kode";
myName = "Bagi Kode";
console.log("ES5", myName);

// ES6
const token = "231425";
console.log(token);
console.log("");
console.log("");
console.log("");

// let dan var
console.log("Materi 2 let dan var");

// ES5
var myCar = ["BMW", "Mazda", "Toyota"];
for (var i = 0; i < myCar.length; i++) {
  console.log(myCar[i]);
}
// bisa di console
console.log(i);

// ES6

const car = ["BMW", "Mazda", "Toyota"];
for (let j = 0; j < car.length; j++) {
  console.log(car[j]);
}
// tidak bisa di console
// console.log(j);
console.log("");
console.log("");
console.log("");

// String concat
console.log("Materi 3 string concat");
const user_place = document.getElementById("user");

// ES5
const user_logged = "Kyra";
user_place.innerHTML = "Hi, " + user_logged + " apa kabar?";
console.log(user_logged);

// ES6
const user_name = "Rizky";
user_place.innerHTML = `Hi, ${user_name} apa kabar?`;
console.log(user_name);
console.log("");
console.log("");
console.log("");

// Object Literals
console.log("Materi 4 Object Literals");

const cart_item = document.getElementById("cart");

// ES5
// function addProduct(name, category) {
//   return {
//     name: name,
//     category: category,
//   };
// }

// var getProduct = addProduct("Iphone 11", "Gadget");
// console.log(getProduct);

// ES6
function addProduct(name, category) {
  return {
    name,
    category,
  };
}

var getProduct = addProduct("Iphone 11", "Gadget");
console.log(getProduct);

cart_item.innerHTML = getProduct.name;
console.log("");
console.log("");
console.log("");

// Array foreach
console.log("Materi 5 Array foreach");

const skills_holder = document.getElementById("skills");

// ES5

// ES6
const your_skills = ["Front-End", "UI/UX", "Composer"];
// var parent = "<ul>";
// your_skills.forEach((skill) => {
//   parent += "<li>" + skill + "</li>";
//   console.log(skill);
// });
// parent += "</ul>";
// skills_holder.innerHTML = parent;
console.log("");
console.log("");
console.log("");

// map dan filter
console.log("Materi 6 map dan filter");

// ES6
const printSkills = your_skills.map((skill) => {
  return skill;
});

skills_holder.innerHTML = printSkills;

//filter data
const printPrimarySkills = your_skills.filter((skill) => {
  return skill === "Front-End";
});
console.log(printPrimarySkills);

console.log("");
console.log("");
console.log("");

// classes
console.log("Materi 7 classes");

class Member {
  constructor(username, password, id_kelas) {
    this.username = username;
    this.password = password;
    this.id_kelas = id_kelas;
  }

  gabung() {
    console.log(this.username + " telah bergabung pada kelas " + this.id_kelas);
  }
}

// let tambahMember = new Member("rizky123", "password", 12);

// tambahMember.gabung();
console.log("");
console.log("");
console.log("");

// inheritance
console.log("Materi 8 inheritance");
class Langganan extends Member {
  constructor(username, paket) {
    super(username);
    this.paket = paket;
  }

  gabungPaket() {
    console.log(`hi, ${this.username} telah berlangganan paket ${this.paket}`);
  }
}
let tambahLangganan = new Langganan("rizky123", "Premium");

tambahLangganan.gabungPaket();
