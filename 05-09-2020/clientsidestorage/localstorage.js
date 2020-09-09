console.log('My name is Abha kiran');
let none=['none1','none2','none3','none4']

localStorage.setItem('name','Abha');
localStorage.setItem('name2','kiran');
localStorage.setItem('local',JSON.stringify(none));

let Name=localStorage.getItem('name2');
console.log(Name);
obj=JSON.parse(localStorage.getItem('local'));
console.log('local');