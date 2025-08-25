namespace Products{
    interface Product{
        readonly id:number
        name:string
        price:number
    }
    const products:Product[]=[
        {id:1,name:"Laptop",price:50000},
        {id:2,name:"Mobile",price:20000},
        {id:3,name:"Monitor",price:1000},
    ]

  export  function listProduct():string[]{
        return products.map(item=> `${item.name} ... ${item.price}`)
    }
    console.log(listProduct())
}

namespace Customers{
    interface Customer{
        readonly id:number
        name:string
        email:string
    }
    const people:Customer[]=[
        {id:1,name:"Sara",email:"Sara@gmail.com"},
        {id:2,name:"Amir",email:"Amir@gmail.com"},
    ]

  export  function ShowPeople(){
        return people.map(item=>`${item.name} .. ${item.email}`)
    }

    console.log(ShowPeople())
}

console.log(Products.listProduct())
console.log(Customers.ShowPeople())

