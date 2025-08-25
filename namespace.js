"use strict";
var Products;
(function (Products) {
    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Monitor", price: 1000 },
    ];
    function listProduct() {
        return products.map(item => `${item.name} ... ${item.price}`);
    }
    Products.listProduct = listProduct;
    console.log(listProduct());
})(Products || (Products = {}));
var Customers;
(function (Customers) {
    const people = [
        { id: 1, name: "Sara", email: "Sara@gmail.com" },
        { id: 2, name: "Amir", email: "Amir@gmail.com" },
    ];
    function ShowPeople() {
        return people.map(item => `${item.name} .. ${item.email}`);
    }
    Customers.ShowPeople = ShowPeople;
    console.log(ShowPeople());
})(Customers || (Customers = {}));
console.log(Products.listProduct());
console.log(Customers.ShowPeople());
//# sourceMappingURL=namespace.js.map