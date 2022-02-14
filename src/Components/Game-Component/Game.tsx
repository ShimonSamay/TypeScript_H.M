import { log } from "console";
import React from "react";

const Game = () => {
    // let getUntil10 = ():void => {
    //    let condition:boolean = true ;
    //    let userGuesses:number[] = [] ;
    //    let counter:number = 0 ;
    //    while (counter < 1){
    // let userNumber = Number(prompt("type a number"));
    // if (userNumber != 0) {
    //  userGuesses.push(userNumber);
    // }
    // else {
    //  counter++ ;
    //  let minNum:number = Math.min(...userGuesses);
    //  let maxNum:number = Math.max(...userGuesses);
    //  console.log(`Max = ${maxNum} - Min = ${minNum}`); 
    // }
    // }
    // }

//     let usersNums:number[] = [];
//    let getcouple = ():number[] => {
//     for (let i:number = 0 ; i < 5 ; i++){
//      usersNums[i] = Number(prompt("type a number")) ;
//     }
//     console.log(usersNums);
//     let coupleNumbers:number[] = usersNums.filter(number => number%2 == 0)
//     return coupleNumbers ;
//    }
   
let oneHunderd = (myNum:number):void => {
   let randomNumbers:number[] = [] ;
   for (let i:number = 0 ; i < 10 ; i++){
    randomNumbers[i] = Math.round(Math.random()*100);
   }
   console.log(randomNumbers); 
  randomNumbers.includes(myNum) ? console.log("exist") : console.log("not exist");
}

let firstNameLetter = ():string => {
let userName:string = String(prompt("type your name"));

switch (userName[0]) {
    case "A" :
     return "A"
    
    case "Z" :
        return "Z"

     default :
     return "None"          
}
}

let someNum:number = 0 ;
let fizzBuzGame = ():void => {
   
   while (someNum < 100) {
   if (someNum%3 == 0 && someNum%5==0){
       console.log("divived by both numbers");
       
   }
   if (someNum%5 == 0){
       console.log("divived by 5");
       
   }
   if (someNum%3 == 0){
       console.log("divided by 3 ");       
   }
   someNum ++ ;
   fizzBuzGame();
}
   
}

    return (
        <>
        {/* {getUntil10()} */}
        {/* {console.log(getcouple())}
        <p>your numbers : {usersNums.join("-")}</p> */}
        {/* {oneHunderd(2)} */}
        {/* {console.log(firstNameLetter())} */}
        {fizzBuzGame()}
        </>
    )
}

export default Game ;