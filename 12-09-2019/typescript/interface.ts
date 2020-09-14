

//interface of basic program interface object
interface userType{
    name:string,
    age:number
    getName:()=>string
}
let users:userType={
    name:'anilsidhu',
    age:30,
    getName:function(){
        return"anilsidhu"
    }
}
console.log(users.getName);