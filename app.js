// Mengimpor modul operasi
let {tambah} = require('./project/tambah.js');
let {kurang} = require('./project/kurang.js');
let {kali} = require('./project/kali.js');
let {bagi} = require('./project/bagi.js');

let a = 20;
let b = 10;

console.log(`Hasil penjumlahan: ${tambah(a, b)}`);
console.log(`Hasil pengurangan: ${kurang(a, b)}`);
console.log(`Hasil perkalian: ${kali(a, b)}`);
console.log(`Hasil pembagian: ${bagi(a, b)}`);