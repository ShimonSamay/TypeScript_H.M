import Istudent from "../Models/IStudent/Istudent";

let stu1:Istudent = {FirstName:"Shimon" , LastName:"Samay" , Age:22};
let stu2:Istudent = {FirstName:"moshe" , LastName:"x" , Age:25};

export let studentArray:Istudent[] = [stu1,stu2];

export let studentReducer = (state:any , action:any):any => {
   switch(action.type){

     case "show" : 
     return action.payload ;
     
     default :
     return state ;
   }
}