console.log('this is exceptionhandling error');

let a='Abha kiran';
a=undefined;
if (a!==undefined){
    throw new console.error('this is not undefined');
}
else{
console.log('this is undefined');
}

try {
  // djkshgdkmmh
  console.log('we are inside try block');
    // functionabha();
} catch (error) {
    console.log('Are you ok abha kiran');
    //console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('finally we will run this');
}