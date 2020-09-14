class parent{
    name;
    setName(name)
    {
         this.name=name
    }
}
class child extends parent{

    getName()
    {
        return this.name
    }
}

let b1 =new child();
b1.setName("peter")

console.log(b1.getName())