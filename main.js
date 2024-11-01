// // 1-masala
// let n = prompt("Ixtiyoriy son kiriting")
// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }


// 2-masala
// let n = prompt("Ixtiyoriy son kiriting")
// for (let i = 1; i <= n; i++) {
//     if(i % 3 == 0 && i % 5 == 0 ){
//         console.log(i);
        
//     }
// }


// 3-masala
// let n = prompt("Ixtiyoriy son kiriting") - 0
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }

// 4-masala
// let a = 3; 
// let b = 10; 
// let sum = 0;
// let count = 0;
// for (let i = a; i <= b; i++) {
//     sum += i;
//     count++;
// }
// console.log("Yig'indi:", sum);
// console.log("Sonlar soni:", count);


// 5-masala
// let a = 1; 
// let b = 20; 
// for (let i = a; i <= b; i++) {
//     if(b % i == 0){
//         console.log(i);
//     }
// }

// 6-masala
// let a = 1; 
// let b = 8; 
// let sum = 0;
// for (let i = a; i <= b; i++) {
//     if(b % i == 0){
//         sum += i;
//     }
// }
// console.log(sum);

// 7-masala
// let a = 5 ;
// let b = 49;
// let sum = 1;
// for (let i = a; i <= b; i++) {
//     if(i % 2 != 0){
//         sum *= i;
//     }   
// }
// console.log(BigInt(sum) + ''); 

// 8-masala
// let a = 10;
// let b = 3;
// let count = 0;
// for (let i = a; i >= b ; i -= b) {
//     count++;
// }
// console.log(`A ni ichiga B - ${count} marta joylashadi`);

// 9-masla
// let a = 20;
// let b = 3;
// let count = 0;
// for (let i = a; i >= b ; i -= b) {
//     count++;
// }
// console.log(`A ni ichiga B ${count} marta ketadi va qolgan qoldiq uzunlik ${a % b} ga teng`);

// 10-masala
// let x = prompt("Narx kiriting");
// let n = prompt('N ni kiriting');
// for (let weight = 0.1; weight <= n; weight += 0.1) {
//     const price = weight * x;
//     console.log(`${weight.toFixed(1)} kg mahsulotning narxi: ${Math.round(price)} so'm`);
// }

// 11-masala
// let a = prompt("ikki xonali son kiriting") //25
// let ten = Math.trunc((a / 10))
// let one = (a % 10)
// if(ten > one ){
//     for (let i = one + 1; i < a; i++) {
//         console.log(i);
//     }
// }else {
//     for (let i = ten + 1; i < a; i++) {
//         console.log(i);
//     }
// }

// 12-masala

// let a = prompt("A sonini kiriting")
// let b = prompt("B sonini kiriting")
// let count = 0;

// for (let i = 2; i < b; i++) {
//     if (b % i === 0) {
//         count++;
//     }
// }
// if (count === 0) {
//     console.log(`${b} tub son.`);
// } else {
//     console.log(`${b} tub son emas.`);
// }


// Qoshimcha

let sonlar = [1, 2, 3, 4, 5, 6];
let juftlar = [];
let toqlar = [];
let juftYigindi = 0;
let toqYigindi = 0;

for (let i = 0; i < sonlar.length; i++) {
    if (sonlar[i] % 2 === 0) {
        juftlar.push(sonlar[i]);
        juftYigindi += sonlar[i];
    } else {
        toqlar.push(sonlar[i]);
        toqYigindi += sonlar[i];
    }
}
console.log('Juft sonlar:', juftlar);
console.log('Toq sonlar:', toqlar);
console.log('Juft sonlar yigindisi:', juftYigindi);
console.log('Toq sonlar yigindisi:', toqYigindi);

