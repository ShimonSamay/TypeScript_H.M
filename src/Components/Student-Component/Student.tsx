import React from "react";
import { useReducer } from "react"
import {studentArray, studentReducer } from "../../Reducers/Student-Reducer";
import studentAction from "../../Actions/Student.-Action";
import Istudent from "../../Models/IStudent/Istudent";



const Student = () => {

let [studentState , studentDispatch] = useReducer(studentReducer,[])

let printName = () => {
studentDispatch(studentAction(studentArray)) ;
console.log(studentState);
}
 return (
    <>
    <p>Student Component</p>
    {

      studentState ? studentState.map((item: Istudent) =>
      <h1>{item.FirstName}</h1> 
      )
      : <p>not text</p>

    }
    <button onClick={printName}>click</button>
    </>
 )
}

export default Student ;