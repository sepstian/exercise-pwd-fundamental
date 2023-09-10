//XTRA
let dataTokoBaju = [
    ["Jaket", 20, 150000],
    ["Kaos", 10, 75000],
    ["Celana", 5, 25000],
];
let dataTokoMobil = [
    ["Xenia", 20, 1500000],
    ["Brio", 10, 7500000],
    ["Pajero", 5, 2500000],
];

//Type code
const printData =(data) => {
    let result = "";
for(let index = 0; index < data.length; index++){
    if (data[index][1] > 5) {
        result += `${index+1}. Adalah ${data[index][0]} dengan harga ${data[index][1]}, stok : ${data[index][2]} Stock cukup`
    }else{
        result += `${index+1}. Adalah ${data[index][0]} dengan harga ${data[index][1]}, stok : ${data[index][2]} Stock tidak cukup`
    }
    if(index !== data.length - 1){
        result += `\n`
    }
}
return result
};


//EXERCISE - EXAMPLE
function triangle() {
//INPUT
    var height = 5;
    var output = '';
    output = '';
//PROCESS
    for (var i = 1; i <= height; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        if(i !== height){// Agar tidak terdapat baris baru
            output += `\n`
        }
    }
//OUTPUT
    console.log(output);
    return triangle
}
triangle();


//Exercise - Example Array Pseudocode
//INPUT
let angka = [2008, 7356, 6386, 5849, 7890, 9782, 5645, 3425, 1253, 1534]
//PROCESS
Array.prototype.max = function (){
    return Math.max.apply(null, this);
};
//OUTPUT
console.log(`Jadi nilai terbesar dari data ${angka} adalah ${angka.max()}`);


//Create a function that can create a triangle pattern according to the height we provide like the following
function triangle() {
    //INPUT
        var height = 5;
        var output = '';
        output = '';
    //PROCESS
        for (var i = 1; i <= height; i++) {
            for (var j = 1; j <= i; j++) {
                output += '0'+ j + ' ';
            }
            if(i !== height){// Agar tidak terdapat baris baru
                output += `\n`
            }
        }
    //OUTPUT
        console.log(output);
        return triangle
    }
    triangle();


//Create a function that can loop the number of times according to the input we provide, and will replace multiples of ú with "Fizz", multiples of ü with "Buzz", multiples of ú and ü with "FizzBuzz".
function kategori(number){
let hasil = "";
for (let i = 1; i < number; i++){
    if (i % 15 == 0) {
        hasil += "FizzBuzz, "
    } else if (i % 3 == 0) {
        hasil += "Fizz, "
    } else if (i % 5 == 0) {
        hasil += "Buzz, "
    } else {
        hasil += i + ", "
    }
}
return hasil;
}
console.log(kategori(10));


//Create a function to calculate Body Mass Index (BMI)
//INPUT
data = ( 167, 5 )
//PROCESS
function hitungBMI(weight, height) {
    let number = weight / ((height) ** 2)
    number = number.toLocaleString(undefined, {
        min: 1,
        max: 1
    });
    var hasil = "";

    if (number > 39.9) {
        hasil = "Obesity"
    } else if (number >= 30.0) {
        hasil = "Very overweight"
    } else if (number >= 25.0) {
        hasil = "Overweight"
    } else if (number >= 18.5) {
        hasil = "Ideal"
    } else {
        hasil = "Less weight"
    }

    return hasil;
}
//OUTPUT
console.log(hitungBMI(data));


//Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
//INPUT
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 112, 113];
//PROCESS
let answer = angka.filter(
    function (num) {
        return num % 2 === 0;
});
//OUTPUT
console.log(answer)


//Write a function to split a string and convert it into an array of words
//INPUT
let kata = "Hello World" //Ketik data disini
//PROCESS
let convert = function (kalimat) {
    return kalimat.trim().split(" ");
};
//OUTPUT
console.log(convert(kata));