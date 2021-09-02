const fs = require('fs');
var dataFile;
try {
    dataFile = fs.readFileSync('../jsonfile/scret.json'); 
} catch (error) {
   console.log('err=', error);
}
const data = JSON.parse(dataFile);
console.log(data)
var sampleObject = {
    name: 'pankaj',
    member: 'stack',
    type: {
        x: 11,
        y: 22
    }
};

var fruit= {name: "apple", count : 2, price: 3000}; 
console.log(">>>> fruit"); 
console.log(fruit); 
//add data (key, value) 
console.log(">>>> add color"); 
fruit.tset = 'red' 
console.log(fruit);
fruit.asd = 'red' 
console.log(fruit);

