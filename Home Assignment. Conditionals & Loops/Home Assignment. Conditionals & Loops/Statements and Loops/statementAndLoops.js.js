
var birth_year=1999;
let birth_month=6;

let current_year=new Date().getFullYear();

const current_month=new Date().getMonth();

let exact_year = current_year;

current_year-=1;

let age =exact_year-birth_year;
let accurateAge=current_year-birth_year;

if( birth_month <= current_month){
    age++;
    accurateAge++;
}
console.log(`Patients Age:${age}`);
console.log(`Patients Accurate Age:${accurateAge}`);
