//Write a code to display the multiplication table of a given integer
//INPUT
let angka = 9;
let perkalian = 10;
let answer = "";
//PROCESS
for (let i = 0; i <= perkalian; i++) {
    answer += `${angka} x ${i} = ${angka * i}`+ ` `;
}
//OUTPUT
console.log(answer);

//Write a code to check whether a string is a palindrome or not
//PROCESS
//1. Deklarasi variable input, variable penampung reverse data dan variable result
let data = "Malam";
let dataReverse = "";
result = "";
//2. Membalikkan data dengan cara mengakses dari karakter terakhir
console.log(data.charAt(4)),
  data.charAt(3),
  data.charAt(2),
  data.charAt(1),
  data.charAt(0)
for (let i = data.length - 1; i >= 0; i--) {
  dataReverse += data.charAt(i);
}
console.log(dataReverse);
//3. jika data dan reverse data sama, maka result polindrom
if (data.toLowerCase() === dataReverse.toLowerCase()) {
  result = "Polindrom";
} else {
//4. Jika tidak, maka non polindrom
  result = "Non-Palindrom";
}

console.log(result);




//Write a code to convert centimeter to kilometer.
let centimeter = 200
let kilometer = centimeter * 1e-5
console.log(kilometer);


//Write a code to format number as currency (IDR)
let number = 2000
result = "";
if (number >= 5e2) {
   result += "Nilai yang anda masukkan" + " " + number.toLocaleString(
        "id",{
            style : "currency", currency : "IDR"
        } 
    )
}else{
    result += `Nilai ${number} yang anda masukan tidak bisa digunakan!`
}
console.log(result);


//Write a code to remove the first occurrence of a given “search string” from a string
//INPUT
data = "Hello world"
remove = "ell"
//PROCESS
let setelah = "";
result = data.split(remove);

let hasil = result.join(``)
setelah += hasil
//OUTPUT
console.log(setelah);


// Write a code to capitalize the first letter of each word in a string
//INPUT
data = "main yuk! gas"
setelah = data.length;
kapital = "";
result = "";
console.log(setelah);
//PROCESS
for (let i = 0; i <= setelah; i++) {
    result = i
    console.log(result);
    if (result === 0) {
        kapital = data.charAt(i).toUpperCase();
        console.log(kapital);
    }else if(data.charAt(i) === " "){
        kapital += data.charAt(i)
        kapital += data.charAt(i+1).toUpperCase();i++
        console.log(kapital);
    }else{
        kapital += data.charAt(i)
    }
}
//OUTPUT
console.log(kapital);


//Write a code to reverse a string.
//INPUT
let string = "purwadhika";
reverse = "";
hasil = "";
result = string.length - 1
console.log(result);
//PROCESS
for (let i = result; i >= 0; i--) {
//console.log(i);
    reverse = string.charAt(i) 
// console.log(reverse);
    hasil += reverse
}
//OUTPUT
console.log(hasil);



//Write a code to swap the case of each character from string
//INPUT
let huruf = "JiKa AKu MakAn";
hasil = "";
//PROCESS
for(i = 0; i < huruf.length; i++){
    if(huruf.charAt(i) === huruf.charAt(i).toUpperCase()){
        console.log(i);
        hasil += huruf.charAt(i).toLowerCase()
        console.log(hasil);
    }else{
        hasil += huruf.charAt(i).toUpperCase()
        console.log(hasil);
    }
}
//OUTPUT
console.log(hasil);


//Write a code to find the largest of two given integers
//INPUT
angkaA = 105205;
angkaB = 267300;
angkaBesar = 0;
//PROCESS
angkaBesar = Math.max(angkaA && angkaB)
//OUTPUT
console.log(angkaBesar);


//Write a conditional statement to sort three numbers
//INPUT
let angka1 = 1e1;
let angka2 = 56e1;
let angka3 = 254e1;
let perbandingan = 0;
//PROCESS
if(angka1 < angka2 && angka1 < angka3){
    if(angka2 < angka3){
        perbandingan = angka3 + ", " + angka2 + ", " + angka1;
    }else{
        perbandingan = angka2 + ", " + angka3 + ", " + angka1;
    }
}else if(angka2 < angka1 && angka2 < angka3){
    if(angka1 < angka3){
        perbandingan = angka3 + ", " + angka1 + ", " + angka2;
        
    }else{
        perbandingan = angka1 + ", " + angka3 + ", " + angka2;
    }
}else{
    if(angka1<angka2){
        perbandingan = angka2 + ", " + angka1 + ", " + angka3;
    }else{
        
        perbandingan = angka1 + ", " + angka2 + ", " + angka3;
    }

}
//OUTPUT
console.log("Jadi angka dari terbesar ke terkecil adalah"+" "+ perbandingan);


//Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
//INPUT
let masukkanData = null;//Ganti null dengan data yang diinginkan. ex: "", true/false, 0, ``, ''
let berupa = null;
//PROCESS
if(typeof masukkanData === `string`){
    berupa =`termasuk kategori 1`  +` `+ `yaitu ${typeof masukkanData}`
}else if(typeof masukkanData === `number`){
    berupa =`termasuk kategori 2` +` `+ `yaitu ${typeof masukkanData}`
}else{
    berupa =`termasuk kategori 3` +` `+ `yaitu ${typeof masukkanData}`
}
//OUTPUT
console.log(berupa);



//Write a code to change every letter a into * from a string of input
//INPUT
let letter = "An apple a day keeps the doctor away"
let ganti = "a"; //hanya 1 huruf string yang dapat diganti berupa *
let awal = ""
//PROCESS
for(i = 0; i < letter.length; i++){
    console.log(i);
    if(letter.charAt(i).toLowerCase()  === ganti){
        awal += "*"
        console.log(awal);
    }else{
        awal += letter.charAt(i);
    }
}
//OUTPUT
console.log(awal);
