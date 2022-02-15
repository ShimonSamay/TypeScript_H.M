import React from "react";
import Istudent from "../../Models/IStudent/Istudent";

const Home = () => {
  let age: number = 22;
  let firstName: string = "Shimon";
  let hasArrivedToSchool: boolean = false;
  let grades: number[] = [14, 19, 15, 19];
  const welcomeMessage = (): void => {
    alert(`Hi ${firstName}`);
  };

  const checName = (name: string): string => {
    if (name.length > 4) {
      return "longer";
    }
    return "shorter";
  };

  const checkAge = (firstname: string, age: number): string => {
    if (age > 15) {
      return `${firstname}`;
    }
    return "wrong class";
  };

  const details = (): void => {
    alert(
      `detalis : \n Name : ${firstName} \n Age : ${age} \n Atschool : ${hasArrivedToSchool} \n grades : ${grades}`
    );
  };

  const getText = (
    firstname: string,
    lasrname: string,
    age: number = 0
  ): string => {
    if (!age) {
      return `${firstname} ${lasrname} ${age}`;
    }
    return `${firstname} ${lasrname} ${age}`;
  };

  const printStu = (teacher: string, ...students: string[]): void => {
    students.map((string) => console.log(string));
  };

  const checkLastName = (
    firstname: string,
    lastname?: string,
    grade: number = 60,
    ...friends: string[]
  ): void => {
    lastname
      ? console.log(`${firstname} ${lastname} ${grade} ${friends}`)
      : alert(`${firstname} ${lastname} ${grade} ${friends}`);
  };

  const getBigger = (x: number, y: number): number => {
    return x > y ? x : y;
  };

  const getLowNumber = (str: string, ...nums: number[]): string => {
    let minNumber = Math.min(...nums);
    return `${str} min : ${minNumber}`;
  };

  const checkIfExist = (anyName: string, ...someNames: string[]): boolean => {
    let sameNamesArray: string[] = someNames.filter(
      (someName) => someName === anyName
    );
    return sameNamesArray.length > 1 ? true : false;
  };

  let orderNames = (grade?: string, ...someNames: string[]): string[] => {
    return grade ? someNames.sort() : someNames.sort().reverse();
  };

  let ifExist = (someNumber: number = 3): void => {
    let randomNumbets = [];
    for (let i = 0; i < 5; i++) {
      randomNumbets[i] = Math.round(Math.random() * 10);
    }
    console.log(randomNumbets);
    randomNumbets.indexOf(someNumber) > -1 ? console.log("exist") : console.log("not exist ");
  };

  let printStudents = (...someStudents: Istudent[]):void => {
    for (let student of someStudents) {
        for(let key in student){
          // console.log(`${key} : ${student[key]}`)
          
        }
    }
  };

  let getOldestStudent = (...somestudents: Istudent[]):Istudent => {
    let oldestStudent:Istudent = somestudents[0];
    somestudents.forEach((student) => {      
      if (student.Age > oldestStudent.Age) oldestStudent = student;
    });
    return oldestStudent;
  };

  let checkStudentName = (studentName:string , ...studentsArray:Istudent[]):boolean => {
    for (let student of studentsArray) {
      if ( student.FirstName == studentName ) return true ;
    }
    return false ;
  }

  return (
    <>
      {/* {console.log(checName("hjhjhj"))}
         {console.log(checkAge("shimon" , 2))}
         {console.log(getText("shimon" , "samay"))}
         {printStu("a" , "b" , "c" , "d")} */}
      {/* {checkLastName("yuuy" , "tyyu" , 60 , "b,c,f,s" )} */}
      {/* {console.log(getBigger(12,1))} */}
      {/* {console.log(getLowNumber("ermi" , 8,4,1))} */}
      {/* {console.log(checkIfExist("shimon" , "type" , "jkjkl" , "shimon" , "shimon"))} */}
      {/* {console.log(orderNames(undefined, "acb", "abc" , "abb"))} */}
      {/* {ifExist()} */}
    
      {
        // printStudents({FirstName:"shomon" , LastName:"hhj" , Age:12},{FirstName:"ermi" , LastName:"amir" , Age:18})
      }
      {/* {console.log(getOldestStudent({FirstName:"shomon" , LastName:"hhj" , Age:16},{FirstName:"ermi" , LastName:"amir" , Age:2}))} */}
      {/* {console.log(checkStudentName("shimon" , {FirstName:"shimon" , LastName:"hhj" , Age:16},{FirstName:"ermi" , LastName:"amir" , Age:2} ))} */}
      <button onClick={() => details()}>Print</button>
    </>
  );
};

export default Home;
