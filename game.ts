

// interface User{
//     readonly id:number,
//     name:string,
//     age?:number
// }

// const user1:User={
//     id:1,
//     name:"sara",
// }
interface Game{
    readonly id:number,
     title:string,
     genre:string,
     rating:number,
     realeasDate:number,
     multiPlayer?:boolean
 }
 
 const games:Game[]=[
     {id:1, title:"Elden Ring", genre:"RPG", rating:7.8,realeasDate:2022,multiPlayer:true},
     {id:2, title:"FIFA 25", genre:"SPORTS", rating:9.4,realeasDate:2025,multiPlayer:true},
     {id:3, title:"The Witcher", genre:"RPG", rating:9.8,realeasDate:2015},
     {id:4, title:"God of War", genre:"Action", rating:5.2,realeasDate:2018}
 ]
 
 function filterByGenre(games:Game[],genre:string){
     
     return games.filter(game => game.genre==genre)
 }
 const resultGames:Game[]=filterByGenre(games,"RPG")
 
 resultGames.forEach(item=>
     console.log(`${item.title}..........${item.rating}`)
 )
 console.log(filterByGenre(games,"RPG"))
 
 function multiPlayFind(games:Game[],)
 {
     return games.filter(item=> item.multiPlayer==true)
 }
 console.log(multiPlayFind(games))