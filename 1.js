// //task 1
let a = 5;
let b = 7;
console.log(a + b)

// //task 2
const ism = prompt("Ismingizni kiriting: ");
const familiya = prompt("Familiyangizni kiriting: ");
let ismFamiliya = (ism + familiya);

alert(ismFamiliya);

//task 3
let yoshTask3 = prompt("Yoshingizni kiriting: ");
if (yoshTask3 < 18) {
    alert("Siz voyaga yetmagansiz.")
} else {
    alert("Siz voyaga yetgansiz.")
}

//task 4
let oddEven = prompt("Biror son kiriting: ");
if (oddEven % 2 == 0) {
    alert("Kiritilgan son juft🙂")
} else {
    alert("Kiritilgan son toq🙃")
}

//task 5
let scoreTask5 = prompt("O'quvchini 0 dan 100 gacha baholash sistemasida baholang ");
if (scoreTask5 < 60) {
    alert("F")
} else if (scoreTask5 >= 60 && scoreTask5 < 70) {
    alert("D")
} else if (scoreTask5 >= 70 && scoreTask5 < 80) {
    alert("C")
} else if (scoreTask5 >= 80 && scoreTask5 < 90) {
    alert("B")
} else if (scoreTask5 >= 90 && scoreTask5 <= 100) {
    alert("A")
} else {
    alert("Iltimos 0 dan 100 gacha baholang!🤨")
}

//task 6
let task6 = prompt("Kvadratning tomon uzunligini kiriting: ");
let task6kv = task6 * 4;
let task6yuz = task6 * task6;
alert(`Kvadratning perimetri: ${task6kv} sm 
Kvadratning yuzasi esa : ${task6yuz} sm/kv ga teng 😎`);

//task 7
let task7 = prompt("Kubning bitta tomonining uzunligini  kiriting: ");
alert(`Ushbu kubning hajmi ${task7 ** 3} ga teng 🧐`)

//task 8
let task8 = prompt("Celsius darajasini kiriting: ");
alert(`${task8}C = ${task8 * 9/5 + 32}F`);

//task 9
let task9 = prompt("Havoning namlik darajasoini kiritng >> ");
if (task9 < 30) {
    alert("Havo juda quruq😥")
} else if (task9 >= 30 && task9 <= 60) {
    alert("Havo qulay👍")
} else if (task9 > 60 && task9 <= 100) {
    alert("Havo o'ta nam")
} else {
    alert("Bo'ldi brat buyog'iga cho'kib ketamiz😅🤿")
}

//task 10
let task10 = prompt("Internet tezligini kiriting >> ");
if (task10 < 50) {
    alert("Internet sekin.🐢")
} else if (task10 >= 50 && task10 < 100) {
    alert("Internet o'rtacha.🚗")
} else {
    alert("Internet juda tez.🚀")
}

//task 11
let task11 = prompt("💵Dollar$ miqdorini kiriting >> ");
alert(`${task11} usd ➛ ${task11 * 10650} so'm ga teng.`);

//task 12
let task12age = prompt("Yoshigizni kiriting");
let task12car = prompt("Avtomobilingiz turini kiriting masalan: yengil/yuk");
if (task12age >= 18 && task12car == "yengil") {
    alert("Siz yengil avtomobil boshqarishingiz munkin.")
} else if (task12age < 18) {
    alert("Hali yoshingiz yetmaydi.")
} else if (task12age >= 18 && task12car == "yuk") {
    alert("Siz yuk mashinasini boshqarishingiz munkin.")
} else if (task12age < 18) {
    alert("Hali yoshingiz yetmaydi.")
} else {
    alert("Iltimos malumotlarni namunadagidek kiriting")
}

//task 13
let task13time = prompt("Necha soat ishladingiz?");
let task13salary = prompt("Soatlik ish haqingiz qancha?");
alert(`Ishlagan ish haqingiz ${task13time * task13salary} so'm💵`)

//task 14
let task14first = prompt("Birinchi sonni kiriting");
let task14second = prompt("Ikkinchi sonni kiriting");
if (task14first > task14second && task14second < task14first) {
    alert(`${task14first} katta ${task14second}`)
} else if (task14second > task14first && task14first < task14second) {
    alert(`${task14second} katta ${task14first}`)
} else {
    alert("Ikkala son teng.")
}

//task 15
let task15 = prompt("Biror matn yoki so'z kiriting");
alert(`Siz kiritgan matn ${task15.length} ta belgidan iborat.`);

//task 16
let task16 = prompt("Xarid summasini kiriting");
let foiz = 10 / 100 * task16
let tolov = task16 - foiz
if (task16 >= 500000) {
    alert(`Chegirma ${foiz} so'm, To'lov ${tolov} so'm`)
}

//task 17
let son1 = parseInt(prompt("Birinchi sonni kiriting"));
let son2 = parseInt(prompt("Ikkiinchi sonni kiriting"));
let son3 = parseInt(prompt("Uchinchi sonni kiriting"));
let SuM = son1 + son2 + son3;
let AvG = SuM / 3;
alert(`Uchchala sonning o'rtacha qiymati ${AvG}`)

//task 18
let asosiySumma = prompt("Asosiy summani kiriting");
let yillikFoiz  = prompt("Yillik foiz stavkasini kiriting");
let vaQt        = prompt("Vaqtni yilda kiriting");
let res = asosiySumma * yillikFoiz * vaQt
let natija = res / 100
alert(`Natija: ${natija} so'm`)

//task 19
let task19 = prompt("Istalgan qiymat kiriting satr yoki son");
if (isNaN(task19)) {
    alert("Kiritilgan qiymat (string)")
} else {
    alert("Kiritilgan qiymat (number)")
}

//task 20
let son_1 = prompt("Birinchi sonni kiriting");
let son_2 = prompt("Ikkiinchi sonni kiriting");
let son_3 = prompt("Uchinchi sonni kiriting");
alert(`Eng katta son: ${Math.max(son_1,son_2,son_3)}`);

//clone qilindi