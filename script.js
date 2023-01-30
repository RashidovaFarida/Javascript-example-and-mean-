// lenght - Strinqin uzunlugunu alir
let strg='  Hello  word';
console.log(strg.length) // output 12


//indexOf - gosterilen kelime ve ya ifadenin index deyerini verir
console.log(strg.indexOf('word')) // output 8


//slice- verilen araliqdaki herf ve ya ifadeleri verir
//slice(baslangic index/  son index son) son index daxil deyil 
console.log(strg.slice(6,9)) // output wor

// replace - stiring icindeki bir ve ya bir nece kelimeni verilenle deyisir
//replace(silinen kelime / elave edilen )
console.log(strg.replace("Hello","Hi"))


//toLowerCase()/toUpperCase()
// butun herfler kicik / butun herfler boyuk
console.log(strg.toLowerCase()) // output hello word

//trim - bosluqlari silir

console.log(strg.trim()) 


//concat iki ve daha cox stringi birlesdirir


console.log(strg.concat(' Hello Azerbaijan')) // output Hello  word Hello Azerbaijan


// endsWith - mueyyen sozle bitib bitmediyini yoxlayir
//startsWith - teyin edilmis soz ve ya ifade ile baladigini yoxlayir
console.log(strg.endsWith("hello")) // false
console.log(strg.endsWith("word")) // true
console.log(strg.endsWith("Word")) // false
console.log(strg.startsWith(' Hello')) // true


//includes - teyin edilmis soz ve ya ifadenin oldugunu yoxlayir

console.log("includes"+" "+strg.includes('He')) // true


// substring , substrg
// aralarindaki ferq substringde substring 

console.log(strg.substring(2,7)) //ello   2 ile 7 arasini dondur
console.log(strg.substr(2,7));  //ello  w 2 den 7 addim sonrasina qeder dondur

// typeof 
 
let num = Number(strg)

console.log(typeof num);
// search - verilen sozun yerini tapir eger tapilmazsa -1 ekrana cixarir
let str = "Please locate where 'locate' occurs!";
let pos = str.search("where");

console.log(pos); // Output: 14
console.log(str.search("hello")); // Output: -1

// match - verilen heriflerin sayini gore value olan array cixarir

console.log(str.match(/a/g)); // (3) ['a', 'a', 'a']