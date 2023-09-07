//  Write a code to convert celsius to fahrenheit
// INPUT
let celcius = 20
// PROCESS
let fahrenheit = (9/5 * celcius) + 32
// OUTPUT
console.log(fahrenheit);

// Write a code to check whether the number is odd or even
// INPUT
let number = 24;
// PROCESS
let result = "";
if (number %2 === 0) {
    result = result + `${number} adalah GENAP`
}else{
    result = result + `${number} adalah GGANJIL`
};

console.log(result);

//Write a code to check whether the number is prime number or not
//INPUT

let n = 77
result = ''
if(n === 0 || n === 1 || n === 2){
    result = 'Adalah bilangan prima'
} else {
for(let i = 2; i < n; i++){
    let modulus = n % i
    if(modulus === 0){
        result = 'Bukan bilangan prima'
        break;
    } else {
        result = 'Adalah bilangan prima'
    }
}
}
console.log(type);

//

//Write a code to find the sum of the numbers 1 to N
//INPUT
let hitung = 0;
let jumlah = 6;
  for (let angka = 0; angka <= jumlah; angka++) {
    hitung = hitung + angka
  }
  console.log(hitung);
  
//Write a code to find factorial of a number
//INPUT
  hitung = 6;
  jumlah = 1;
  for (let angka = 3; angka <= hitung; angka++) {
      jumlah = jumlah * angka
    }
    console.log(jumlah);

//Write a code to print the first N fibonacci numbers
n = 6
let n0 = 1
let n1 = 1
let fn
for(let i = 2; i < n; i++){
    fn = n0 + n1
    n0 = n1
    n1 = fn
}
console.log(fn);

//Write a code persegi
let size = 5;
result = "";
for (let i = 1; i < size; i++) {
    for (let j = 1; j < size; j++) {
        if (j %2 === 0) {
            result = result + `# `
          }else{
           result = result + `* `
          
        }
    }
    result = result + `\n`
}
console.log(result);

//write a code
result = ''
n = 9
for(let i = 0; i < n; i++){
    for(let j = 0; j < i; j++){
        result = result + '0'
    }
    result = result + '1 \n' 

}
console.log(result);