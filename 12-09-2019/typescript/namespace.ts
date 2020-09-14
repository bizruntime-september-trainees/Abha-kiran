/// <reference path="./namespace1.ts"/>
namespace UsersUtils
{
  export class Users extends parent implements UserType{
        getName1()
        {
            return this.name
        }
    }
}
let u1 =new UsersUtils.Users();
u1.setName("peter")

console.log(u1.getName1()); 