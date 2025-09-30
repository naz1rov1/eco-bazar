const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const qtyInput = document.getElementById("quantity");
const minuschaBtn = document.getElementById("minuscha");
const pluschaBtn = document.getElementById("pluscha");
const qtychaInput = document.getElementById("quantitycha");

minusBtn.addEventListener("click", () => {
  let value = parseInt(qtyInput.value);
  if (value > 0) {
    qtyInput.value = value - 1;
  }
});

plusBtn.addEventListener("click", () => {
  let value = parseInt(qtyInput.value);
  qtyInput.value = value + 1;
});

minuschaBtn.addEventListener("click", () => {
  let value = parseInt(qtychaInput.value);
  if (value > 0) {
    qtychaInput.value = value - 1;
  }
});

pluschaBtn.addEventListener("click", () => {
  let value = parseInt(qtychaInput.value);
  qtychaInput.value = value + 1;
});




// class Student {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//     this.grades = [];
//   }

//   addGrade(grade) {
//     this.grades.push(grade);
//   }

//   getAverage() {
//     if (this.grades.length === 0) {
//       return 0;
//     }
//     let sum = 0;
//     for (let grade of this.grades) {
//       sum += grade;
//     }
//     return sum / this.grades.length;
//   }
// }

// const students = new Student(1, "Aziz");
// students.addGrade(5);
// students.addGrade(4);
// students.addGrade(3);

// console.log(students.name, "ning baholari:", students.grades);
// console.log(students.name, "o'rtacha bahosi:", students.getAverage());

// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   area() {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super("Circle");
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Square extends Shape {
//   constructor(side) {
//     super("Square");
//     this.side = side;
//   }

//   area() {
//     return this.side * this.side;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super("Rectangle");
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// const circle = new Circle(5);
// console.log(`${circle.name} yuzi:`, circle.area().toFixed(2));

// const square = new Square(4);
// console.log(`${square.name} yuzi:`, square.area());

// const rectangle = new Rectangle(4, 6);
// console.log(`${rectangle.name} yuzi:`, rectangle.area());
