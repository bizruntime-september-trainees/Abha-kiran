class app{
    name:string="abha kiran"
    constructor(name:string){
        this.name=name
    }
    getName():string{
        return this.name
    }
}
//object creation 
let a1=new app("peter");
console.log(a1.getName())