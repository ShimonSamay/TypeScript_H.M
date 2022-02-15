import React from "react";
import Ibulding from "../../Models/IBulding/Ibulding";
import Istudent from "../../Models/IStudent/Istudent";

const Lotto = () => {
  const printBuilding = (...buldingsArray: any[]): void => {
    for (let bulding of buldingsArray) {
      for (let key in bulding) {
        console.log(`${key} : ${bulding[key]}`);
      }
    }
  };

  const onlyFiveFloors = (...buldingsArray: any[]): any[] => {
    let randomNumber: number = Math.round(Math.random() * 12);
    console.log(randomNumber);
    
    let fiveFloorsArray = buldingsArray.filter(
      (building) => building.Floors > 5
    );
    return fiveFloorsArray;
  };

  let getUserNumber = ():number[] => {
    let userNumbers: number[] = [];
    let counter: number = 0;
    while (counter < 10) {
      let randomNumber: number = Math.round(Math.random() * 100);
      if (userNumbers.indexOf(randomNumber) === -1) {
        userNumbers.push(randomNumber);
        counter++;
      } 
      else {
        counter--;
      }
    }
    return userNumbers ;
  };

  let generate50Nums = ():number[] => {
    let somecounter:number = 0 ;
    let numbersArray :number[] = [] ;
     while (somecounter < 12) {
     let someNumber: number = Math.round(Math.random()*100 );
     if (numbersArray.indexOf(someNumber) === -1){
         numbersArray.push(someNumber);  
         somecounter++ ;
     }
     }
     return numbersArray ;
  }

  //  {printBuilding({Heigth:12 , Width:20 , Floors:16 , Appartments:17})}
//   {console.log(onlyFiveFloors({Width:10 , Floors:4},{Width:10 , Floors:2},{Width:10 , Floors:14},{Width:10 , Floors:2}));}
  {
    // getUserNumber();
    // console.log(generate50Nums());

    let checkApperances = (userNumbers:number[] , someNumbers:number[]):void => {
      let homeManyTimes:number = 0 ;
      console.log(`user-numbers : ${userNumbers}`);
      console.log(someNumbers);
      for (let anyNumber of userNumbers){
      if (someNumbers.indexOf(anyNumber)>-1) homeManyTimes++ ;
      }
      console.log(`Apperances: ${homeManyTimes}`);
    }

    {console.log(checkApperances(getUserNumber(),generate50Nums()))}
    
  }
  return (
    <>
      <p>Lotto</p>
    </>
  );
};

export default Lotto;
