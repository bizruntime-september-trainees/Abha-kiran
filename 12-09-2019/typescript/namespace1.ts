namespace UsersUtils{
    export class parent{
        name;
        setName(name){
         return this.name=name
        }
    }
    export interface UserType{
        getName();
    }
}