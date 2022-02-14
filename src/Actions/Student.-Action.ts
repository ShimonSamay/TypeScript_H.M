import { studentArray } from "../Reducers/Student-Reducer";


 let studentAction = (value:any):any => {
   return { type : "show",payload: value }
}

export default studentAction ;