
function logMEssage(message:string):void{
    console.log (message)
}

//never
function throwError(message:string):never{
    throw new Error(message)
}

function loop(message:string):never{
    while(true){
        console.log(message)
    }
}
 function combine(a:number, b:number):number
 function combine(a:string, b:string):string
 function combine(a:any, b:any):any
 {
    return a+b
 }
 console.log(combine(6,6))
 console.log(combine("sara ", "bagheri"))
const h1 = document.createElement("h1");
h1.textContent = `the userStatus is    👋`;
h1.style.textAlign = "center";
h1.style.marginTop = "50px";
document.body.appendChild(h1);
document.body.appendChild(h1);
document.body.appendChild(h1);



