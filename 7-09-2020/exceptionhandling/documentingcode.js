/**
 * this function is details accept about  a person
  * and create a object for them
 * @param {string} name the person's full name 
 * @param {number} age the person's age
 * @param {boolean} isdeveloper whether or not the person is a developer
 * @return {objectobject} the person 
 * 
 */ 
function cretePerson(name,age,isdeveloper){
    return{
        nme:name,
        age:age,
        isdeveloper:isdeveloper
    }
}
class person{
    /**
    * create a person
    * @param {string} name the person's full name 
    * @param {number} age the person's age
    * @param {boolean} isdeveloper whether or not the person is a developer
    * @return {objectobject} the person  
     */
    constructor(name,age,isdeveloper){
        this.name=name;
        this.age=age;
        this.isdeveloper=isdeveloper;
    }
}
/**
 * output details about a person
 * @param {person} person 
 */

function printDetails(person) {
    
} 

