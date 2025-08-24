

class Person{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    introduce(){
        console.log(`Hi My name IS ${this.name} and my age is ${this.age} years old` )
    }
}

const person1=new Person("Mona",30)
person1.introduce()

class Car{
    brand:string
    color:string
    model:string
    year:number

    constructor(brand:string,color:string,model:string,year:number)
    {
        this.brand=brand
        this.color=color
        this.model=model
        this.year=year
    }
    showCarInfo(){
        console.log( `${this.brand}........... ${this.color}........${this.model}.......${this.year}`)
    }
}


const car1=new Car("BMW","White","Sport",2022)
car1.showCarInfo()

class User{
    public name:string
    private email:string
    protected status:string

    constructor(name:string,email:string,status:string){
        this.name=name
        this.email=email
        this.status=status
    }
     public getUserInfo(){
        console.log(`Nmae is: ${this.name} status is: ${this.status}`)
     }

     public updateUserInfo(newStatus:string){
        this.status=newStatus
     }
     private getEmail()
     {
        return this.email
     }
}

class Admin   extends User{
    constructor(name:string,email:string,status:string){
        super(name,email,status)
    }

    public getSdminInfo(){
        console.log(`${this.name} .....${this.email}`)
    }
    public getEmailAcces(){
        console.log(this.getEmail())
    }
}



const user1=new User("sara","sara@gmail.com","active")

user1.getUserInfo()
user1.updateUserInfo("inactive")
console.log(user1.name)
console.log(user1.email)

Generics
function showFirst<T>(arr:T[]):T{
    return arr[0]
}

console.log(showFirst(["Amin","Amir","sara"]))
console.log(showFirst([200,300,400]))

interface Box<T>{
    content:T
}
const box1:Box<number>={content:500}
const box2:Box<string>={content:"sara"}

class DataHolder<T>{
    private data:T
    constructor(value:T){
        this.data=value
    }
    getData() : T{
        return this.data
    }
}
const numberHolder=new DataHolder<number>(90)
console.log(numberHolder.getData())

