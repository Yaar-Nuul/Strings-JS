//Extract the last four characters from the string below;"extravaganza"
let word = 'extravaganza';
let lastFourCharacters =word.substr(8, 11)
console.log({lastFourCharacters});


//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const food = "The quick fox jumped over the lazy dog";
const add = "eat";
const position = 3;
result = food.slice([0], [4]) + add + " "+ food.slice([4]);
console.log({result});


//Count how many times the following string appears in the string variable:1. "the" 2."brown" const story= "The quick brown fox jumps over the lazy dog"
const a = "The pupils are reading in the library";
console.log({item:a.indexOf("the")});

//"sitting" 
const b = "The child was sitting on the table before it fell"
console.log({item:b.indexOf("sitting")});

//Using JavaScript, find the following words from the following strings:1. "are" const string1 = "The pupils are reading in the library";2. "sitting" const string2 = "The child was sitting on the table before it fell"

//"are" 
const string1 = "The pupils are reading in the library";
console.log({item:string1.indexOf("are")});

//"sitting" 
const string2 = "The child was sitting on the table before it fell"
console.log({item:string2.indexOf("sitting")});
//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let x ="wonderful";
console.log(x.toUpperCase());

let y = "AMAZING";
console.log(y.toLowerCase());

let z = "undERneath";
console.log(z.toLowerCase());

let toTitlecasetitleCase = "A wonderful world"
console.log("titleCase:", "A wonderful world".toTitlecase);