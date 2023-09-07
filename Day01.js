//Write a code to find area of rectangle
//INPUT : length, width
var length = 20; //panjang (P)
var width = 34; //lebar (L)
//PROCESS
var area = length * width//RUMUS LUAS PERSEGI = PxL
//OUTPUT
console.log("Maka hasil dari keliling persegi adalah =", area);


//Write a code to find perimeter of rectangle
//INPUT : length, width
var length = 30; //panjang (P)
var width = 45; //lebar (L)
//PROCESS
var perimeter = (2*(length + width)); //RUMUS KELILING PERSEGI = 2x(P+L)
//OUTPUT
console.log("Maka hasil dari keliling persegi adalah =", perimeter);

console.log("jadi hasil luas persegi adalah", area, "dan keliling dari persegi adalah", perimeter);



// Write a code to find diameter, circumference and area of a circle.
// INPUT
var phi = Math.PI 
var r = 14; // Jari-jari
d = 2*r// Diameter
//PROCESS
var area = phi*r*r;
//OUTPUT
console.log("Maka hasil luas lingkaran adalah =",area);
//PROCESS
var circumference = phi*2*r
//OUTPUT
console.log("Maka hasil keliling adalah =", circumference);



// Write a code to find angles of triangle if two angles are given
//INPUT
var angleA = 45
var angleB = 60
var allAngle = 180
//PROCESS
var angleC = (allAngle-(angleA + angleB));
//OUTPUT
console.log("Maka hasil sudut segitiga adalah =", angleC);



// Write a code to get difference between dates in days
//INPUT
var date1 = new Date("2020-01-24");
var date2 = new Date("2023-06-04");
//PROCESS
var hari = Math.abs(date1 - date2);
difference = hari/(24 * 3600 * 1000);
//OUTPUT
console.log(`Jadi selisih tanggal: ${date1} dan tanggal: ${date2} adalah =`, difference);



// Write a code to convert days to years, months and days.
//INPUT
var hari = 1527
//PROCESS
var year = Math.floor(hari / 365);
var months = Math.floor(hari %365 / 30);
var date = Math.floor(hari %365 %30);
//OUTPUT
console.log(`jadi hasil ${hari} hari adalah = ${year} tahun, ${months} bulan, ${date} hari`);