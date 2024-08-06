const num = 100;

const denominator = 'A';

try{
result = num/denominator;

const agegroup = [20];

console.log(" Result : "+ result);
console.log(agegroup[5]);

}catch(error){
    console.log(" An error caught");
    console.log('Error Message : '+ error);
}
finally{
    console.log(' This is finally block....')
}
